import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ImgBox from "./component/ImgBox";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Page3() {
  const page3Ref = useRef(null);

  useGSAP(
    () => {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: page3Ref.current,
          start: "top 80%",
          end: "bottom 115%",
        //   markers: true,
          scrub: 0.9,
          // toggleActions: "restart pause reverse pause"
        },
      });

      tl3.from(".page3-head h2", {
        opacity: 0,
        duration: 1.5,
        x: 100,
        ease: "elastic.inOut",
      });
      tl3.from(".page3-head p", {
        opacity: 0,
        duration: 1.5,
        x: 100,
        ease: "elastic.inOut",
      });

      tl3.from(".imgCon div", {
        opacity: 0,
        duration: 2,
        y:200,
        stagger: 0.2,
        ease:"bounce"
        
      });
    },
    { scope: page3Ref.current }
  );

  return (
    <div
      ref={page3Ref}
      className=" bg-gray-200 py-5 sm:py-10 px-5 sm:px-10"
    >
      <div className="page3-head flex flex-col items-end gap-3">
        <h2 className="text-2xl sm:text-4xl">You Again Why</h2>
        <p className="w-full text-lg text-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          nulla.
        </p>
      </div>
      <div className="imgCon w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
        <ImgBox />
        <ImgBox />
        <ImgBox />
        <ImgBox className="hidden sm:block"/>
        <ImgBox className="hidden sm:block"/>
        <ImgBox className="hidden sm:block"/>
      </div>
    </div>
  );
}

export default Page3;
