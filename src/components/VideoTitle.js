import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-sans font-bold">{title}</h1>
      <p className="  my-2 p-4  w-1/4">{overview}</p>
      <button className=" px-12 mx-3 p-4  rounded-md text-xl bg-white text-black font-sans font-bold hover:opacity-70  ">
        Play
      </button>
      <button className=" px-12 p-4  rounded-md text-xl bg-gray-[#101010] opacity-25  text-white font-sans font-bold hover:opacity-100">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
