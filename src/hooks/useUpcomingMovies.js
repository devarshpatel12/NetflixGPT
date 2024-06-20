import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  addUpcomingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
        console.log(json);

      } catch (error) {
        console.error('Error fetching playing movies:', error);
      }
    };

    getUpcomingMovies();
  }, [dispatch]); 
};

export default useUpcomingMovies;