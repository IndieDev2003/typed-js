import React from "react";

function SmallBox({heading,paragraph}) {
  return (
    <div className="w-full px-3 py-2 border border-gray-400 rounded-lg flex flex-col">
      <h3 className="text-2xl">{heading}</h3>
      <p className="text-sm hidden sm:block font-normal text-gray-400">{paragraph}</p>
    </div>
  );
}

export default SmallBox;
