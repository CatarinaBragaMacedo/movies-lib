import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import { motion } from 'framer-motion';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Results for: <span className="query-text">{query}</span>
      </h2>
      <motion.div whileTap={{cursor: 'grabbing'}} className="motion-container">
        <motion.div drag='x' dragConstraints={{right:0, left: -3500}} className="movies-container">
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Search