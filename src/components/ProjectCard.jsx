import NavBtns from "./ProjectComps/NavBtns";
import Tech from "./ProjectComps/Tech";

export default function ProjectCard({ p, activeProject, setActiveProject }) {
  return (
    <div
      className={`w-full border-2 border-transparent h-full rounded-lg flex flex-col transition-all duration-400 ease-in-out hover:border-green-600 group-hover:not-hover:opacity-50 hover:scale-110 hover:z-50`}
    >
      <div className="relative h-1/2 w-full overflow-hidden group">
        <img
          className="relative top-0 w-full h-[300px] rounded-t-lg"
          src={p.image}
        />
        <p className="absolute top-0 right-0 rounded-tr-lg px-2 py-1 bg-green-600 font-semibold">
          {p.type}
        </p>
      </div>
      <div className="h-1/2 w-full bg-slate-700 flex flex-col justify-between p-4 rounded-b-lg">
        <h3 className="text-2xl font-semibold">{p.title}</h3>
        <p className="overflow-hidden line-clamp-2">{p.description}</p>
        <Tech p={p} activeProject={activeProject} />
        <div className="flex flex-row justify-between items-center">
          <NavBtns {...p} activeProject={activeProject} />
          <button
            onClick={() => setActiveProject(p.id)}
            className="px-3 py-2 bg-green-600 cursor-pointer rounded-md hover:bg-green-700"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
