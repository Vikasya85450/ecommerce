import React, { useEffect, useState } from 'react';
import profileImg from '../assets/banner/profile.png';
import { seeprofile } from '../utils/api';
import { toast } from 'react-toastify';
import { navItem } from '../utils/navbarItems'
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthStore } from '../store/auth';
import LogoutButton from '../components/LogoutButton';
import LoginSignBtn from '../components/LoginSignBtn';

const Profile = () => {
  const [user, setUser] = useState(null);

   const navigate =useNavigate();
  const location = useLocation();
    const {isAuthenticated,role}=useAuthStore();

  const getProfile = async () => {
    try {
      const res = await seeprofile('6941646b4804cf11e433ac6d');
      if (res.status) {
        // toast.success("User profile")
        setUser(res.user);
      
      }
    } catch (error) {
      toast.error("user not found")
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  // ⛔ prevent render until data comes
  if (!user) return null;

  return (
    <div className="relative">
      <div className="flex flex-col absolute top-0 right-0 auto mb-4 pb-2 w-[20%] bg-gray-300 rounded-2xl shadow-xl outline-2">
        
        <div className=' pb-2 b'>
          <div className="flex justify-center mt-6">
          <img
            src={profileImg}
            alt="profile"
            className="size-30 shadow-2xl rounded-full p-1"
          />
           </div>

          <div className="text-center mt-4">
          <h1 className="font-bold">{user.name}</h1>
          <h2>E-mail {user.email}</h2>
          <h2>Role {user.role}</h2>
           </div>
        </div>

<div className='flex flex-col w-full gap-2 items-start px-1 mx-2 my-3  '>
  {navItem.map((item,i) => (
          
          <div key={i}  className={`flex outline-2 w-full p-1 items-center gap-3 text-xl ${location.pathname==item.path ? 'text-blue-900 font-bold':"text-black"} hover:text-gray-900 hover:scale-100 hover:font-bold transition-all duration-200 cursor-pointer`} onClick={()=>navigate(item.path)}>
            <item.icon size={20}/>
            <p className=' text-sm'>{item.title}</p>
          </div>
        ))}
</div>  

       <div className='w-full mb-2 px-3'>
        {isAuthenticated?<LogoutButton/>: <LoginSignBtn/>}
       
       </div>

      </div>
    </div>
  );
};

export default Profile;
