import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchPageOpenSlice from "./searchPageOpenSlice";
import searchResultSlice from "./searchResultSlice";
const store = configureStore({
	reducer:{
        user:userSlice,
        movies:movieSlice,
        searchPageStatus:searchPageOpenSlice,
        searchResult:searchResultSlice
    }
})
export default store;