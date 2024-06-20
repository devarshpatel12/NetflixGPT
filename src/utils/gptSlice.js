import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearch:(state,acion)=>{
         state.showGptSearch=!state.showGptSearch;
        }

    }
}
)
export const { toggleGptSearch}=gptSlice.actions;
export default gptSlice.reducer;

