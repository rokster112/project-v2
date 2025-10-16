import { useEffect, useRef, useState } from "react";
import CategoryBtns from "../components/CategoryBtns";
import { projectList } from "../data/values";
import ProjectCard from "../components/ProjectCard";
import ProjectSingle from "../components/ProjectSingle";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";

export default function Projects() {
  const [category, setCategory] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeProject]);

  const projectRefs = useRef({});

  const handleCloseProject = () => {
    const ref = projectRefs.current[activeProject];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setActiveProject(null);
  };

  const buttons = [
    { title: "All", value: false, icon: <FaCode size={22} /> },
    {
      title: "Frontend",
      value: "Frontend",
      icon: <IoIosColorPalette size={22} />,
    },
    {
      title: "Full Stack",
      value: "Full Stack",
      icon: <FaLaptopCode size={22} />,
    },
    {
      title: "Other",
      value: "Other",
      icon: <FaRocket size={22} />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-2 xs:px-14 flex flex-col gap-10">
      <div
        className={`transition-opacity duration-500 ${
          activeProject
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <h1 className="text-[40px] xs:text-[48px] sm:text-[55px] md:text-[68px] font-bold text-center pt-10">
          My <span className="text-green-600">Projects</span>
        </h1>
        <CategoryBtns
          buttons={buttons}
          handleCategoryClick={setCategory}
          category={category}
        />
        <div className="group grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center mb-4">
          {projectList
            .filter((p) => (category ? p.type === category : true))
            .map((p) => {
              if (!projectRefs.current[p.id])
                projectRefs.current[p.id] = { current: null };
              return (
                <ProjectCard
                  key={p.id}
                  p={p}
                  ref={projectRefs.current[p.id]}
                  setActiveProject={setActiveProject}
                  activeProject={activeProject}
                />
              );
            })}
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 overflow-auto z-50 transition-opacity duration-500 ${
          activeProject
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {activeProject && (
          <ProjectSingle
            {...projectList.find((p) => p.id === activeProject)}
            setActiveProject={setActiveProject}
            activeProject={activeProject}
            handleClose={handleCloseProject}
          />
        )}
      </div>
    </div>
  );
}
