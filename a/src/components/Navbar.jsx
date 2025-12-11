import React from 'react'
import { HiUserCircle ,} from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

import logo from '../assets/logo.jpg'


import { navItem } from '../utils/navbarItems'
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

import Cart from './Cart';

const Navbar = () => {


 
  const navigate =useNavigate();
  const location = useLocation();

  
  return (
    <nav className='flex justify-between px-2 items-center  p-4 w-full'>
     <Logo/>

     <div className='flex gap-7 bg-slate-300 rounded-full px-7 py-4 justify-center items-center text-black '>

       {navItem.map((item,i) => (
        
        <div key={i}  className={`flex items-center gap-3 text-xl ${location.pathname==item.path ? 'text-orange-500 font-bold':"text-black"} hover:text-blue-500 hover:scale-125 hover:font-bold transition-all duration-200 cursor-pointer`} onClick={()=>navigate(item.path)}>
          <item.icon size={20}/>
          <p className=' text-sm'>{item.title}</p>
        </div>
      ))}
     </div>


<div className='flex gap-2'>
  <Cart/>
   <p className='bg-white rounded-full'>
    <HiUserCircle size={40} className='text-orange-500 ' /> </p>

</div>
  
    </nav>
  );
};

export default Navbar;
