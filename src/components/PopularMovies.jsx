import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import "../pages/MovieDetails";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPopularMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}popular?${apiKey}`;
    
    getPopularMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Popular movies</h2>
      <div className="movies-container">
        {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default PopularMovies