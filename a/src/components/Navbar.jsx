import User from './User';
import { navItem } from '../utils/navbarItems'
import {  useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Cart from './Cart';
import { useAuthStore } from '../store/auth';
import SeachBar from './SeachBar';


const Navbar = () => {

const navigate =useNavigate();
const location = useLocation();
    const {isAuthenticated,role}=useAuthStore();

  return (
    <nav className='flex justify-between px-2 items-center  p-4 w-full'>
     <Logo/>

     <SeachBar/>

      {/* {navItem.map((item,i) => (
        
        <div key={i}  className={`flex items-center gap-3 text-xl ${location.pathname==item.path ? 'text-blue-900 font-bold':"text-black"} hover:text-blue-500 hover:scale-125 hover:font-bold transition-all duration-200 cursor-pointer`} onClick={()=>navigate(item.path)}>
          <item.icon size={20}/>
          <p className=' text-sm'>{item.title}</p>
        </div>
      ))} */}


<div className='flex gap-2'>
  

  {isAuthenticated?.role==="admin" &&  <AdminButton/> }
  <Cart/>
  <User />
    
</div>
</nav>
  );
};

export default Navbar;
