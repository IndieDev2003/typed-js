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
          end: "bottom 100%",
          //   toggleActions: "restart pause reverse pause",
          // markers: true,
          scrub: 0.6,
          smooth: 1,
        },
      });

      tl.from(".page2-head h2", {
        x: 2000,
        duration: 1.5,
        yoyo:true
      });
      tl.from(".page2-head p", {
        opacity: 0,
        x:2000
      });

      tl.from(".infoCon .info", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "bounce",
      });
      tl.to(".page2-head", {
        y: 50,
      });
      tl.to(".infoCon", {
        y: 50,
      });
      tl.from(".infoCon div h3", {
        opacity: 0,
        y: 20,
        stagger: 1,
        ease: "elastic.inOut",
      })
      tl.from(".infoCon div p", {
        opacity: 0,
        y: 20,
        stagger: 0.5,
        ease: "elastic.inOut",
        
      })
      tl.to("h2", {
        zoom: 1.4,
        y: 10,
      });
      tl.to(".page2-head p", {
        zoom: 1.2,
        y: 10,
      });
    },
    {
      scope: pageRef.current,
    }
  );

  return (
    <div ref={pageRef} className="h-fit  px-10 bg-gray-500 py-10">
      <div className="page2-head">
        <h2 className="text-3xl flex items-center justify-center sm:justify-start">
          Hello Again
        </h2>
        <p className="text-center sm:text-start w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, impedit.
        </p>
      </div>
      <div className="h-fit infoCon grid sm:grid-cols-3 grid-cols-1 gap-2 mt-10 mb-10">
        <div className="info sm:w-[30vw] px-4 py-10 border-2 bg-white border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
        <div className="info sm:w-[30vw] px-4 py-10 border-2 bg-white border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
        <div className="info sm:w-[30vw] px-4 py-10 border-2 bg-white border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
        <div className="info hidden sm:block sm:w-[30vw] px-4 py-10 border-2 bg-white border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
        <div className="info hidden sm:block sm:w-[30vw] px-4 py-10 border-2 bg-white border-black rounded">
          <h3>Placeholder</h3>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, in.
            Facilis nam quam minus nihil ipsum iste tempore, dignissimos cum!
          </p>
        </div>
        <div className="info hidden sm:block sm:w-[30vw] px-4 py-10 border-2 bg-white border-black rounded">
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
