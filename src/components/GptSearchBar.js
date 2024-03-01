import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  //Search Movie in Tmdb Database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    //Make an API call to GPT API and get movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and sugest some movies for the query " +
      searchText.current.value +
      ".only give me names of 5 movies ,comma seperated like the example result give ahead .Example Result : Gadar ,Sholay ,Don, Golmaal ,Koi Mil Gaya ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //Error Handling
    }

    //Give object of movies
    console.log(gptResults?.choices[0]?.message?.content);

    //Create array of movies we got
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    //[Promise,Promise,Promise,..] as map function won't wait to get the promise resolve
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    //Resolve  all promises here
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[45%] md:pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-2xl py-2 px-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-3 m-2  md:p-4 md:m-4 col-span-9 rounded-xl hover:scale-105 hover:duration-500 text-black text-sm md:text-md"
          type="text"
          placeholder={lang[langkey].gptSeacrhPlaceholder}
        ></input>
        <button
          className="col-span-3 p-2 m-2 md:m-4 md:py-2 md:px-4 bg-red-700 text-white rounded-md hover:scale-105 hover:duration-200  text-xs md:text-xl hover:bg-red-600"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
