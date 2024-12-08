import React from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";

gsap.registerPlugin(SplitText, MotionPathPlugin);
gsap.registerPlugin(useGSAP);

function Page3() {
  const page3Ref = React.useRef(null);
  const paraRef = React.useRef(null);
  useGSAP(
    () => {
      let split = new SplitText(".para", { type: "chars,words,lines" });

      const tl = gsap.timeline();

      tl.from(split.words, {
        duration: 1,
        // rotateX: 180,
        x: -10,
        opacity: 0,
        // ease: "bounce.in",
        delay: 0.5,
        stagger: 0.2,
      });
      tl.to(split.words, {
        x: 12,
        stagger: 0.2,
        ease: "bounce.in",
        fontSize: "+=3",
      });
      tl.to(".page3 h2 ", {
          y: -10,
          x:10
      });
      gsap.to("rect", {
        motionPath: "path",
        duration: 10,
        ease: "power.in",
        // repeat: -1,
        stagger: 0.4,
      });
    },
    [],
    { scope: page3Ref.current }
  );
  return (
    <div
      ref={page3Ref}
      className="page3 relative h-screen w-screen flex items-center justify-center border-black border-t-4 border-b-4"
    >
      <div className="text-center">
        <h2 className="text-5xl mb-5">Hi Agian</h2>
        <p ref={paraRef} className="para w-[50vw] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          officiis similique provident quo distinctio? Reprehenderit, ea.
          Corrupti, veniam. Alias, ipsa?
        </p>
      </div>
      <div className="absolute -z-10 max-w-[50vw] max-h-[50vh]">
        <svg
          id="svg-stage"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-8 -8 100 100"
          fill="none"
        >
          <defs>
            <linearGradient
              id="grad-1"
              x1="-10"
              y1="-10"
              x2="20"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.35" stopColor="crimson" />
              <stop offset="0.35" stopColor="blue" />
            </linearGradient>
          </defs>
          <path
            stroke="seagreen"
            fill=""
            d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z"
          />
          <rect
            radius=""
            fill="url(#grad-1)"
            width="20"
            height="20"
            x="-10"
            y="-10"
            rx="1"
          />
          <rect
            radius=""
            fill="url(#grad-1)"
            width="20"
            height="20"
            x="-10"
            y="-10"
            rx="1"
          />
          <rect
            radius=""
            fill="url(#grad-1)"
            width="20"
            height="20"
            x="-10"
            y="-10"
            rx="1"
          />
        </svg>
      </div>
    </div>
  );
}

export default Page3;
