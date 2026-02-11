import React from 'react'
import {useNavigate} from 'react-router-dom'

const LoginSignBtn = () => {
    const navigate=useNavigate();
  return (
    <div className='w-full flex items-center gap-4'>
        
           <button onClick={()=>{navigate('signUp')}} className='bg-gray-500 font-semibold px-2 rounded-2xl  w-[50%]  text-white hover:scale-110 hover:bg-blue-500 hover:shadow-xl transition-all duration-200 cursor-pointer'>Sign-Up</button>
              <button onClick={()=>{navigate('logIn')}} className='bg-gray-500 font-semibold rounded-2xl px-3 w-[50%]  text-white hover:scale-110 hover:bg-cyan-700 hover:shadow-xl transition-all duration-200 cursor-pointer'>Login</button>
    </div>
  )
}

export default LoginSignBtn