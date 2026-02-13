import React from "react";
import profileImg from "../assets/banner/profile.png";
import { useAuthStore } from "../store/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { navItem } from "../utils/navbarItems";
import LogoutButton from "../components/LogoutButton";
import LoginSignBtn from "../components/LoginSignBtn";

const Profile = () => {
  const { user, isAuthenticated } = useAuthStore();

  const navigate = useNavigate();
  const location = useLocation();

if (!isAuthenticated || !user) {
  return (
    <div className="absolute top-0 right-4 mt-20 mr-4 w-[20%]   bg-gray-300 rounded-2xl shadow-xl p-6 text-center">
      <p className="mb-4 font-semibold">Please login to view profile</p>
      <LoginSignBtn />
    </div>
  );
}


  return (
    <div className="relative">
      <div className="flex flex-col absolute top-0 right-0 w-[20%] bg-gray-300 rounded-2xl shadow-xl pb-4">

        {/* Profile Image */}
        <div className="flex justify-center mt-6">
          <img
            src={profileImg}
            alt="profile"
            className="size-28 shadow-2xl rounded-full p-1"
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-4">
          <h1 className="font-bold text-lg">{user?.name}</h1>
          <h2 className="text-sm">Email: {user?.email}</h2>
          <h2 className="text-sm">Role: {user?.role}</h2>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col w-full gap-2 px-3 mt-4">
          {navItem.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 p-2 cursor-pointer text-sm
                ${
                  location.pathname === item.path
                    ? "text-blue-900 font-bold"
                    : "text-black"
                }`}
            >
              <item.icon size={18} />
              {item.title}
            </div>
          ))}
        </div>

        {/* Auth Button */}
        <div className="mt-4 px-3">
          {isAuthenticated ? <LogoutButton /> : <LoginSignBtn />}
        </div>

      </div>
    </div>
  );
};

export default Profile;
