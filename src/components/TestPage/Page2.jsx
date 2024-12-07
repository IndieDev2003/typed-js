import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Page2() {
  const pageRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 80%",
          end: "center 60%",
        //   toggleActions: "restart pause reverse pause",
          markers: true,
          scrub: false,
        },
      });

      tl.from("h2", {
        x: 1000,
        duration: 2,
      });

      tl.from(".info", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 1,
        ease: "none",
      });
    },
    {
      scope: pageRef.current,
    }
  );

  return (
    <div ref={pageRef} className="h-screen w-screen px-10">
      <div>
        <h2 className="text-3xl flex items-center justify-center">
          Hello Again
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-10 pb-10">
        <div className="info sm:w-[30vw] px-4 py-10 border-2 border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
        <div className="info sm:w-[30vw] px-4 py-10 border-2 border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
        <div className="info sm:w-[30vw] px-4 py-10 border-2 border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page2;
