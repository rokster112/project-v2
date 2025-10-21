import { useEffect, useState } from "react";
import { HandleChange } from "../hooks/HandleChange";
import { commandDisplay, skillsValues } from "../../data/values";
import ListSkills from "./ListSkills";
import SingleSkill from "./SingleSkill";
import CompareSkills from "./CompareSkills";
import Snake from "./Snake";

export default function CLIOutput({
  showUp,
  minimized,
  inputRef,
  setIsLight,
  isLight,
  expanded,
  setLoadedBg,
}) {
  const [formData, setFormData] = useState({
    label: "rokas@skills:~$",
    input: "",
  });
  const [content, setContent] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);

  function filterArray(arr, condition) {
    return arr ? arr.filter((a) => a.category === condition) : [];
  }

  function setState(message, type = "input") {
    message.length === 0
      ? setContent([])
      : setContent((prev) => [...prev, { [type]: message }]);
  }

  function formatCommand() {
    return formData.input.split(" ").filter((f) => Boolean(f) === true);
  }

  function commandLength(command, allowedLength) {
    const commandArr = formatCommand(command);
    if (allowedLength > command.length) {
      setState(`Missing arguments. Type "help" for usage details.`, "error");
      return false;
    } else if (allowedLength < command.length) {
      return setState(
        `Command "${commandArr[0]}" doesn't take any arguments.`,
        "error"
      );
    }
    return true;
  }

  function help() {
    const command = formatCommand();
    if (!commandLength(command, 1)) return;
    if (command[0] === "help" || command[0] === "?")
      return setState(commandDisplay, "help");
    return;
  }

  function findSkill() {
    const command = formatCommand();
    if (!commandLength(command, 2)) return;
    //! I dont think i even need to check "rokas" here anymore
    //! Also, need to re-write the error message, to somehow have the
    //! CommandLength function handle it.
    if (command[0] === "rokas") {
      if (command.length > 2)
        return setState("Please search for one skill at a time.", "error");
      const skill = skillsValues.find(
        (s) => s.title.toLowerCase() === command[1].toLowerCase()
      );
      if (!skill) {
        return setState(
          `No, Rokas doesn't have "${command[1]}" listed in his skills.`,
          "error"
        );
      } else {
        return setState(skill, "skill");
      }
    }
    return;
  }

  function changeTheme() {
    const command = formatCommand();
    if (!commandLength(command, 2)) return;
    if (
      command[1].toLowerCase() !== "light" &&
      command[1].toLowerCase() !== "dark"
    ) {
      return setState(`Theme "${command[1]}" doesn't exist.`, "error");
    }
    setIsLight(command[1] === "light" ? true : false);
  }

  function listSkills() {
    const command = formatCommand();
    if (!commandLength(command, 2)) return;
    if (command[1].toLowerCase() !== "skills")
      return setState(
        `Invalid "${command[1]}" argument. Did you mean "list skills"?`,
        "error"
      );
    return setState(skillsValues, "skills");
  }

  function compareSkills() {
    const command = formatCommand();
    if (command.length < 3)
      return setState("Not enough valid skills to compare", "error");
    if (command.length > skillsValues.length)
      return setState("Too many skills listed", "error");
    const filteredArr = command.slice(1, command.length).map((c) => {
      const foundSkill = skillsValues.find(
        (s) => s.title.toLowerCase() === c.toLowerCase()
      );

      return foundSkill ? foundSkill : { error: `Unknown skill "${c}"` };
    });
    setState(filteredArr, "compare");
  }

  function clear() {
    const command = formatCommand();
    if (!commandLength(command, 1)) return;
    return setState([]);
  }

  function playSnake() {
    const command = formatCommand();
    if (!commandLength(command, 2)) return;
    if (command[1].toLowerCase() !== "snake")
      return setState(`Unknown command "${command[1]}"`, "error");

    setState("Loading...", "loading");

    setTimeout(() => {
      setLoadedBg(true);
    }, 400);
    return;
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const commands = {
      "?": help,
      help: help,
      rokas: findSkill,
      list: listSkills,
      compare: compareSkills,
      theme: changeTheme,
      clear: clear,
      cls: clear,
      play: playSnake,
    };
    setState(`${formData.label} ${formData.input}`);
    setCommandHistory((prev) => [...prev, formData.input]);
    const command = formatCommand();
    setFormData((prev) => ({ ...prev, input: "" }));
    return commands[command[0]]
      ? commands[command[0]]()
      : setState(
          "Command not recognized. Type 'help' for available commands.",
          "error"
        );
  }

  return (
    <div
      className={`p-4 ${showUp ? "block" : "hidden"}
      ${minimized ? "w-0" : "transition-all duration-400 ease-in-out w-full"} ${
        expanded ? "h-full pb-10" : "h-95"
      }
      font-winky relative overflow-auto`}
    >
      <p className="text-green-400">Welcome to Rokas's Skills Terminal!</p>
      <p className="text-gray-500">
        Check if Rokas knows a specific skill using the command:
      </p>
      <p className="text-blue-500">rokas {"[skillname]"}</p>
      <p className="text-gray-500">Type 'help' for more commands.</p>
      {content?.map((c, cIndex) => {
        const splitInput = c.input ? c?.input.split(" ") : [];
        return (
          <div key={cIndex}>
            {splitInput.length > 0 && (
              <p key={c.input} className="text-green-400 py-1">
                {splitInput[0]}{" "}
                <span className={`${isLight ? "text-black" : "text-white"}`}>
                  {splitInput.slice(1, splitInput.length).join(" ")}
                </span>
              </p>
            )}
            <p className="text-red-400" key={c?.error}>
              {c?.error}
            </p>
            <ul>
              {c?.help && (
                <>
                  <p className="text-yellow-400 font-semibold">
                    Available Commands:
                  </p>
                  {c.help.map((h) => (
                    <li className="text-blue-400" key={h.name}>
                      {h.name}{" "}
                      <span className={isLight ? "text-black" : "text-white"}>
                        {h.description}
                      </span>
                    </li>
                  ))}
                </>
              )}
            </ul>

            {c.skill && <SingleSkill isLight={isLight} skill={c.skill} />}
            {c?.skills && (
              <>
                <p className="text-yellow-400 font-semibold">Rokas's Skills:</p>
                <ListSkills
                  skills={filterArray(c.skills, "Tool")}
                  title={"Tool:"}
                />
                <ListSkills
                  skills={filterArray(c.skills, "Language")}
                  title={"Language:"}
                />
                <ListSkills
                  skills={filterArray(c.skills, "Frontend")}
                  title={"Frontend:"}
                />
                <ListSkills
                  skills={filterArray(c.skills, "Backend")}
                  title={"Backend:"}
                />
              </>
            )}
            {c?.compare && (
              <CompareSkills compare={c.compare} expanded={expanded} />
            )}
            {<p>{c?.loading}</p>}
          </div>
        );
      })}
      <form className="pt-2" onSubmit={(e) => handleSubmit(e)}>
        <label className="text-green-400 flex gap-2">
          {formData.label}{" "}
          <input
            ref={inputRef}
            className={`${
              isLight ? "text-black" : "text-white"
            } outline-0 w-full`}
            name="input"
            value={formData.input}
            onChange={(e) => HandleChange(e, setFormData)}
          />
        </label>
      </form>
    </div>
  );
}
