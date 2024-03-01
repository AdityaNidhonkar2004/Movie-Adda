import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="pt-10 md:pt-0 text-2xl md:text-5xl font-sans font-bold">
        {title}
      </h1>
      <p className="hidden md:inline-block  my-2 p-4  w-1/4">{overview}</p>
      <div className="mt-2">
        <button className=" px-4 py-1 md:px-12 md:mx-3 md:p-4  rounded-md text-xl bg-white  text-black font-sans font-bold hover:opacity-100  ">
          Play
        </button>
        <button className="hidden md:inline-block px-12 p-4  rounded-md text-xl bg-[#101010] opacity-25  text-white font-sans font-bold hover:opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
