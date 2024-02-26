import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen  aspect-video"
        src={
          "https://www.youtube.com/embed/vk2OJZHutBM?" +
          trailerVideo?.key +
          "&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1"
          // src="//www.youtube.com/embed/PEwac2WZ7rU?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
