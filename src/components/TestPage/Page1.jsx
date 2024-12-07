import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Page1() {
  const pageRef = useRef(null);
//   useGSAP(
//     () => {
//       const tl = gsap.timeline();
//       tl.from("h1", {
//         scale: 1000,
//         duration: 2,
//       });

//       tl.from("p", {
//         y: 300,
//         opacity: 0,
//         duration: 1,
//       });
//       tl.from("button", {
//         y: -10,
//         opacity: 0,
//         delay: 1,
//       });
//     },
//     { scope: pageRef.current }
//   );

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center gap-3">
      <h1 className="text-center text-7xl">Page 1</h1>
      <p className="w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        temporibus accusamus placeat expedita dolorem delectus architecto
        distinctio facilis nesciunt? Voluptas.
      </p>
      <button className="text-lg px-8 py-2 bg-gray-200 rounded-full">
        Done
      </button>
    </div>
  );
}

export default Page1;
