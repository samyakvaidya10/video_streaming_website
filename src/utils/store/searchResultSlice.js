import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice=createSlice({
    name:"searchResult",
    initialState:[],
    reducers:{
        addSearchResult:(state,action)=>{
            return action.payload;
        }
    }
})

export const {addSearchResult}=searchResultSlice.actions
export default searchResultSlice.reducer