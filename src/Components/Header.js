import React, { useState } from 'react'
import profileImg from '../utils/profile.png'
import { useSelector } from 'react-redux'
import { signOutUser } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
export const Header = () => {
  const [isProfileClicked,setIsProfileClicked]=useState(false)
  const user=useSelector(store =>store.user)
  const navigate=useNavigate()
  return (
    <div className='sticky top-0 h-14 z-20 sm:h-0   mx-auto '>
      <div className='flex pt-4 px-5 bg-gradient-to-b from-black '>
            <span className='text-red-700 m-1 font-semibold text-xl text-center justify-center'>netflix</span>
            <div className='ml-auto flex h-fit ' >
              <span className='text-white m-1 pr-3'>Welcome {user.displayName}</span>
              <img onMouseOver={()=>setIsProfileClicked(true)} width='35px'
                
               src={profileImg}alt='profile'
               className='cursor-pointer'></img>
            </div>
            {isProfileClicked&&
        <div onMouseLeave={()=>{setIsProfileClicked(false)}} className='w-56  z-10 absolute right-0 mt-10 bg-black text-end'>
          <button className='text-white p-2 text-xl sm:text-base'
          onClick={()=>{signOutUser()
            navigate('/login')}}
            >Sign Out</button>
          <span className='text-white'></span>
        </div>
      }
            
            </div>
    </div>

  )
}
