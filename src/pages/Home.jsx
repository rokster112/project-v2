import Background from "../components/Background";
import { Download, Linkedin, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center relative h-screen">
      <Background />
      <h1 className="text-[40px] xs:text-[48px] sm:text-[68px] font-bold text-center w-auto mx-6">
        Crafting <span className="text-green-600">Web Solutions</span> with{" "}
        <span className="text-blue-500">React</span> &{" "}
        <span className="text-orange-400">Passion</span>
      </h1>
      <h2 className="mt-8 mx-6 text-center text-[22px] xs:text-[26px] sm:w-140 md:w-180 lg:w-240">
        Hi, I'm <span className="text-green-600">Rokas Arlauskas</span> - a MERN
        stack developer with a passion for clean code and purposeful design.{" "}
        <span className="hidden sm:inline">
          Blending a scientific mindset with creative problem-solving, I build
          sleek, user-focused web apps that are as functional as they are
          intuitive.
        </span>
      </h2>
      <div className="my-12 flex flex-row items-center">
        <a
          className="group relative w-44 h-12 mr-4 rounded-[8px] flex flex-row items-center justify-evenly bg-green-600 font-semibold text-black "
          target="__blank"
          href="https://docs.google.com/document/d/1TesHgCogURFerdNRXJqCg5_gBqVi9SwElPcADPpWwPI/edit?usp=sharing"
        >
          <span className="z-0 bg-green-800 rounded-[8px] absolute h-full w-0 transition-all duration-300 ease-in-out group-hover:w-full group-active:w-full"></span>
          <span className="z-2">
            <Download />
          </span>
          <span className="z-2"> Download CV</span>
        </a>
        <a
          className="relative group border-2 border-emerald-600 w-36 h-12 rounded-[8px] flex justify-center items-center font-semibold self-center"
          href="https://www.linkedin.com/in/rokas-arlauskas/"
          target="_blank"
        >
          <span className="z-2 transition ease-in-out duration-300 delay-100 group-hover:text-black group-active:text-black font-semibold">
            Contact Me
          </span>
          <span className="absolute w-0 left-0 top-0 h-full bg-green-600 transition-all duration-300 ease-in-out group-hover:w-full group-active:w-full z-0"></span>
        </a>
      </div>
      <div className="flex flex-row w-40 justify-evenly">
        <a
          href="https://www.linkedin.com/in/rokas-arlauskas/"
          target="_blank"
          className="hover:text-green-500 cursor-pointer"
        >
          <Linkedin size={32} className="rounded-[8px]" />
        </a>
        <a
          href="https://github.com/rokster112"
          target="_blank"
          className="hover:text-green-500 cursor-pointer"
        >
          <Github size={32} className="rounded-[8px]" />
        </a>
        <a
          href="mailto:rokas.arlauskass@gmail.com"
          className="hover:text-green-500 cursor-pointer"
        >
          <Mail size={32} className="rounded-[8px]" />
        </a>
      </div>
    </div>
  );
}
