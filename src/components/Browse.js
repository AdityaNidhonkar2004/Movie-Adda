import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    // {
    //   Main-Container
    //     -VideoBackground
    //     -VideoTitle
    //     -SecondaryContainer
    //       -MovieList
    //         -Cards

    // }
  );
};

export default Browse;
