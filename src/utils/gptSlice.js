import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({

    name: 'gptInfo',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGptSearchView: (state, action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state, action)=>{
            const {movieNames, movieResults} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        },
        removeMovieNamesAndResults: (state, action)=>{
            state.movieResults = null;
            state.movieNames = null;
        }
    }
})

export const {toggleGptSearchView, addGptMovies, removeMovieNamesAndResults} = gptSlice.actions;
export default gptSlice.reducer;