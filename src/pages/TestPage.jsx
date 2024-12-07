import React from "react";
import Page1 from "../components/TestPage/Page1";
import Page2 from "../components/TestPage/Page2";
import Page3 from "../components/TestPage/Page3";

function TestPage() {
  return (
    <div className="outfit overflow-x-hidden">
          <Page1 />
          <Page2 />
          <Page3/>
    </div>
  );
}

export default TestPage;
