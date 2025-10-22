import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function DefaultCarousel({ content }) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [prevPosition, setPrevPosition] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function changeSlide(newIndex) {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPrevPosition(currentPosition);
    setCurrentPosition(newIndex);

    setTimeout(() => {
      setPrevPosition(null);
      setIsTransitioning(false);
    }, 500);
  }

  function right() {
    const next = (currentPosition + 1) % content.length;
    changeSlide(next);
  }

  function clickBubbles(num) {
    changeSlide(num);
  }

  function left() {
    const prev =
      currentPosition === 0 ? content.length - 1 : currentPosition - 1;
    changeSlide(prev);
  }

  return (
    <div className=" min-w-[320px] w-full max-w-[500px] h-[320px] sm:h-[500px] relative overflow-hidden bg-white ">
      {prevPosition !== null && (
        <img
          key={prevPosition}
          src={content[prevPosition]}
          className="absolute inset-0 p-1  w-full h-full object-fill opacity-0 transition-opacity duration-500"
        />
      )}
      <img
        key={currentPosition}
        src={content[currentPosition]}
        className={`hover:scale-105 transition-all duration-400 absolute inset-0 p-1 w-full h-full object-fill ${
          isTransitioning
            ? "opacity-0 transition-opacity duration-500"
            : "opacity-100"
        }`}
      />

      <button
        onClick={left}
        disabled={isTransitioning}
        className="absolute text-black opacity-70 left-0 hover:opacity-100 font-bold z-50 top-[calc(50%-20px)] cursor-pointer"
      >
        <FaAngleLeft size={75} />
      </button>

      <button
        onClick={right}
        disabled={isTransitioning}
        className="absolute text-black opacity-70 hover:opacity-100 font-bold z-50 top-[calc(50%-20px)] right-0 cursor-pointer"
      >
        <FaAngleRight size={75} />
      </button>

      <div className="flex flex-row items-center justify-center gap-3 absolute bottom-5 left-0 right-0">
        {content.map((_, i) => (
          <p
            key={i}
            onClick={() => clickBubbles(i)}
            className={`h-4 w-4 p-1 rounded-full bg-black cursor-pointer hover:opacity-100 ${
              i === currentPosition ? "opacity-100" : "opacity-50"
            }`}
          ></p>
        ))}
      </div>
    </div>
  );
}
