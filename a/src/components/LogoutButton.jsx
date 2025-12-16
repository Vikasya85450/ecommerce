import React from 'react'
import { useAuthStore } from '../store/auth'

const LogoutButton = () => {

    const {logout}=useAuthStore();
  return (
     <button onClick={()=>logout()} className='bg-orange-500 p-2 mr-2 rounded-2xl'>Logout</button>
  )
}

export default LogoutButton