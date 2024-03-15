import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowMovie } from "../utils/store/movieSlice";
import { optionsMovieAPI } from "../utils/constants";

const useAddNowPlayingMovies =()=>{
    const dispatch=useDispatch()
    const getMovieData= async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', optionsMovieAPI)
        const json=await data.json()
        dispatch(addNowMovie(json.results))
      }
    
      useEffect(()=>{
        getMovieData()
      },[])
}

export default useAddNowPlayingMovies;