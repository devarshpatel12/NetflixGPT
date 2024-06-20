import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
        console.log(json);

      } catch (error) {
        console.error('Error fetching playing movies:', error);
      }
    };

    getPopularMovies();
  }, [dispatch]); 
};

export default usePopularMovies;