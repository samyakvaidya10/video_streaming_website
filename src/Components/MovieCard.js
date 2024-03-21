import React, { useState } from 'react'
import { movieBannerLink } from '../utils/constants'

export const MovieCard = ({movie}) => {
    const [isMouseOver,setMouseOver]=useState(false)
    const handleMouseEnter=()=>{
        setMouseOver(true)
    }
    const  handleMouseLeave=()=>{
        setMouseOver(false)
    }
    
  return (

    
    <div className='w-40'>
         <img alt='movie banner ' 
            className={' mx-auto rounded-md'} 
            src={movieBannerLink+movie.poster_path}/>
            
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
  )
}

