import React from "react";
import Page1 from "../components/TestPage2/Page1";
import Page2 from "../components/TestPage2/Page2";
import Page3 from "../components/TestPage2/Page3";
import gsap from "gsap";

function TestPage2() {

  gsap.config({trialWarn:false})
  return (
    <div className="outfit relative">
      <Page1 />
      <Page2 />
      <Page3 />
      <div className="h-screen flex items-center justify-center text-4xl"><h3>Hello</h3></div>
    </div>
  );
}

export default TestPage2;
