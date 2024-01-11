import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BgURl } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
    <div>
      <div className="fixed -z-10 ">
        <img className="h-screen object-cover w-screen" src={BgURl} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
      </div>
      </>
  );
};

export default GptSearch;
