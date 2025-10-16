import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function NavBtns(props) {
  return (
    <div
      className={`flex flex-row gap-4 ${
        !props.activeProject ? "justify-start" : "sm:justify-end mt-4 sm:mt-0"
      }`}
    >
      <a
        href={props.github}
        className={`cursor-pointer flex ${
          props.activeProject
            ? "bg-slate-500 px-3 py-2 hover:bg-slate-600 rounded-md hover:text-slate-200"
            : "hover:text-green-200"
        }`}
        target="_blank"
      >
        <FaGithub size={22} />{" "}
        {props.activeProject ? <span className="ml-2">GitHub</span> : ""}
      </a>
      <a
        href={props.website}
        className={`hover:text-green-200 cursor-pointer flex ${
          props.activeProject
            ? "bg-green-600 px-3 py-2 hover:bg-green-700 rounded-md"
            : ""
        }`}
        target="_blank"
      >
        <FaExternalLinkAlt size={22} />{" "}
        {props.activeProject ? <span className="ml-2">Live Page</span> : ""}
      </a>
    </div>
  );
}
