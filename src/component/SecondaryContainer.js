import React, { useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Popup from "./Popup";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        {selectedMovie && (
          <Popup movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
            onMovieClick={handleMovieClick}
          />
          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
            onMovieClick={handleMovieClick}
          />
          <MovieList
            title={"Top Rated"}
            movies={movies.topRatedMovies}
            onMovieClick={handleMovieClick}
          />
          <MovieList
            title={"Upcoming"}
            movies={movies.upcomingMovies}
            onMovieClick={handleMovieClick}
          />
        </div>
        
      </div>
    )
  );
};

export default SecondaryContainer;
