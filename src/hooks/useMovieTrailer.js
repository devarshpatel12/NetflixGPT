import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVedio } from '../utils/moviesSlice';
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            if (!data.ok) {
                throw new Error('Failed to fetch movie videos');
            }
            const json = await data.json();
            console.log(json);
            const filteredData = json.results.filter(video => video.type === "Trailer");
            const trailer = filteredData.length ? filteredData[0] : json.results[0];
            dispatch(addTrailerVedio(trailer));
        } catch (error) {
            console.error('Error fetching movie videos:', error);
        }
    };

    useEffect(() => {
        getMovieVideo();
    }, [movieId]); // Ensure that useEffect re-runs when movieId changes
};

export default useMovieTrailer;
