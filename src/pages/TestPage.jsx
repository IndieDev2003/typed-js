import React from "react";
import Page1 from "../components/TestPage/Page1";
import Page2 from "../components/TestPage/Page2";
import Page3 from "../components/TestPage/Page3";
import Scroller from "../components/TestPage/Scroller";
import sentence from "../assets/sentence";

function TestPage() {
  return (
    <div className="outfit overflow-x-hidden cursor-cell ">
      <Page1 />
      <Scroller />
      <Page2 />
      <Scroller sentence={sentence}/>
      <Page3 />
    </div>
  );
}

export default TestPage;
