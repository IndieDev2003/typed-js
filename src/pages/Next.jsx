import React from "react";
import Hero from "../components/Next/Hero"; // Assuming Hero component is defined in a separate file
import Navbar from "../components/Next/Navbar";
import Section2 from "../components/Next/Section2";



function Next() {
  return (
    <>
      <div className="max-w-[100vw] relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <Section2 />
      </div>
    </>
  );
}

export default Next;
