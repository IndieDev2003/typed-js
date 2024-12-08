import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import React, { useRef } from "react";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

function Page2() {
  const page2Ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page2Ref.current,
          //markers: true,
          start: "top 70%",
          end: "bottom 100%",
          scrub: true,
        },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: page2Ref.current,
          //   markers: true,
          start: "top 70%",
          end: "bottom 100%",
          scrub: true,
        },
      });

      tl.to(".page2 .h2-left", {
        text: "Wow you come here",
        duration: 3,
      });
      tl.to(".page2 .p-left", {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet nulla nec urna vehicula, tempus tincidunt arcu facilisis. Sed sit amet mauris. Aliquam euismod efficitur ligula convallis posuere",
        duration: 15,
      });
      tl.to(".page2 .h2-right", {
        text: "Wow you come here",
        duration: 3,
      });
      tl.to(".page2 .p-right", {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet nulla nec urna vehicula, tempus tincidunt arcu facilisis. Sed sit amet mauris. Aliquam euismod efficitur ligula convallis posuere",
        duration: 15,
      });

      tl2.to(".boxCon .box", {
        opacity: 1,

        // rotate: 10,
        backgroundImage:
          "url(https://i.pinimg.com/1200x/c8/48/0f/c8480f99fe46235fb40a09f1cd93d9db.jpg)",
      });
      tl2.to(".boxCon .box", {
        height: "100vh",
        width: "100vw",
        borderRadius: 0,
      });
      tl2.to(".page2 h2,.page2 p", {
        color: "white",
      });
    },
    { scope: page2Ref.current }
  );

  return (
    <>
      <div
        ref={page2Ref}
        className="page2 overflow-hid relative page2 h-screen w-screen flex flex-col justify-between"
      >
        {/* Left Side */}
        <div className=" flex flex-col items-start justify-center h-[50%] ">
          <div className="page2 flex flex-col items-start justify-center px-10 w-[50vw] backdrop-blur-sm h-full">
            <h2 className="h2-left text-3xl"></h2>
            <p className="p-left max-w-[50vw]"></p>
          </div>
        </div>
        {/* Right Side */}
        <div className=" flex flex-col items-end justify-center h-[50%]">
          <div className="flex flex-col items-end justify-center px-10 w-[50vw] backdrop-blur-sm h-full">
            <h2 className="h2-right text-3xl"></h2>
            <p className="p-right text-end max-w-[50vw]"></p>
          </div>
        </div>
        <div className="boxCon h-screen w-screen absolute -z-10 bg-ed-300 flex items-center justify-center">
          <div id="" className="box h-40 w-40  bg-cover bg-center"></div>
        </div>
      </div>
    </>
  );
}

export default Page2;
