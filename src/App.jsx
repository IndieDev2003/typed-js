import React from "react";
import Letter from "./pages/Letter";
import Next from "./pages/Next";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import TestPage2 from "./pages/TestPage2";
import NewYear from "./pages/NewYear";


import gsap from "gsap";

function App() {
  gsap.config({trialWarn:false})
  return (
    // <div className="">
     
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/letter" element={<Letter />} />
    //     <Route path="/next" element={<Next />} />
    //   </Routes>
    // </div>
    <div>
      <NewYear/>
    </div>
  );
}

export default App;
