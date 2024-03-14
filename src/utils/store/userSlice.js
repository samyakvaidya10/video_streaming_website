import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log("Action called")
            console.log(action.payload)

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