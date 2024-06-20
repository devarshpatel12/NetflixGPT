import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    playingMovies: null,
    trailerVideo: null,
    TopRatedMovies: null,
    UpcomingMovies: null, // Added UpcomingMovies to initial state
    // Corrected name
    // Renamed from fetchPlayingMovies
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.playingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload; // Corrected from state.trailerVideo to state.playingMovies
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});

export const { addPlayingMovies, addTrailerVedio, addPopularMovies,addTopRatedMovies,addUpcomingMovies } = moviesSlice.actions; // Corrected from reducer to actions
export default moviesSlice.reducer;
