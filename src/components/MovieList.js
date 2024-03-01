import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className=" text-white px-4 md:px-10 pt-2 md:pt-6">
      <h1 className=" text-lg md:text-3xl py-2 md:py-6 ">{title}</h1>
      <div className=" overflow-hidden flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
