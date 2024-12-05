import React from "react";

import SmallBox from "./component/SmallBox";

import image1 from "../../assets/Next/image.avif";
import image2 from "../../assets/Next/image2.avif";

function Section2() {
  return (
    <div className="bg-black text-white outfit">
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-2 py-5">
        <h3 className="text-3xl font-bold">What's in Next.js?</h3>
        <p className=" px-5 sm:px-0 text-xl text-center text-gray-400 font-[500]">
          Everything you need to build great products on the web
        </p>
      </div>

      <div className="grid sm:grid-cols-3 px-4 sm:px-10 gap-2 mt-5">
        {/* Built in Optimization */}
        <div className=" px-4 py-2 border border-gray-500 h-fit w-full  gap-2 rounded-lg flex items-center flex-col">
          <img src={image1} className="h-40" alt="" />
          <h3 className="text-start w-full">Built-in Optimization</h3>
          <p className="text-start w-full text-sm text-gray-400">
            Automatic Images, font and Script optimizaion for
            <br /> improved UX adn core web vitals
          </p>
        </div>
        {/* React Server Components */}
        <div className=" px-4 py-2 border border-gray-500 h-fit w-full gap-2 rounded-lg flex items-center flex-col">
          <img src={image2} className="h-40" alt="" />
          <h3 className="text-start w-full">React Server Components</h3>
          <p className="text-start w-full text-sm text-gray-400">
            Add components without sending additional client side
            <br /> Javascript. Built on the latest React features.
          </p>
        </div>
        {/* HTML Streaming */}
        <div className=" px-4 py-2 border border-gray-500 h-fit w-full gap-2 rounded-lg flex items-center flex-col">
          <img src={image2} className="h-40" alt="" />
          <h3 className="text-start w-full">Dynamic HTML Streaming</h3>
          <p className="text-start w-full text-sm text-gray-400">
            Instantly stream UI from the server. Intergrated with
            <br />
            the App Router and React Suspense.
          </p>
        </div>
      </div>
      {/* Small Boxes */}
      <div className="px-4 sm:px-10 grid sm:grid-cols-3 gap-1 sm:gap-2 my-2">
        {/* Data fethcing */}
        <SmallBox
          heading={"Data Fetching"}
          paragraph={
            "Make your react components async and await your data. Next.js suports  both server and client data fetching."
          }
        />
        <SmallBox
          heading={"CSS Support"}
          paragraph={
            "Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS and popular community libraries"
          }
        />
        <SmallBox
          heading={"Client nad Server Rendering"}
          paragraph={
            "Flexible rendering and caching options, including incremantal Static Regenration(ISR), on a per page level."
          }
        />
        <SmallBox
          heading={"Server Actions"}
          paragraph={
            "Run server code by calling a function. Skip the API, then easily revalidate cached data and update your UI in one network roundtrip"
          }
              />
              <SmallBox heading={'Routes Handler'} paragraph={'Build API endpoints to securely connect with  third-party services for handling auth or listening for webhooks.'}/>
      </div>
    </div>
  );
}

export default Section2;
