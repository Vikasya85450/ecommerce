import React from 'react'
import {useNavigate} from 'react-router-dom'

const LoginSignBtn = () => {
    const navigate=useNavigate();
  return (
    <div className='w-full flex items-center gap-4'>
        
           <button onClick={()=>{navigate('signUp')}} className='bg-orange-500 font-semibold px-3 py-2  rounded-full  text-white hover:scale-110 hover:bg-blue-500 hover:shadow-xl transition-all duration-200 cursor-pointer'>Sign-Up</button>
              <button onClick={()=>{navigate('logIn')}} className='bg-blue-500 font-semibold px-3 py-2  rounded-full  text-white hover:scale-110 hover:bg-orange-500 hover:shadow-xl transition-all duration-200 cursor-pointer'>Login</button>
    </div>
  )
}

export default LoginSignBtn