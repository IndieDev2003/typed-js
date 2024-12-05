import React from "react";

import { ReactTyped } from "react-typed";
import str from "../assets/chat.js";

import letterback from "../assets/letterback.jpg";

function LetterBody() {
  return (
    <div className="bg-teal-100 border text-xl font-semibold px-4 py-1 h-[550px] w-[450px] rounded-lg letter">
      {/* <img src={letterback} className="absolute object-cover object-center h-[550px] w-[450px] -z-10" alt="" /> */}
      <ReactTyped
              className="letter px-5 text-start"
              strings={str}
              typeSpeed={10}
              showCursor={true}
              startWhenVisible={true}
              onComplete={() => console.log("Letter")}
      />
    </div>
  );
}

export default LetterBody;
