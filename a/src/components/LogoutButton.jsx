import React from 'react'
import { useAuthStore } from '../store/auth'

const LogoutButton = () => {

    const {logout}=useAuthStore();
  return (
     <button onClick={()=>logout()} className='bg-orange-500 font-semibold px-3 py-2  rounded-full  text-white hover:scale-110 hover:bg-blue-500 hover:shadow-xl transition-all duration-200 cursor-pointer' >Logout</button>
  )
}

export default LogoutButton