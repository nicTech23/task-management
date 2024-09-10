import React, { useEffect } from 'react'
import Sidebar from '../component/Sidebar'
import { CgProfile } from "react-icons/cg";
import decodeToken from '../helper/decode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const DasboardLayout = ({children}) => {
  
  const token = Cookies.get("token") 
  
  let username;
  if (token) {
       username  = decodeToken(token)?.username
  }
 

    const clearCookies = ()=>{
        window.location.href = "/login"
        Cookies.remove("token")
    }
  const auth = Cookies?.get("token") 

  if (auth) {
    return (
    <div className='w-screen flex flex-row  bg-gray-100'>
      <div className='w-1/5 min-h-screen'>
        <Sidebar/>
      </div>
      <div className='w-4/5 '>
      <div className='w-full bg-blue-600 h-[60px] flex justify-between items-center text-white px-10 '>
        <div className='font-normal text-xl'>Task Management</div>
        <div className='flex justify-end items-center space-x-2 cursor-pointer'>
            <CgProfile className='text-2xl'/>
            <h2 className='text-lg font-normal'>{username} | </h2>
            <h2 onClick={()=>clearCookies()} className='text-lg  font-normal'>Logout</h2>
        </div>
      </div>
        {children}
      </div>
    </div>
  )
  } else {
    return (
      <div>Ho</div>
    )
  }
  
  
}

export default DasboardLayout
