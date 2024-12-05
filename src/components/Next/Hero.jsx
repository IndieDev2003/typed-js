import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Hero() {

  const navigete = useNavigate()
  const text = ["Web", "World", "Devloper", "You"];
  return (
    <div className="h-[90vh] w-[100vw] flex flex-col items-center text-center justify-center gap-6 outfit bg-black overflow-hidden">
      <h2 className="text-4xl w-[90vw] sm:text-5xl font-semibold text-gray-300">
        The React Framework for the{" "}
        <ReactTyped
          strings={text}
          loop={true}
          typeSpeed={150}
          showCursor={false}
        />
      </h2>
      <p className="w-[90vw] sm:w-full text-gray-400 text-md sm:text-lg font-medium">
        Used by some of the world's largest companies, Next.js enables you to
        create
        <span className="text-white mx-1">
          high-
          <br />
          quality web application
        </span>
        with the power of React components.
      </p>
      <div className="flex gap-2 font-semibold">
        <button className="bg-white hover:bg-gray-200 border px-5 py-3 rounded-lg outline-none">
          Get Started
        </button>
        <button className="bg-transparent hover:bg-slate-900 text-white border px-5 py-3 rounded-lg outline-none">
          Learn Next.js
        </button>
      </div>
      <p className="text-gray-400 font-sans">~ npx create-next-app@latest</p>
    </div>
  );
}

export default Hero;
