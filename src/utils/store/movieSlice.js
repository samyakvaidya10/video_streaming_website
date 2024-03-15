import { createSlice } from "@reduxjs/toolkit";
const initialState={
    nowPlayingMovies:null
}

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addNowMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload
        }
    }
})

export default movieSlice.reducer

export const {addNowMovie}=movieSlice.actions