import { useEffect, useRef, useState } from "react";
import { FaTerminal } from "react-icons/fa";
import { RiExpandLeftRightFill, RiContractLeftRightFill } from "react-icons/ri";
import { BsDash } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import CLIOutput from "./CLIOutput";
import Snake from "./Snake";
import snakeBg from "../../assets/snake.webp";

export default function CLI({ isCli, setIsCli, setRefresh, setStart, start }) {
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
    setIsCli(false);
    setWindowState({
      minimized: false,
      expanded: false,
      closed: false,
    });
    setRefresh(true);
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
        className={`flex min-h-full relative flex-col items-center gap-10 ${
          isCli ? "z-50" : "z-0"
        } ${!loadedBg ? "opacity-100 z-50" : "opacity-0 z-0 w-0"}`}
      >
        {!loadedBg && (
          <div>
            <h3 className="text-4xl text-center font-bold">Terminal</h3>
            <div
              onClick={() => inputRef.current?.focus()}
              className={`fixed rounded-lg top-1/2 left-1/2 box-border border-1
                transition-all duration-500 ease-in-out
                ${
                  isLight
                    ? "border-gray-300 bg-white"
                    : "bg-black border-gray-800"
                }`}
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
                  <FaTerminal size={18} />
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
        className={`relative transition-opacity duration-1000 ease-in-out ${
          loadedBg ? "opacity-100 z-50" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {loadedBg && (
          <div
            className={`absolute top-0 left-1/2 transition-opacity duration-1000 ease-out md:min-w-[710px] w-full h-fit max-w-[710px] m-auto ${
              !loadedGame ? "opacity-100 z-50" : "opacity-0"
            }`}
            style={{ transform: "translateX(-50%)" }}
          >
            <img
              className="h-full w-full"
              src={snakeBg}
              alt="Snake background"
            />
          </div>
        )}
        <div
          className={`absolute top-0 left-1/2 transition-opacity duration-2000 ease-in-out ${
            loadedGame ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
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
