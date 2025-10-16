import { useEffect, useRef, useState } from "react";

export default function Snake() {
  const cellSize = 12;
  const cols = useRef(0);
  const rows = useRef(0);
  const lastUpdate = useRef(0);
  const containerRef = useRef(null);
  const snakeLength = useRef(3);
  const direction = useRef("LEFT");
  const animationRef = useRef(null);
  const directionLocked = useRef(false);
  const [currentPosition, setCurrentPosition] = useState([]);
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState(false);
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
    console.log("YES");
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
    setCurrentPosition([]);
    setFood(null);
    direction.current = "LEFT";
    snakeLength.current = 3;
    return setStart(false);
  }

  useEffect(() => {
    function handleDirection(e) {
      if (directionLocked.current) return;

      if (e.key === "w" && direction.current !== "DOWN")
        direction.current = "UP";
      else if (e.key === "a" && direction.current !== "RIGHT")
        direction.current = "LEFT";
      else if (e.key === "s" && direction.current !== "UP")
        direction.current = "DOWN";
      else if (e.key === "d" && direction.current !== "LEFT")
        direction.current = "RIGHT";

      directionLocked.current = true;
    }

    window.addEventListener("keydown", handleDirection);
    return () => window.removeEventListener("keydown", handleDirection);
  }, []);

  return (
    <div className="md:min-w-[710px] w-full h-fit max-w-[900px] m-auto">
      <h3 className="text-center text-2xl font-bold py-10">
        Want to take a break? Play a quick game I built in{" "}
        <span className="text-green-600"> React</span>!
      </h3>
      <div className="bg-[#8fcc10] flex flex-col p-2 rounded-md items-center justify-center w-fit h-fit">
        <div className="bg-[#8fcc10] border-b-3 mb-4 pb-1 border-black text-2xl text-black font-extrabold w-full">
          <p className="font-snake">{snakeLength.current - 3}</p>
        </div>
        <div className="box-border border-3 border-black h-fit w-fit ">
          <div
            ref={containerRef}
            className="flex flex-row flex-wrap bg-[#8fcc10] h-[240px] xs:h-[348px] md:h-[444px] lg:h-[600px] w-[240px] xs:w-[348px] md:w-[444px] lg:w-[600px]"
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
            <button
              className="bg-red-600 p-4"
              onClick={() => (snakeLength.current += 1)}
            >
              Click
            </button>
            <button className="bg-red-600 p-4" onClick={() => setStart(true)}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
