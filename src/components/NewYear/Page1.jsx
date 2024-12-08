import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import TextPlugin from "gsap/TextPlugin";

import text from "../../assets/welcome.js";
import flower from "../../assets/flower.svg";

function Page1() {
  const page1Ref = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay:3
      });

      tl.from(".page1 h2", {
        scale: 1000,
        x: 100,
        duration: 2,
        yoyo: true,
      });
      tl.from(".page1 p", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.6,
      });
      tl.from(".page1 button", {
        y: -30,
        duration: 1,
        opacity: 0,
        delay: 0.5,
      });

      gsap.from(".page1 .left-rib", {
        y: 1000,
        x:100,
        opacity: 0,
        stagger:2
      })
    },
    { scope: page1Ref.current }
  );
  return (
    <div
      ref={page1Ref}
      className="page1 h-screen w-screen relative overflow-hidden"
    >
      <div className="h-full w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-2 text-nowrap">Hello I Know You</h2>
        <p className=" text-lg w-[70vw] text-center sm:w-full">
          You Come Here To What You Achived in 2024
        </p>
        <p className=" text-lg">Is i'm right</p>
        <div className=" flex gap-2 mt-2">
          <button className="px-8 py-2 bg-green-300 shadow-sm drop-shadow-lg rounded-full">
            Yes
          </button>
          <button className="px-8 py-2 bg-red-400 shadow-sm drop-shadow-lg rounded-full">
            No
          </button>
        </div>
      </div>
      <div className="left-rib opacit h-10 w-[1024px] sm:w-[200vw] absolute bg-[crimson] sm:bg-slate-300 -z-20 top-1 right-0 rotate-45"></div>
      <div className="left-rib opacit h-10 w-[1024px] sm:w-[200vw] absolute bg-[crimson] sm:bg-slate-300 -z-20 bottom-4 right-0 -rotate-45"></div>
      <div className="right-rib h-10 w-[1024px] sm:w-[200vw] absolute bg-[crimson] sm:bg-slate-300 -z-20 bottom-4 left-0 rotate-45"></div>
      <div className="right-rib h-10 w-[1024px] sm:w-[200vw] absolute bg-[crimson] sm:bg-slate-300 -z-20 top-1 left-0 -rotate-45"></div>
      <div className="flex sm:hidden -z-10 bg-gray-00 top-0 absolute h-screen w-screen items-center justify-center">
        <img src={flower} className="h-32 animate-spin " alt="" />
      </div>
    </div>
  );
}

export default Page1;
