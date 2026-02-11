import React from 'react'
import { useAuthStore } from '../store/auth'

const LogoutButton = () => {

    const {logout}=useAuthStore();
  return (
     <button onClick={()=>logout()} className='bg-cyan-900 font-semibold px-2  my-1 rounded-2xl    text-white hover:scale-90 hover:bg-gray-500 hover:shadow-xl transition-all duration-200 cursor-pointer' >Logout</button>
  )
}

export default LogoutButton