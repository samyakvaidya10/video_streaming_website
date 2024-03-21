import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {
  const movies=useSelector(store => store.movies);
  console.log(movies)
  return (

    <div className='text-white ml-10 -mt-40'>
      {
      movies.map((movie)=>{
          return <MovieList movies={movie.movies} title={movie.title}/>
      })
      } 
        
    </div>
  )
}
