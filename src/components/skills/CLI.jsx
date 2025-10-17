import { useEffect, useRef, useState } from "react";
import { FaTerminal } from "react-icons/fa";
import { RiExpandLeftRightFill, RiContractLeftRightFill } from "react-icons/ri";
import { BsDash } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { HandleChange } from "../hooks/HandleChange";

export default function CLI({ isCli, setIsCli }) {
  const [isLight, setIsLight] = useState(false);
  const [showUp, setShowUp] = useState(true);
  const [windowState, setWindowState] = useState({
    minimized: false,
    expanded: false,
    closed: false,
  });
  const [formData, setFormData] = useState({
    input: "",
  });
  const inputRef = useRef(null);
  function closeTerminal() {
    setIsCli(false);
    setWindowState({
      minimized: false,
      expanded: false,
      closed: false,
    });
  }
  useEffect(() => {
    setTimeout(() => {
      if (isCli) inputRef.current.focus();
    }, 400);
  }, [isCli]);

  function minimize() {
    setWindowState((prev) => {
      const state = !prev.minimized;
      if (!state) {
        setTimeout(() => {
          setShowUp(true);
        }, 300);
      } else {
        setShowUp(false);
      }
      return { expanded: false, closed: false, minimized: !prev.minimized };
    });
  }
  return (
    <div
      className={`flex min-h-full relative flex-col items-center gap-10 ${
        isCli ? "z-50" : "z-0"
      }`}
    >
      <h3 className="text-4xl text-center font-bold">Terminal</h3>
      <div
        onClick={() => inputRef.current?.focus()}
        className={`
    fixed top-1/2 left-1/2
    box-border
    border-1 transition-all duration-500 ease-in-out
    ${isLight ? "border-gray-300 bg-white" : "bg-black border-gray-800"}
    rounded-lg
  `}
        style={{
          width: windowState.expanded
            ? "100vw"
            : windowState.minimized
            ? "20px"
            : "90%",
          maxWidth: windowState.expanded
            ? "100vw"
            : windowState.minimized
            ? "20px"
            : "900px",
          height: windowState.expanded
            ? "100vh"
            : windowState.minimized
            ? "38px"
            : "420px",
          minWidth: windowState.expanded
            ? "100vw"
            : windowState.minimized
            ? "52px"
            : "340px",
          top: windowState.expanded ? 0 : "40%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          className={`px-4 ${
            windowState.minimized ? "w-fit rounded-lg" : "w-full rounded-t-lg"
          }  ${
            isLight ? "bg-gray-300" : "bg-gray-800"
          } transition-all duration-500 ease-in-out text-gray-400 flex flex-row justify-between items-center h-9 p-2`}
        >
          <div className={`gap-2 ${showUp ? "flex" : "hidden"}`}>
            <div
              onClick={closeTerminal}
              className={`flex items-center justify-center transition-all duration-500 ease-in-out w-3 h-3 bg-red-500 rounded-full`}
            >
              <IoMdClose
                className="text-black opacity-0 hover:opacity-100"
                size={11}
              />
            </div>
            <div
              onClick={minimize}
              className={`flex items-center justify-center transition-all duration-500 ease-in-out w-3 h-3 bg-yellow-500 rounded-full`}
            >
              <BsDash
                className="text-black opacity-0 hover:opacity-100"
                size={11}
              />
            </div>
            <div
              onClick={() =>
                setWindowState((prev) => ({
                  ...prev,
                  expanded: !prev.expanded,
                }))
              }
              className={`flex items-center justify-center transition-all duration-500 ease-in-out w-3 h-3 bg-green-500 rounded-full`}
            >
              <div className="text-black opacity-0 rotate-45 hover:opacity-100">
                {!windowState.expanded ? (
                  <RiExpandLeftRightFill size={11} />
                ) : (
                  <RiContractLeftRightFill size={11} />
                )}
              </div>
            </div>
          </div>
          <p className={`${showUp ? "block" : "hidden"}`}>
            rokas@skills-terminal
          </p>
          <button
            disabled={showUp}
            className={`${!showUp ? "cursor-pointer" : ""}`}
            onClick={minimize}
          >
            <FaTerminal size={18} />
          </button>
        </div>
        <div
          className={`p-4 ${showUp ? "block" : "hidden"} ${
            windowState.minimized
              ? "w-0"
              : "transition-all duration-400 ease-in-out w-full"
          } font-winky relative`}
        >
          <p className="text-green-400">Welcome to Rokas's Skills Terminal!</p>
          <p className="text-gray-500">
            Check if Rokas knows a specific skill using the command:
          </p>
          <p className="text-blue-500">rokas {"[skillname]"}</p>
          <p className="text-gray-500">Type 'help' for more commands.</p>
          <label className="text-green-400 flex gap-2">
            rokas@skills:~${" "}
            <input
              ref={inputRef}
              className="text-white outline-0 w-full"
              name="input"
              value={formData.input}
              onChange={(e) => HandleChange(e, setFormData)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
