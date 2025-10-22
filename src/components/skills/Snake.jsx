import { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Snake({ start, setStart, closeSnakeGame }) {
  const cellSize = 12;
  const cols = useRef(0);
  const rows = useRef(0);
  const lastUpdate = useRef(0);
  const highScore = useRef(0);
  const containerRef = useRef(null);
  const snakeLength = useRef(3);
  const direction = useRef("LEFT");
  const animationRef = useRef(null);
  const directionLocked = useRef(false);
  const [currentPosition, setCurrentPosition] = useState([]);
  const [grid, setGrid] = useState([]);
  const [movementSpeed, setMovementSpeed] = useState(100);
  const [food, setFood] = useState(null);

  function setFoodPosition(grid) {
    let newPos;
    do {
      newPos = Math.floor(Math.random() * grid.length);
    } while (currentPosition.includes(newPos));

    setFood(newPos);
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const { offsetWidth, offsetHeight } = containerRef.current;

    cols.current = Math.floor(offsetWidth / cellSize);
    rows.current = Math.floor(offsetHeight / cellSize);
    const col = Math.floor(cols.current / 2);
    const row = Math.floor(rows.current / 2);
    const total = row * cols.current + col;
    const totalCells = cols.current * rows.current;
    let gridArray = [];
    for (let i = 1; i <= totalCells; i++) {
      gridArray.push(i);
    }
    if (start) {
      setCurrentPosition([total + 1, total + 2, total + 3]);
      setFoodPosition(gridArray);
      setGrid(gridArray);
    }
  }, [start]);

  function snakeMovement(timestamp) {
    if (!start) return;
    if (!lastUpdate.current) lastUpdate.current = timestamp;

    if (timestamp - lastUpdate.current > movementSpeed) {
      lastUpdate.current = timestamp;

      setCurrentPosition((prev) => {
        const oldHead = prev[0];
        let newHead = oldHead;

        if (direction.current === "LEFT") {
          newHead = oldHead - 1;
        } else if (direction.current === "RIGHT") {
          newHead = oldHead + 1;
        } else if (direction.current === "UP") {
          newHead = oldHead - cols.current;
        } else if (direction.current === "DOWN") {
          newHead = oldHead + cols.current;
        }

        const updated =
          prev.length < snakeLength.current
            ? [newHead, ...prev]
            : [newHead, ...prev.slice(0, prev.length - 1)];
        return updated;
      });

      directionLocked.current = false;
    }

    animationRef.current = requestAnimationFrame(snakeMovement);
  }

  useEffect(() => {
    if (start) {
      animationRef.current = requestAnimationFrame(snakeMovement);
    } else {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [start]);

  if (currentPosition[0] === food) {
    setFoodPosition(grid);
    snakeLength.current += 1;
  }
  if (
    currentPosition
      .slice(1, currentPosition.length)
      .includes(currentPosition[0]) ||
    grid[grid.length - 1] < currentPosition[0] ||
    grid[0] > currentPosition[0] ||
    (direction.current === "LEFT" && currentPosition[0] % cols.current === 0) ||
    (direction.current === "RIGHT" &&
      (currentPosition[0] - 1) % cols.current === 0)
  ) {
    highScore.current < snakeLength.current - 3
      ? (highScore.current = snakeLength.current - 3)
      : highScore.current;
    setCurrentPosition([]);
    setFood(null);
    direction.current = "LEFT";
    snakeLength.current = 3;
    return setTimeout(() => setStart(false), 0);
  }

  function handleDirection(e, phoneNav = null) {
    const key = phoneNav ? phoneNav : e.key;
    if (directionLocked.current) return;

    if (key === "w" && direction.current !== "DOWN") direction.current = "UP";
    else if (key === "a" && direction.current !== "RIGHT")
      direction.current = "LEFT";
    else if (key === "s" && direction.current !== "UP")
      direction.current = "DOWN";
    else if (key === "d" && direction.current !== "LEFT")
      direction.current = "RIGHT";

    directionLocked.current = true;
  }
  useEffect(() => {
    window.addEventListener("keydown", handleDirection);
    return () => window.removeEventListener("keydown", handleDirection);
  }, []);

  return (
    <div className="flex flex-col items-center md:min-w-[710px] w-full h-fit max-w-[900px] m-auto">
      <div className="relative bg-[#8fcc10] flex flex-col p-2 rounded-md items-center justify-center w-fit h-fit">
        <div className="md:hidden absolute mb-[7px] left-[calc(50%-16px)] -bottom-[50px]">
          <button
            onClick={(e) => handleDirection(e, "w")}
            className="absolute -top-[40px]  text-white"
          >
            <FaArrowAltCircleUp size={40} />
          </button>
          <button
            onClick={(e) => handleDirection(e, "d")}
            className="absolute top-1/2 -right-[84px] rotate-90 text-white"
          >
            <FaArrowAltCircleUp size={40} />
          </button>
          <button
            onClick={(e) => handleDirection(e, "s")}
            className="absolute -bottom-[80px] rotate-180 text-white"
          >
            <FaArrowAltCircleUp size={40} />
          </button>
          <button
            onClick={(e) => handleDirection(e, "a")}
            className="absolute top-1/2 -left-[44px] rotate-270 text-white"
          >
            <FaArrowAltCircleUp size={40} />
          </button>
        </div>
        <div className="bg-[#8fcc10] border-b-3 mb-4 pb-1 border-black text-2xl text-black font-extrabold w-full">
          <p className="font-snake">{snakeLength.current - 3}</p>
        </div>
        <div className="box-border border-3 border-black h-fit w-fit ">
          <div
            ref={containerRef}
            className="flex flex-row flex-wrap bg-[#8fcc10] h-[314px] xs:h-[348px] md:h-[444px] w-[314px] xs:w-[348px] md:w-[444px]"
          >
            {grid.map((d, i) => {
              let isHead = d === currentPosition[0];
              let isBody = currentPosition
                .slice(1, currentPosition.length)
                .includes(d);
              let isFood = d === food;
              return (
                <div
                  key={d}
                  style={{
                    height: `${cellSize}px`,
                    width: `${cellSize}px`,
                  }}
                  className={`box-border text-sm ${
                    isHead
                      ? `bg-black ${
                          direction.current === "LEFT"
                            ? "rounded-tl-xl rounded-bl-xl border-r-2 border-[#8fcc10]"
                            : direction.current === "RIGHT"
                            ? "rounded-tr-xl rounded-br-xl border-l-2 border-[#8fcc10]"
                            : direction.current === "UP"
                            ? "rounded-tl-xl rounded-tr-xl border-b-2 border-[#8fcc10]"
                            : "rounded-bl-xl rounded-br-xl border-t-2 border-[#8fcc10]"
                        }`
                      : isBody
                      ? `bg-black`
                      : isFood
                      ? "bg-black rounded-full"
                      : "bg-[#8fcc10]"
                  }`}
                ></div>
              );
            })}
            {!start && (
              <button
                className="font-winky text-black text-4xl absolute top-1/2 left-1/2 cursor-pointer transition-all duration-400 ease-in-out hover:scale-115"
                onClick={() => setStart(true)}
                style={{ transform: "translateX(-50%)" }}
              >
                Start
              </button>
            )}
            <button
              onClick={closeSnakeGame}
              className="absolute top-2 right-2 z-100 text-black cursor-pointer"
            >
              <IoMdClose size={30} />
            </button>
            <p
              style={{ transform: "translateX(50%)" }}
              className="absolute font-snake text-2xl top-2 right-1/2 z-100 text-black cursor-pointer"
            >
              High Score: <span className="">{highScore.current}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
