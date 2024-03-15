import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            //state.user=action.payload;
            return action.payload
        },
        removeUser:()=>{
            return null;
        }
    }
})

export default userSlice.reducer;

export const {addUser,removeUser}=userSlice.actions