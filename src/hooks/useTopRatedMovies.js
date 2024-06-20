import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
        console.log(json);

      } catch (error) {
        console.error('Error fetching playing movies:', error);
      }
    };

    getTopRatedMovies();
  }, [dispatch]); 
};

export default useTopRatedMovies;