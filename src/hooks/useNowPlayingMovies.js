import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPlayingMovies(json.results));
        console.log(json);
      } catch (error) {
        console.error('Error fetching playing movies:', error);
      }
    };

    fetchMovies();
  }, [dispatch]); // Dispatch is added to the dependency array

  // You might want to return something from this hook if needed
};

export default useNowPlayingMovies;
