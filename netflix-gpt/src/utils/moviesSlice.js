import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action) => {
            state.NowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state,action) => {
            state.upomingMovies = action.payload;
        },
        addTrendingMovies:(state,action) => {
            state.trendingMovies = action.payload;
        },
        addTopRatedMovies:(state,action) => {
            state.TopRatedMovies = action.payload;
        },
        addTrailerVideo:(state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});
export const {addNowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies,addTrendingMovies,addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
