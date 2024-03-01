import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className=" w-36 md:w-48 p-4 hover:scale-105 hover:duration-100">
      <img alt="Poster" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
