import { useEffect, useRef, useState } from "react";
import { FaTerminal } from "react-icons/fa";
import { RiExpandLeftRightFill, RiContractLeftRightFill } from "react-icons/ri";
import { BsDash } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import CLIOutput from "./CLIOutput";
import Snake from "./Snake";
import snakeBg from "../../assets/snake.webp";

export default function CLI({ isCli, setStart, start, closeCli }) {
  const [isLight, setIsLight] = useState(false);
  const [showUp, setShowUp] = useState(true);
  const [loadedBg, setLoadedBg] = useState(false);
  const [loadedGame, setLoadedGame] = useState(false);
  const [windowState, setWindowState] = useState({
    minimized: false,
    expanded: false,
    closed: false,
  });

  const inputRef = useRef(null);
  function closeTerminal() {
    closeCli();
    setWindowState({
      minimized: false,
      expanded: false,
      closed: false,
    });
  }
  useEffect(() => {
    const inputFocus = setTimeout(() => {
      if (isCli && !loadedBg) inputRef.current.focus();
    }, 400);

    const showBg = setTimeout(() => {
      if (loadedBg) {
        setLoadedGame(true);
      }
    }, 2000);

    return () => clearTimeout(inputFocus, showBg);
  }, [isCli, loadedBg]);

  function minimize() {
    setWindowState((prev) => {
      const state = !prev.minimized;
      if (!state) {
        setTimeout(() => {
          setShowUp(true);
        }, 200);
      } else {
        setShowUp(false);
      }
      return { expanded: false, closed: false, minimized: !prev.minimized };
    });
  }

  function closeSnakeGame() {
    setLoadedBg(false);
    setLoadedGame(false);
  }
  return (
    <>
      <div
        className={`overflow-hidden flex-col items-center gap-10 ${
          isCli ? "z-50" : "z-0"
        } ${!loadedBg ? "opacity-100 z-50" : "opacity-0 z-0 w-0"}`}
      >
        {!loadedBg && (
          <div
            className={`${
              windowState.expanded && "z-10"
            } w-full h-full -translate-x-1/2 top-0 absolute transition-all duration-400 ease-in-out left-1/2`}
          >
            <div
              style={{ transform: "translate(-50%, 0%)" }}
              onClick={() => inputRef.current?.focus()}
              className={`transition-[width, height] duration-400 ease-in-out rounded-lg box-border border-1 absolute left-1/2 ${
                isLight
                  ? "border-gray-300 bg-white"
                  : "bg-black border-gray-800"
              } ${
                windowState.expanded
                  ? "w-screen max-w-screen min-w-screen h-screen overflow-hidden top-0"
                  : windowState.minimized
                  ? "min-w-[52px] w-[52px] max-w-[52px] top-[45%] xs:top-[40%] md:top-[35%] h-[38px]"
                  : "min-w-[330px] w-full max-w-[900px] h-[420px] top-[45%] xs:top-[40%] md:top-[35%]"
              }`}
            >
              <h3
                className={`transition-opacity duration-200 ease-in-out text-4xl absolute -top-5 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold pb-10 ${
                  windowState.expanded ? "opacity-0" : "opacity-100"
                }`}
              >
                Terminal
              </h3>
              <div
                className={`px-4 ${
                  windowState.minimized
                    ? "w-fit rounded-lg"
                    : "w-full rounded-t-lg"
                }  ${
                  isLight ? "bg-gray-300" : "bg-gray-800"
                } transition-all duration-500 ease-in-out text-gray-400 flex flex-row justify-between items-center h-9 p-2`}
              >
                <div className={`gap-2 z-100 ${showUp ? "flex" : "hidden"}`}>
                  <div
                    onClick={closeTerminal}
                    className={`flex items-center justify-center transition-all duration-500 ease-in-out w-3 h-3 bg-red-500 rounded-full`}
                  >
                    <IoMdClose
                      className="cursor-pointer text-black opacity-0 hover:opacity-100"
                      size={11}
                    />
                  </div>
                  <div
                    onClick={minimize}
                    className={`flex items-center justify-center transition-all duration-500 ease-in-out w-3 h-3 bg-yellow-500 rounded-full`}
                  >
                    <BsDash
                      className="cursor-pointer text-black opacity-0 hover:opacity-100"
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
                    <div className="cursor-pointer text-black opacity-0 rotate-45 hover:opacity-100">
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
                  <FaTerminal size={22} />
                </button>
              </div>
              <CLIOutput
                showUp={showUp}
                setIsLight={setIsLight}
                isLight={isLight}
                minimized={windowState.minimized}
                inputRef={inputRef}
                expanded={windowState.expanded}
                setLoadedBg={setLoadedBg}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute top-1/2 left-1/2 transition-opacity duration-1000 ease-in-out ${
          loadedBg ? "opacity-100 z-50" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {loadedBg && (
          <div
            className={`absolute top-20 left-1/2 transition-opacity duration-1000 ease-out min-w-[330px] h-[330px] xs:min-w-[444px] xs:h-[444px] sm:min-w-[555px] sm:h-[555px] ${
              !loadedGame ? "opacity-100 z-50" : "opacity-0 z-0"
            }`}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <img
              className="h-full w-full"
              src={snakeBg}
              alt="Snake background"
            />
          </div>
        )}
        <div
          className={`absolute top-25 md:top-25 lg:top-25 left-1/2 transition-opacity duration-2000 ease-in-out ${
            loadedGame ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {!start && loadedGame && (
            <div className="hidden md:flex flex-col font-extrabold text-white absolute top-2/5 left-0">
              <span className="absolute -top-30 lg:-left-10 text-2xl">
                Controls
              </span>
              {["W", "A", "S", "D"].map((l, i) => (
                <span
                  key={i}
                  className={`border-1 absolute w-10 h-10 lg:w-16 lg:h-16 ${
                    i === 0
                      ? "left-7 bottom-1  lg:-left-5"
                      : i === 1
                      ? "-right-6 lg:right-6"
                      : i === 2
                      ? "left-7 lg:-left-5 top-0"
                      : "left-18 lg:left-12"
                  } border-white lg:p-4 bg-gray-400 rounded-lg text-2xl text-center`}
                >
                  {l}
                </span>
              ))}
            </div>
          )}
          {loadedGame && (
            <Snake
              setStart={setStart}
              start={start}
              closeSnakeGame={closeSnakeGame}
            />
          )}
        </div>
      </div>
    </>
  );
}
