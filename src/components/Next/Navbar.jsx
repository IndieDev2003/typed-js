import React from "react";
import { Link } from "react-router-dom";
function Navbar() {


  return (
    <div className="flex outfit fixed backdrop-blur-md w-full top-0 border-b border-gray-500 h-[8vh] px-4 sm:px-10 justify-between">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl text-white cursor-pointer">
          NEXT<span className="text-sm">.JS</span>
        </h2>
        <h3 className="text-gray-500 hidden sm:block cursor-pointer">
          Showcase
        </h3>
        <h3 className="text-gray-500 hidden sm:block cursor-pointer">Docs</h3>
        <h3 className="text-gray-500 hidden sm:block cursor-pointer">Blogs</h3>
        <h3 className="text-gray-500 hidden sm:block cursor-pointer">
          Templates
        </h3>
        <h3 className="text-gray-500 hidden sm:block cursor-pointer">
          Enterprise
        </h3>
      </div>
      <div className="hidden sm:flex items-center gap-2 ">
        <Link to={'https://linkedin.com/in/gagan-suman'} target="_blank" className="text-white border border-gray-400 px-8 py-2 h-min rounded-lg">
          LinkedIn
        </Link>
        <Link to={'https://github.com/indiedev2003'} target="_blank" className="text-black bg-white border border-gray-400 px-5 py-2 h-min rounded-lg">
          Github
        </Link>
      </div>
      <div className="flex items-center gap-3 text-gray-400 text-xl sm:hidden">
        <Link to={'https://linkedin.com/in/gagan-suman'} target="_blank">LinkedIn</Link>
        <Link to={'https://github.com/indiedev2003'} target="_blank">Github</Link>
      </div>
    </div>
  );
}

export default Navbar;
