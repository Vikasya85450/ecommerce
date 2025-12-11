import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cart';

const Cart = () => {
const navigate=useNavigate();
 const{items} =useCartStore();
  return (
    <div className='flex justify-center items-center mr-3.5 relative' onClick={()=>navigate('/cart')}>
        {items?.length>0 &&   <p className='bg-neutral-800 text-white text-[12px] px-2 py-0.5 absolute top-[-4px] right-[-8px] rounded-full font-bold'>{items?.length }</p>}
      
        <FaShoppingCart size={40} className='text-orange-500'/>
        </div>
  )
}

export default Cart