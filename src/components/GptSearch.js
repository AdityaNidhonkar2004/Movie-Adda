import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_GPT_PAGE } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img src={BG_IMG_GPT_PAGE}></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
