import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiUserCircle ,} from "react-icons/hi";

const User = () => {
    const navigate=useNavigate();
  return (
    <div>
        
        <p  className='bg-white rounded-full' onClick={()=>{navigate('/profile')}}>
            <HiUserCircle size={50} className='text-blue-900 ' /> </p>
    </div>
  )
}

export default User