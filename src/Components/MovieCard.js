import React, { useState } from "react";
import { movieBannerLink } from "../utils/constants";
import { unstable_useViewTransitionState, useNavigate } from "react-router-dom";
import useCardHover from "../CuistomHooks/useCardHover";
import { hover } from "@testing-library/user-event/dist/hover";

export const MovieCard = ({ movie }) => {
  // console.log(movie)
  const [isMouseOver, setMouseOver] = useState(false);

  //console.log(movie)

  const navigate=useNavigate()
  
  const handleMouseEnter = () => {
   
    
  };
  
  const handleMouseLeave = () => {
   

  };

  return (
    <div className="hover:cursor-pointer"  onClick={()=>{navigate('play_movie/'+movie.id)}}>
      <div
        onMouseEnter={() => {
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        className="w-40 "
      >
        <img
          alt="movie banner "
          className={" mx-auto rounded-md"}
          src={movieBannerLink + movie.poster_path}
        />

        {/* <div onMouseEnter={()=>{handleMouseEnter()}} onMouseLeave={()=>{handleMouseLeave()}}
        className='relative  w-64  hover:scale-125'>
         <img alt='movie banner ' 
            className={'h-36 mx-auto rounded-md'} 
            src={movieBannerLink+movie.backdrop_path}/>
         <div 
         className={
                isMouseOver?
                "absolute inset-0 flex items-center justify-center":
                "absolute inset-0 flex items-end justify-center"}>
            <span className="text-white text-xl font-semibold mb-2">{movie.title}</span>
        </div>
        
        
    </div> */}
      </div>
      {/* {isMouseOver&&<div className='text-white  '>
        <span></span>
        </div>
        } */}
    </div>
  );
};
