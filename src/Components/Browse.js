import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isUserSinnedIn, signOutUser } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'


function Browse() {
  const dispatch=useDispatch()
  const user=useSelector(store => store.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isUserSinnedIn()){
      console.log("in condition")
      navigate('/login')
    }
  })
  
  console.log(user)
  return (<>
    
   
    <button onClick={()=>{signOutUser()
      navigate('/login')}} className='bg-red-600'>Sign Out</button>
    </>
  )
}

export default Browse