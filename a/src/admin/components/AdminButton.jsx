import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminButton = () => {
    const navigate = useNavigate();
  return (
    
    <div onClick={()=>navigate('/admin')}>
        <button  className='bg-orange-500 font-semibold px-3 py-2  rounded-full  text-white hover:scale-110 hover:bg-blue-500 hover:shadow-xl transition-all duration-200 cursor-pointer'>Admin</button>
    </div>
  )
}

export default AdminButton