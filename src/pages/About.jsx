import { aboutValues } from "../data/values";
import QuoteFetch from "../components/hooks/QuoteFetch";
import { FaLaptopCode } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import profilePicture from "../assets/profile-pic.jpeg";
import { useEffect } from "react";
import CustomCursor from "../components/CustomCursor";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.remove("opacity-100");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const targets = document.querySelectorAll(".inView");
    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-black text-white text-lg px-4 flex flex-col items-center justify-center">
      <div className="md:min-w-[710px] w-full max-w-[900px]">
        <h1 className="text-[40px] xs:text-[48px] sm:text-[55px] md:text-[68px] font-bold text-center w-auto my-10">
          About <span className="text-green-600">Me</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex md:flex-row-reverse w-full md:w-1/2">
            <div className="md:min-w-[355px] md:max-w-[450px] w-full">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                The
                <span className="text-green-600"> Beginning</span>
              </h3>
              <p>
                I always had an interest in technology, whether it was tinkering
                with devices like phones or laptops to see how they worked or
                trying to fix things just for the challenge. Then I came across
                General Assembly through a work colleague of mine and decided to
                check it out. They had a test that everyone had to take, a basic
                design challenge, and it instantly got me hooked. I've never
                looked back since.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full md:w-1/2">
            <div className="md:min-w-[355px] md:max-w-[450px] w-full bg-slate-800 rounded-md p-4 flex flex-col gap-4">
              <h3 className="flex flex-row items-center text-2xl font-bold">
                <span>
                  <GiGraduateCap color="#00a63e" size={32} className="mr-3" />
                </span>
                Education
              </h3>
              <div className="border-l-3 border-green-600 pl-2">
                <p className="text-green-600 text-base font-semibold">
                  Oct 2018 - June 2022
                </p>
                <p>B.Sc Sports Science and Exercise</p>
                <a
                  className="transition ease-in-out duration-400 hover:text-green-600 flex w-fit text-gray-500 text-base"
                  href="https://www.uel.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="font-semibold">University of East London</p>
                </a>
              </div>
              <div className="border-l-3 border-green-600 pl-2">
                <p className="text-green-600 text-base font-semibold">
                  Sep 2014 - June 2017
                </p>
                <p className="font-semibold">Sports Science and Exercise</p>
                <a
                  className="transition ease-in-out duration-400 hover:text-green-600 flex w-fit text-gray-500 text-base"
                  href="https://www.peterborough.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="font-semibold">Peterborough Regional College</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold my-10">
            Professional <span className="text-green-600">Development</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
            <div className="border-1 border-slate-700 w-full h-full md:h-[346px] p-4 transition-all duration-400 ease-in-out hover:border-green-600 rounded-md bg-slate-800">
              <FaLaptopCode size={32} color="#00a63e" className="mb-2" />
              <h3 className="font-bold">Software Engineering Immersive</h3>
              <p className="text-base text-gray-500 font-semibold">
                General Assembly
              </p>
              <p className="text-green-600 text-base font-semibold">
                June 2022 - Sep 2022
              </p>
              <p className="text-base">
                A three month intensive bootcamp focused on full-stack
                development, preparing participants for professional roles in
                web development.
              </p>
            </div>
            <div className="border-1 border-slate-700 w-full h-full md:h-[346px] md:overflow-hidden md:hover:h-[100%] p-4 transition-all duration-300 ease-in hover:border-green-600 rounded-md bg-slate-800">
              <FaLaptopCode size={32} color="#00a63e" className="mb-2" />
              <h3 className="font-bold">Front-end & Full-stack Development</h3>
              <p className="text-base text-gray-500 font-semibold">Scrimba</p>
              <p className="text-green-600 text-base font-semibold">
                Jan 2025 - Mar 2025
              </p>
              <p className="text-base">
                Comprehensive, project based curriculum spanning modern
                front-end technologies (React, responsive design, component
                architecture) and full-stack development with Node.js,
                Express.js, and Supabase.
              </p>
            </div>
            <div className="border-1 border-slate-700 w-full h-full md:h-[346px] md:overflow-hidden md:hover:h-[100%] p-4 transition-all duration-300 ease-in hover:border-green-600 rounded-md bg-slate-800">
              <FaLaptopCode size={32} color="#00a63e" className="mb-2" />
              <h3 className="font-bold">C# & ASP.NET Skill Path</h3>
              <p className="text-base text-gray-500 font-semibold">
                Codecademy
              </p>
              <p className="text-green-600 text-base font-semibold">
                May 2025 - June 2025
              </p>
              <p className="text-base text-gray-200">
                Practical curriculum covering C# fundamentals and ASP.NET web
                development, with hands on projects to build scalable web
                applications.
              </p>
            </div>
          </div>
          <div className="bg-slate-800 rounded-md my-10 p-4 flex flex-col items-center justify-center gap-6">
            <h2 className="text-lg xs:text-2xl sm:text-3xl font-bold">
              <span className="text-base xs:text-2xl sm:text-3xl text-green-600">
                {"<h1> "}
              </span>
              Professional Summary
              <span className="text-base xs:text-2xl sm:text-3xl text-green-600">
                {" </h1>"}
              </span>
            </h2>
            <div className="h-32 w-32 bg-red-300 rounded-full border-3 border-green-600">
              <img
                src={profilePicture}
                className="h-full w-full rounded-full"
              />
            </div>
            <p className="text-base xs:text-lg">
              I'm{" "}
              <span className="text-green-600 font-semibold">
                Rokas Arlauskas
              </span>
              , a{" "}
              <span className="text-green-600 font-semibold">Full-Stack</span>{" "}
              developer with a background in{" "}
              <span className="text-green-600 font-semibold">
                Sports Science
              </span>{" "}
              and a strong drive to create sleek, intuitive, and user friendly
              digital experiences. My transition into tech began with{" "}
              <span className="text-green-600 font-semibold">
                General Assembly's
              </span>{" "}
              immersive bootcamp and continued through{" "}
              <span className="text-green-600 font-semibold">Scrimba’s</span>{" "}
              Full-Stack Developer Path, where I built real-world projects using
              tools like React, Firebase, Express.js, and Node.js.
            </p>
            <p className="text-base xs:text-lg">
              I enjoy crafting responsive front-end interfaces and building out
              functional backends, always aiming for clean, maintainable code. I
              approach development with curiosity, creativity, and a user first
              mindset, whether I’m debugging, designing, or deploying. I'm
              excited to keep learning and growing in a team that values
              thoughtful design, clear communication, and purposeful solutions.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              <span className="text-green-600">Quote</span> Of The Day
            </h2>
            <QuoteFetch />
          </div>
          <div className="relative flex flex-col w-full gap-10">
            <h2 className="text-lg xs:text-2xl sm:text-3xl font-bold text-center z-50">
              Things I <span className="text-green-600">Value</span>
            </h2>
            <div className="absolute w-1 h-[calc(100%-76px)] top-[76px] left-1/2 z-10 transform -translate-x-[50%] opacity-40 bg-green-600"></div>
            {aboutValues.map((val, index, arr) => (
              <div
                className={`inView opacity-0 transition-opacity duration-800 relative view flex flex-col bg-slate-800 z-20 md:w-[calc(50%-16px)] rounded-md ${
                  index % 2 === 0
                    ? "md:right-0 md:items-end md:text-end"
                    : "md:left-[calc(50%+16px)]"
                }`}
                key={index}
              >
                <div className="hover:border-green-600 transition-border duration-400 border-1 border-slate-700 w-full h-full p-4 rounded-md">
                  <h3
                    className={`text-green-600 font-semibold flex flex-col ${
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}
                  >
                    <span>{val.icon}</span>
                    {val.title}
                  </h3>
                  <p>{val.description}</p>
                  <div
                    className={`md:absolute h-4 w-4 bg-green-600 rounded-full  ${
                      index === arr.length - 1
                        ? "absolute right-[calc(50%-8px)] -top-[8px]"
                        : "-bottom-6 relative -right-[calc(50%-8px)]"
                    } md:top-1/2 ${
                      index % 2 === 0 ? "md:right-[-10px]" : "md:left-[-10px]"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-800 p-4 flex flex-col gap-6 my-10 rounded-md">
            <h2 className="text-lg xs:text-2xl sm:text-3xl font-bold text-center">
              Finding The Right{" "}
              <span className="text-lg xs:text-2xl sm:text-3xl text-green-600">
                Path
              </span>
            </h2>
            <p>
              Since I was a child, I dreamed of playing professional basketball.
              That ambition stayed with me for years, fueling my{" "}
              <span className="text-green-600 font-semibold">discipline</span>{" "}
              and{" "}
              <span className="text-green-600 font-semibold">
                determination
              </span>
              . But like many dreams, it eventually met reality, and I found
              myself searching for something else that could ignite that same
              level of passion and purpose.{" "}
            </p>{" "}
            <p>
              {" "}
              I pursued a degree in Sports Exercise and Science, then moved into
              the construction industry, where I quickly advanced to a
              Supervisor role. I enjoyed the challenge, the{" "}
              <span className="text-green-600 font-semibold">
                problem solving
              </span>
              , and the hands on nature of the work, and my{" "}
              <span className="text-green-600 font-semibold">curiosity</span>{" "}
              helped me grow fast. But even then, something was missing.{" "}
            </p>{" "}
            <p>
              {" "}
              It wasn’t until I discovered{" "}
              <span className="text-green-600 font-semibold">
                web development
              </span>{" "}
              that things started to click. Whether I was building out projects
              or learning a new framework, I felt fully engaged, the same way I
              once did on the court.{" "}
              <span className="text-green-600 font-semibold">Coding</span> gave
              me that sense of curiosity, focus, and fulfillment I had been
              looking for. It’s more than a skillset to me, it’s a career I
              genuinely love doing, day in and day out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
