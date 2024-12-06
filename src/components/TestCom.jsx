import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function TestCom() {
  const infoRef = useRef(null);
  const page1 = useRef(null);
  const page2 = useRef(null);

  useGSAP(() => {
  //  const tl = gsap.timeline();

  //  tl.from(page1.current, {
    //  opacity: 0,
   //   duration: 0.5,
   //   delay: 0,
  //    x:0,
   //     stagger: 1,
     // ease:'power.in',
  //    scrollTrigger: {
  //      trigger: page2.current,
  //      start: "top 90%",
  //      end: "bottom 100%",
   //     markers: true,
   //       scrub: true,
       // toggleActions: "restart pause reverse pause"
        //   toggleActions: "restart pause reverse pause"
      },
    });
  }, []);
  return (
    <div className="outfit h-screen w-screen overflow-x-hidden">
      <div ref={page1} id="page1">
        <div className="flex flex-col h-screen gap-4 items-center justify-center">
          <h2 className="text-5xl sm:text-6xl">Hello GSAP</h2>
          <p className="w-[90vw] sm:w-[50vw] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis,
            nihil perspiciatis optio porro ipsa? Atque est sed quam cumque
            quidem? Asperiores molestiae quasi deserunt vitae aliquam suscipit
            maiores distinctio fugit, similique exercitationem dolor quod.
          </p>
          <button className="border px-10 py-2 text-xl rounded-full bg-gray-200 shadow-xl backdrop-blur-xl">
            Done
          </button>
        </div>
      </div>
      <div
       
        ref={}
        className="h-screen w-screen flex flex-col gap-4 sm:flex-rw items-center justify-start px-4"
      >
        <h2 className="text-4xl">Page 2 Content</h2>
        <div className="h-fit w-full flex flex-col sm:flex-row gap-3">
          <div
            ref={infoRef}
            className="h-max w-[90vw] sm:w-[33%] border px-2 py-3 rounded-xl"
          >
            <h3 className="text-3xl mb-2">SSl Support</h3>
            <p className="w-[90vw] sm:w-full text-wrap pr-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores officia numquam quasi minus facilis nemo repellendus
              nihil magni laudantium quisquam vitae dolorum, accusantium nisi.
              Facere explicabo odit sunt nostrum doloribus.
            </p>
          </div>
          <div
            ref={infoRef}
            className="h-max w-[90vw] sm:w-[33%] border px-2 py-3 rounded-xl"
          >
            <h3 className="text-3xl mb-2">SSl Support</h3>
            <p className="w-[90vw] sm:w-full text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores officia numquam quasi minus facilis nemo repellendus
              nihil magni laudantium quisquam vitae dolorum, accusantium nisi.
              Facere explicabo odit sunt nostrum doloribus.
            </p>
          </div>
          <div
            ref={infoRef}
            className="h-max w-[90vw] sm:w-[33%] border px-2 py-3 rounded-xl"
          >
            <h3 className="text-3xl mb-2">SSl Support</h3>
            <p className="w-[90vw] sm:w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores officia numquam quasi minus facilis nemo repellendus
              nihil magni laudantium quisquam vitae dolorum, accusantium nisi.
              Facere explicabo odit sunt nostrum doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCom;
