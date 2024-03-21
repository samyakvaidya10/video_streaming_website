import { createSlice } from "@reduxjs/toolkit";
const initialState=[]

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            return action.payload
        }
    }
})

export default movieSlice.reducer

export const {addMovie}=movieSlice.actions