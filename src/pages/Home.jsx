import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col outfit backdrop-blur-lg">
      <h1 className="text-5xl outfit">This is Home Page</h1>
      <div className="flex mt-4 gap-4">
        <Link to="/letter">
          <h2 className="border border-gray-400 cursor-pointer px-8 py-2 rounded-lg hover:bg-gray-400 hover:text-white">
            Letter
          </h2>
        </Link>
        <Link to="/next">
          <h2 className="border border-gray-400 cursor-pointer px-8 py-2 rounded-lg hover:bg-gray-400 hover:text-white">
            Next
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
