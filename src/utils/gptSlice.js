import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({

    name: 'gptInfo',
    initialState: {
        showGptSearch: false,
    },
    reducers:{
        toggleGptSearchView: (state, action)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;