import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Loader() {
  useGSAP(
    () => {
      gsap.to(".loader .left", {
        x: -1000,
        duration: 2,
        
        delay: 3,
      });
      gsap.to(".loader .right", {
        x: 1000,
        duration: 2,
        delay: 3,
      });
    },
    { scope: ".loader" }
  );
  return (
    <div className="loader hidden sm:flex absolute h-screen w-screen bg-red- z-50">
      <div className="left w-[50vw] h-full bg-red-300"></div>
      <div className="right w-[50vw] h-full bg-red-300"></div>
    </div>
  );
}

export default Loader;
