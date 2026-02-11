import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate=useNavigate();
  return (
    <div className='flex ' onClick={()=>navigate('/')}>
         <div className='flex flex-col'>
          <h1 className='text-5xl lobster-text font-bold px-3 text-blue-900'>SnapBasket</h1>
         <p className='text-lg font-stretch-50% text-center text-gray-600'> Snap It. Own It</p>
         </div>
       {/* <p className='h-15 w-20  pt-1'> <FaShoppingCart size={35} className='text-orange-500' />
   </p> */}
       </div>
   
  )
}

export default Logo