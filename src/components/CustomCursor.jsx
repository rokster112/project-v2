import { useEffect, useRef, useState } from "react";

export default function () {
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef(null);

  // useEffect(() => {
  //   const cursor = document.querySelector(".custom-cursor");
  //   function trackCursor(e) {
  //     // cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  //     setPos({ x: e.clientX, y: e.clientY });
  //   }

  //   cursor.addEventListener("mousemove", trackCursor);

  //   // cursor.addEventListener("mouseenter", () => cursor);

  //   // cursor.addEventListener("mouseleave", () => setAction(false));
  // }, []);
  useEffect(() => {
    const onMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(".custom-cursor-target");
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    targets.forEach((t) => {
      t.addEventListener("mouseenter", handleEnter);
      t.addEventListener("mouseleave", handleLeave);
      // optionally hide native cursor on targets:
      t.classList.add("cursor-none");
    });

    return () => {
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", handleEnter);
        t.removeEventListener("mouseleave", handleLeave);
        t.classList.remove("cursor-none");
      });
    };
  }, []);

  return (
    <div
      // style={{
      //   transform: `translate(${pos.x - 32}px, ${pos.y - 32}px)`,
      // }}
      ref={cursorRef}
      className={`        ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }
 fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 transform cursor-none pointer-events-none z-1 w-8 h-8 bg-red-500`}
    ></div>
  );
}
