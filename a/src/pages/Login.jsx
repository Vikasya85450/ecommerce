import React from 'react'
import { useNavigate} from 'react-router-dom'

const Login = () => {
     const navigate=useNavigate();
   return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div className="bg-gradient-to-br -mt-14 from-gray-100 to-gray-300 w-full max-w-md rounded-2xl shadow-xl p-8">
        
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Log-in
        </h2>


        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

       

        {/* Button */}
        <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600 hover:scale-105 transition-all duration-300">
          Log-In
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-4 text-gray-500">
          You don't have an account?{" "}
          <span onClick={()=>{navigate('/signUp')}} className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Sign-Up
          </span>
        </p>
      </div>
    </div>
  );
  
}

export default Login