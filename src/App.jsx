import React from "react";
import Letter from "./pages/Letter";
import Next from "./pages/Next";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import TestPage2 from "./pages/TestPage2";

function App() {
  return (
    // <div className="">
     
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/letter" element={<Letter />} />
    //     <Route path="/next" element={<Next />} />
    //   </Routes>
    // </div>
    <div>
      <TestPage2/>
    </div>
  );
}

export default App;
