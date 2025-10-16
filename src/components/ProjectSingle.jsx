import { IoIosCloseCircleOutline } from "react-icons/io";
import NavBtns from "./ProjectComps/NavBtns";
import Tech from "./ProjectComps/Tech";
import { useRef } from "react";

export default function ProjectSingle(props) {
  return (
    <div className="xs:my-4 m-auto h-full min-w-[340px] w-full max-w-[900px] xs:rounded-lg overflow-auto bg-slate-700">
      <div className="relative h-fit w-full overflow-hidden">
        <img
          className="relative w-full h-fit object-contain xs:rounded-t-lg"
          src={props.image}
        />
        <button
          onClick={props.handleClose}
          className="absolute sm:hidden top-0 right-0 my-4 py-2 px-4 font-semibold bg-slate-500 rounded-md hover:bg-slate-600 cursor-pointer mr-4"
        >
          Close
        </button>
      </div>
      <div className="px-4 pt-4">
        <div className="flex flex-col gap-4 pb-4 border-b-1 border-slate-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
            <h3 className="text-2xl font-semibold">{props.title}</h3>
            <NavBtns {...props} activeProject={props.activeProject} />
          </div>
          <p className="text-gray-200">{props.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div>
              <h4 className="text-xl font-semibold text-green-600 mb-2">
                Technologies
              </h4>
              <Tech activeProject={props.activeProject} p={props} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-600 mb-2">
                Features
              </h4>
              <ul className="pl-4">
                {props.features.map((f) => (
                  <li key={f} className="list-disc text-green-600">
                    <span className="text-gray-200">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={props.handleClose}
        className="hidden sm:flex place-self-end my-4 py-2 px-4 font-semibold bg-slate-500 rounded-md hover:bg-slate-600 cursor-pointer mr-4"
      >
        Close
      </button>
    </div>
  );
}
