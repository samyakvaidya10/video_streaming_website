import {useEffect, useState} from "react";
import { optionsMovieAPI } from "../utils/constants";

const useGetMovieTrailer=(movieId)=>{
    const movieVideoAPI="https://api.themoviedb.org/3/movie/"+movieId+"/videos"
    const [trailerVideo,setTrailerVideo]=useState(null)
    const fetchMovieVideos=async()=>{
        const data=await fetch(movieVideoAPI,optionsMovieAPI);
        const json=await data.json();
        const trailerVideo= await json.results.filter(video=> video.type==="Teaser")
        setTrailerVideo(trailerVideo)  
    }
    useEffect(()=>{
       fetchMovieVideos()
    },[])
    if(trailerVideo!==null) return trailerVideo[0];
}

export default useGetMovieTrailer