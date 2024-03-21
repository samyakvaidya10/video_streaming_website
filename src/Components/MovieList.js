import React, { useRef, useState } from 'react'
import { MovieCard } from './MovieCard'
import './customcss.css'
export const MovieList = ({movies,title}) => {
    

  const containerRef=useRef(null)
 
  const scrollRight=()=>{
    if(containerRef.current){
      containerRef.current.scrollLeft += 600;
    }
  }
  const scrollLeft=()=>{
    if (containerRef.current) {
      containerRef.current.scrollLeft += -600;
    }
  }
  const [isMouseOver,setIsMouseOver]=useState(false);

  if(movies===undefined||movies===null){
    return <span>Shimmer</span>
  }
  return (<>
    <span className='relative z-10 ml-5 text-lg font-semibold'>{title}</span>
    <div className='relative flex ' onMouseEnter={()=>setIsMouseOver(true)} onMouseLeave={()=>setIsMouseOver(false)}>
      <button onClick={()=>{scrollLeft()}} 
        className={`absolute block  h-full  w-32  bg-black bg-opacity-80 ${isMouseOver?"visible":"invisible"}` }
        >{"<"}</button>
  
    
     <div  ref={containerRef} id="scroll-container" className=' mx-5 grid grid-flow-col gap-4 custom-overflow overflow-x-auto  transition-transform   '
      style={{  scrollBehavior: 'smooth' }}>
    
     {/* <div className='flex m-5 overflow-x-auto  '> */}
        {/* <MovieCard movie={movie}/>
        <MovieCard movie={movie}/>
        <MovieCard movie={movie}/>
        <MovieCard movie={movie}/>
        <MovieCard movie={movie}/>
        <MovieCard movie={movie}/>
        <MovieCard movie={movie}/>
        <MovieCard movie={movie}/>
        <MovieCard movie={movie}/> */}
       { movies.map((movie)=>{
          return <MovieCard key={movie.id} movie={movie}/>
        })
      }
    </div>
    <button onClick={()=>{scrollRight()}}
        // className=' block absolute h-full w-32 right-0  bg-black bg-opacity-80'
        className={` block absolute h-full  w-32 right-0 bg-black bg-opacity-80 ${isMouseOver?"visible":"invisible"}` }
        >{">"}</button>
    </div>
    </>
  )
}
