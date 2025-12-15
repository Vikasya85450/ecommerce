import React from 'react'
import {useNavigate} from 'react-router-dom'

const LoginSignBtn = () => {
    const navigate=useNavigate();
  return (
    <div>
        
           <button onClick={()=>{navigate('signUp')}} className='bg-orange-500 p-2 mr-2 rounded-2xl'>Sign-Up</button>
              <button onClick={()=>{navigate('logIn')}} className='bg-blue-500 p-2 rounded-2xl'>Login</button>
    </div>
  )
}

export default LoginSignBtn