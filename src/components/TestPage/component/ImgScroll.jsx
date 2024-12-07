import React from "react";

function ImgScroll() {
  return (
    <div className="h-[30vh] my-5">
      <div className="h-full w-[30vw] bg-gray-300 rounded-lg overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/12/6c/dc/126cdc14f2bb5f776247d3442341263c.jpg"
          className="w-full object-cover bject-fill"
          alt=""
        />
      </div>
    </div>
  );
}

export default ImgScroll;
