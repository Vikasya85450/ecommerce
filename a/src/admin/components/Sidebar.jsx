import React from "react";
import { paths } from "../utils/routes";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();


  return (
    <div className="min-h-screen bg-slate-900 text-white px-5 py-8">
      <h1 onClick={() => navigate('/')} className="text-2xl text-center font-semibold">
        Welcome Admin Sir
      </h1>

      <div className="flex flex-col gap-3 mt-6">
        {paths.map((p, i) => {

          const isActive =
            p.path == currentPath || (currentPath == 'admin' && p.isAdmin == true)


          return (
            <div
              key={i}
              onClick={() => navigate(p.path)}
              className={`flex gap-3 items-center px-3 py-2 rounded-lg cursor-pointer transition
                ${isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              <p.icon size={22} />
              <h2 className="text-sm font-medium">{p.label}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
