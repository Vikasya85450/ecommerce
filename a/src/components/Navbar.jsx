import React from 'react'
import { navItem } from '../utils/navbarItems'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate =useNavigate();
  const location = useLocation();

  
  return (
    <nav className='flex justify-between px-2 items-center w-full'>
      <h1>ECommerce</h1>
     
     <div className='flex gap-3 items-center'>

       {navItem.map((item) => (
        
        <div className={`flex items-center gap-1 ${location.pathname==item.path ? 'text-red-500':"text-white"}`} onClick={()=>navigate(item.path)}>
          <item.icon size={20}/>
          <p>{item.title}</p>
        </div>
      ))}
     </div>

      <h2>Profile</h2>
    </nav>
  );
};

export default Navbar;
