import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

function Home() {
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("h1", {
      y: -10,
      zoom: 90,
      duration: 1,
      // ease: 'bounce.out'
      yoyo: true,
    });
    tl.from(btnRef.current, {
      y: 100,
      opacity: 0,
      stagger: true,
      duration: 1.9,
      ease: "expo.inOut",
      yoyo: true,
    });

    
  
  }, []);
  return (
    <div className="overflow-hidden h-screen w-screen flex items-center justify-center flex-col outfit backdrop-blur-lg">
      <h1 className="text-nowrap w-max text-5xl outfit text-center ">
        This is Home Page
      </h1>
      <div ref={btnRef} className="flex mt-4 gap-4">
        <Link to="/letter">
          <h3 className=" bg-white shadow-lg drop-shadow-lg border border-black  cursor-pointer px-8 py-2 rounded-lg hover:bg-gray-400 hover:text-white">
            Letter
          </h3>
        </Link>
        <Link to="/next">
          <h3 className=" bg-white shadow-lg drop-shadow-lg border border-black  cursor-pointer px-8 py-2 rounded-lg hover:bg-gray-400 hover:text-white">
            Next
          </h3>
        </Link>
      </div>
      <p ref={textRef}></p>
    </div>
  );
}

export default Home;
