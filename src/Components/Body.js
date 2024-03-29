import React, { useEffect } from 'react'


import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/store/userSlice';
//import { auth } from '../utils/firebase'
const Body = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const auth = getAuth();
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {displayName,email,uid}=user;
          
          dispatch(addUser({displayName:displayName,email:email,uid:uid}))
          navigate('/browse')
          // ...
        } else {
          // User is signed out
          // ...
          navigate('/login')
          dispatch(removeUser())
          
        }
      });
    },[])
  return (
    
    <div className='px-2 md:px-10 bg-black'>  
    
    </div>
    
  )
}

export default Body