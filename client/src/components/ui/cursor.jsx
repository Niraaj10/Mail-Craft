// import React, { useEffect, useRef } from "react";

// const Cursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;

//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${clientX}px`;
//         cursorRef.current.style.top = `${clientY}px`;
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 w-4 h-4 bg-gray-500 bg-opacity-50 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
//     ></div>
//   );
// };

// export default Cursor;




import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const timeoutRef = useRef(null); // To track idle timeout
  const [isCursorVisible, setIsCursorVisible] = useState(true); // State to control visibility

  useEffect(() => {
    const cursor = cursorRef.current;

    // Variables for animation
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    // Smooth animation loop
    const animateCursor = () => {
      dotX += (mouseX - dotX) * 0.1; // Adjust laziness factor
      dotY += (mouseY - dotY) * 0.1;

      if (cursor) {
        cursor.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }

      requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      // Show the cursor on movement
      setIsCursorVisible(true);

      // Reset the idle timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Hide the cursor after 1.5 seconds of inactivity
      timeoutRef.current = setTimeout(() => {
        setIsCursorVisible(false);
      }, 1500);
    };

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-0 top-0 left-0 w-3 h-3 border border-white/25 bg-opacity-50 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
        isCursorVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        // boxShadow: "0 0 20px 6px rgba(128, 128, 128, 0.5)", // Glow effect
        boxShadow: "0 0 20px 2px rgba(206, 206, 208, 1)", // Glow effect
      }}
    ></div>
  );
};

export default Cursor;




