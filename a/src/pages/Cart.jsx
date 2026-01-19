import React from 'react'
import { useCartStore } from '../store/cart';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { handleRemoveFromCart } from '../libs/helper';

const Cart = () => {
  const { items, removeToCart } = useCartStore();


  const CartItem = ({ item }) => {
    console.log(item);



    return <div className='h-16 border-none shadow-lg bg-neutral-200 rounded-xl flex items-center justify-between px-4'>
      <div className='flex gap-2'>
        <div className='size-14'>
          <img src={item.image} alt="" />
        </div>
        <div className='flex  gap-10 items-center '>
          <h2 className='text-slate-800 text-sm font-bold text-left'>Product Name: <span className='text-blue-500'>{item.title}</span></h2>
          <h2 className='text-slate-800 text-sm font-bold text-left flex gap-1.5'>Product Brand: <div className='px-2 bg-orange-500 rounded-lg'><span className='text-white font-semibold'>{item.brand}</span></div></h2>
        </div>
      </div>
      <div className='flex '>
        <div className=' flex gap-2 items-center'>
          <p className='text-base font-bold '>Price:</p>
          <p className='text-lg text-green-500 font-extrabold'>{item?.price}</p>

        </div>
        <button onClick={() => handleRemoveFromCart(item, removeToCart)} className="w-full px-4 py-2  text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          <RiDeleteBin2Fill size={20} color='red' />
        </button>
      </div>

    </div>
  }


  return (
    <div className='flex flex-col gap-2'>
      {
        items.map((item, i) => <CartItem item={item} key={i} />)
      }


    </div>
  )
}

export default Cart