import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies)


  return (
    movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies &&(
    <div className='bg-black' >
      <div className='mt-0 md:-mt-56 md:pl-4 md:pl-8 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
    )
  );
}

export default SecondaryContainer