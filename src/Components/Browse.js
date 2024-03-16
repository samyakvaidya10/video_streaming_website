import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isUserSinnedIn, signOutUser } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'

import useAddNowPlayingMovies from '../CuistomHooks/useAddNowPlayingMovies'


function Browse() {
  
  const user=useSelector(store => store.user)
  const movies=useSelector(store => store.movies)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isUserSinnedIn()){
      navigate('/login')
    }
  })
  
  useAddNowPlayingMovies()

  return (<div className='h-screen px-2  bg-black   '>
    <Header />
    
    </div>
  )
}

export default Browse

/* Structure of page
  browse
    - MainContainer Trailer playing area
        - trailer in bg
        - leftside trailer name and description and play now button

    - Secondary Container
        Recomended movies section
        - sections  list
        - movie card 
          - name and image
  
*/