import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className='flex '>
         <h1 className='text-4xl font-bold px-3 text-orange-500'>SnapBasket </h1>
       <p className='h-15 w-20  pt-1'> <FaShoppingCart size={35} className='text-orange-500' />
   </p>
       </div>
   
  )
}

export default Logo