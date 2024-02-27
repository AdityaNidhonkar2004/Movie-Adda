import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 p-4 hover:scale-105 hover:duration-75">
      <img alt="MovieCard" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
