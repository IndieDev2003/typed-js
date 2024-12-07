import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Page1() {
  const pageRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.5,
        yoyo: true
      });
      tl.from(".page1 h1", {
        scale: 1000,
        duration: 2,
        delay: 0.5,
      });

      tl.from(".page1 p", {
        y: 300,
        opacity: 0,
        duration: 1,
      });

      tl.from("button", {
        y: -10,
        opacity: 0,
        delay: 1,
      });
    },
    { scope: pageRef.current }
  );

  return (
    <div className="page1 h-screen w-screen flex flex-col items-center justify-center text-center gap-3">
      <h1 className=" text-center text-7xl ">Page 1</h1>
      <p className="w-[90vw] sm:w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        temporibus accusamus placeat expedita dolorem delectus architecto
        distinctio facilis nesciunt? Voluptas.
      </p>
      <button className="text-lg px-8 py-2 shadow-xl drop-shadow-xl border border-slate-300 bg-gray-200 rounded-full">
        Done
      </button>
    </div>
  );
}

export default Page1;
