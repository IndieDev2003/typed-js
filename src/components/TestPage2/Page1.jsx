import { useGSAP } from "@gsap/react";
import gsap from "gsap/src";
import TextPlugin from "gsap/TextPlugin";
import React, { useRef } from "react";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

function Page1() {
  const page1 = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.2,
    });
    tl.to(".page-1 h2", {
      text: "Hello Again",
      duration: 2,
      repeat: false,
    });
    tl.to(".page-1 h2", {
      zoom: 2,
      delay: 1,
      duration: 1,
      ease: "power2.inOut",
    });
    tl.to(".page-1 p", {
      text: "Welcome to the second page,Temporarily remove all GSAP-related code and verify if scrolling works. If it does, reintroduce GSAP incrementally to isolate the problem.",
      duration: 10,
      repeat: false,
      ease: "power2.inOut",
    });
    tl.from(".page-1 button", {
      y: -20,
      opacity: 0,
    });
  }, [page1]);

  return (
    <div
      ref={page1}
      className="page-1 h-screen w-screen flex flex-col gap-2 items-center justify-center"
    >
      <h2 className="text-2xl"></h2>
      <p className="text-lg w-[50vw] text-center letter"></p>
      <button className="text-xl px-8 py-2 bg-gray-300 rounded-full shadow-lg drop-shadow-xl border-2">
        Done
      </button>
    </div>
  );
}

export default Page1;
