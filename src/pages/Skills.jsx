import { useState, useEffect } from "react";
import { skillsValues } from "../data/values";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { GrDatabase } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";

export default function Skills() {
  const [category, setCategory] = useState(true);
  const [isCli, setIsCli] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const buttons = [
    { title: "All", value: true, icon: <FaCode size={22} /> },
    {
      title: "Frontend",
      value: "Frontend",
      icon: <IoIosColorPalette size={22} />,
    },
    { title: "Backend", value: "Backend", icon: <GrDatabase size={22} /> },
    { title: "Languages", value: "Language", icon: <FaLaptopCode size={22} /> },
    { title: "Tools", value: "Tool", icon: <VscTools size={22} /> },
  ];

  const handleCategoryClick = (value) => {
    setRefresh(false);
    setCategory(value);

    setTimeout(() => {
      setRefresh(true);
    }, 50);
  };

  useEffect(() => {
    setRefresh(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 flex flex-col overflow-hidden gap-10">
      <h1 className="text-[40px] xs:text-[48px] sm:text-[55px] md:text-[68px] font-bold text-center w-auto pt-10">
        My <span className="text-green-600">Skills</span>
      </h1>
      <div className="flex flex-row justify-center items-center font-bold text-lg">
        <button
          className={`cursor-pointer transition-all duration-400 ease-in-out flex flex-row-reverse justify-center items-center w-24 rounded-tl-xl rounded-bl-xl p-4 ${
            !isCli ? "bg-green-600" : "bg-slate-800 hover:bg-slate-700"
          }`}
          onClick={() => {
            setIsCli(false);
            setRefresh(true);
          }}
        >
          GUI
        </button>
        <button
          className={`cursor-pointer transition-all duration-400 ease-in-out flex flex-row-reverse justify-center items-center w-24 rounded-tr-xl rounded-br-xl p-4 ${
            isCli ? "bg-green-600" : "bg-slate-800 hover:bg-slate-700"
          }`}
          onClick={() => {
            setIsCli(true);
            setRefresh(false);
          }}
        >
          CLI
        </button>
      </div>
      <div
        className={`transition-all duration-400 ease-in-out ${
          isCli ? "opacity-0 h-0" : "opacity-100 h-full"
        }`}
      >
        <div className="flex flex-row items-center justify-center gap-6 mb-10 flex-wrap">
          {buttons.map((btn) => (
            <button
              key={btn.title}
              onClick={() => handleCategoryClick(btn.value)}
              className={`cursor-pointer transition-all duration-400 ease-in-out flex flex-row-reverse justify-center items-center w-34 rounded-md p-4 ${
                btn.value === category
                  ? "bg-green-600"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <h4 className="font-semibold">{btn.title}</h4>
              <div className="text-green-800 pr-2">{btn.icon}</div>
            </button>
          ))}
        </div>
        <div className="md:min-w-[710px] w-full max-w-[900px] grid md:grid-cols-3 gap-6 m-auto">
          {skillsValues
            .filter((skill) =>
              category === true ? skill : skill.category === category
            )
            .map((skill) => (
              <div
                key={skill.title}
                className="flex flex-col border-1 border-slate-700 h-30 w-full rounded-md bg-slate-800 text-white p-4 transition-all duration-400 ease-in-out hover:border-green-600"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center">
                    <img className="h-8 w-8 mr-2" src={skill.icon} />
                    <h3 className="text-2xl">{skill.title}</h3>
                  </div>
                  <p className="text-green-600 font-bold">{skill.score}%</p>
                </div>
                <div className="relative w-full h-2">
                  <span className="absolute -bottom-13 h-full w-full bg-gray-700 rounded-lg"></span>
                  <span
                    className="absolute -bottom-13 h-2 bg-green-600 rounded-lg z-10 transition-all duration-400 ease-in-out"
                    style={{
                      width: refresh ? `${Number(skill.score)}%` : "0px",
                    }}
                  ></span>
                </div>
              </div>
            ))}
        </div>
        <h1 className="pb-10">Some other content for later</h1>
      </div>
      <h1
        className={`transition-all duration-400 ease-in-out ${
          isCli ? "opacity-100 h-full" : "opacity-0 h-0"
        }`}
      >
        CLI
      </h1>
    </div>
  );
}
