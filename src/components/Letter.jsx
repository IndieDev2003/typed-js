import React from "react";
import { ReactTyped } from "react-typed";

function Letter() {
  const prod = [" Hello World","<h1 className=`!text-7xl bg-red-700`>Hello Again 43</h1>"];
  return (
    <div className="h-full w-full flex items-center gap-4 justify-center text-4xl font-semibold">
      <h2>Sure, </h2>
      <ReactTyped strings={prod} typeSpeed={150} showCursor={false} loop={true} />
    </div>
  );
}

export default Letter;
