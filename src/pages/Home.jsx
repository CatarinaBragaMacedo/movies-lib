import React from 'react'
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/AllMovies';
import UpcomingMovies from '../components/UpcomingMovies';

const Home = () => {
  return (
    <>
      <TopRatedMovies />
      <PopularMovies />
      <UpcomingMovies />
      
    </>
  )
}

export default Home