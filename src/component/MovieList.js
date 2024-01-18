// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, onMovieClick }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar::-webkit-scrollbar">
        {movies?.map((movie) => (
          <div key={movie.id} onClick={() => onMovieClick(movie)}>
            
            <MovieCard posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;


