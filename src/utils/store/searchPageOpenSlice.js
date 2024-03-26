import { createSlice } from '@reduxjs/toolkit'


 const searchPageOpenSlice=createSlice({
    name:"searchPageStatus",
    initialState:{
        isSearchOpen:false
    },
    reducers:{
        toggleSearchPage:(state,action)=>{
            state.isSearchOpen=!state.isSearchOpen
        }
    }

 })

 export const {toggleSearchPage}=searchPageOpenSlice.actions;
 export default searchPageOpenSlice.reducer

