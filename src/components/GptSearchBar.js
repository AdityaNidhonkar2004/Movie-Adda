import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-2xl py-2 px-4">
        <input
          className="p-4 m-4 col-span-9 rounded-xl hover:scale-105 hover:duration-500 text-black"
          type="text"
          placeholder={lang[langkey].gptSeacrhPlaceholder}
        ></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md hover:scale-105 hover:duration-200 text-xl hover:bg-red-600">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
