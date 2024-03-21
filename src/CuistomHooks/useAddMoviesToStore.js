import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/store/movieSlice";
import { optionsMovieAPI } from "../utils/constants";

//this hook is used to add movies in store of diffirednt category
const useAddMoviesToStore =(isCalled)=>{
  console.log('in add hook')
    let movies=[]
    const dispatch=useDispatch()
    const getMovieData= async()=>{
      // Now Playing
        let data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', optionsMovieAPI)
        let json=await data.json()
        let tempData= await{title:"Now Playing Movies",movies:json.results}
        movies.push(tempData)

      

      //Top Rated
        data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', optionsMovieAPI)
        json=await data.json()
        tempData= await{title:"Top Rated",movies:json.results}
        movies.push(tempData)

      //New Release
       data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', optionsMovieAPI)
       json=await data.json()
       tempData= await{title:"New Release",movies:json.results}
       movies.push(tempData)

       //Popular
       data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', optionsMovieAPI)
       json=await data.json()
       tempData= await{title:"popular Movies",movies:json.results}
       movies.push(tempData)


      //Popular On Myflix
        data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', optionsMovieAPI)
        json=await data.json()
        tempData= await{title:"Popular On Myflix",movies:json.results}
        movies.push(tempData)

      // US Movies
        data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', optionsMovieAPI)
        json=await data.json()
        tempData= await{title:"US Movies",movies:json.results}
        movies.push(tempData)

        dispatch(addMovie(movies))
        
        
      }
    
      useEffect(()=>{
        getMovieData();
      },[])
}

export default useAddMoviesToStore;