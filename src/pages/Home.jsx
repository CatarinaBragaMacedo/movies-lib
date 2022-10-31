import React from 'react'

import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';

import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <TopRatedMovies />
      <PopularMovies />
      <UpcomingMovies />
      <Footer />
    </>
  )
}

export default Home