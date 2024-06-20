import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies)
  return (
    <div className='bg-black '>
    <div className='-mt-60 relative z-10 '>
    <MovieList title={"Now Playing"} movies={movies.playingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Upcoming Movies"}
            movies={movies.UpcomingMovies}
          />
    </div>

    </div>
  )
}

export default SecondaryContainer;