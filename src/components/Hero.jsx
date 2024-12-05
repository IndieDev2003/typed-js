import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  const text = ["Web", "World", "Devloper", "You"];
  return (
    <div className="h-[80vh] w-full flex flex-col items-center text-center justify-center outfit bg-black">
      <h2 className="text-5xl font-semibold text-gray-300">
        The React Framework for the <ReactTyped strings={text} loop={true} typeSpeed={150} showCursor={false} />
      </h2>
      <p className="mt-10 text-gray-400 text-lg font-medium">
        Used by some of the world's largest companies, Next.js enables you to
        create
        <span className="text-white mx-1">
          high-
          <br />
          quality web application
        </span>
        with the power of React components.
      </p>
    </div>
  );
}

export default Hero;
