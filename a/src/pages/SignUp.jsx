import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { Signup } from "../utils/api";
import { useAuthStore } from "../store/auth";


const SignUp = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) {
      return navigate('/')
    }
  }, [isAuthenticated]);



  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);


    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password not matched");
      setLoading(false);
      return;
    }

    try {
      const result = await Signup(formData);
      if (!result) {
        toast.error("Network error");
        return;
      }

      if (
        result?.response?.data?.status === "error" ||
        result?.code === "ERR_NETWORK"
      ) {
        toast.error(result?.response?.data?.message || "Network error");
        return;
      }

      login(result);
      toast.success("User created successfully");
      navigate("/");

    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Signup failed"
      );
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div className="bg-gradient-to-br -mt-14 from-gray-100 to-gray-300 w-full max-w-md rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Create Account
        </h2>

        {/* Name */}
        <form onSubmit={(e) => handleSignUp(e)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input value={formData.name} onChange={(e) => setFormData((p) => {
              return { ...p, name: e.target.value }
            }
            )
            }
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              value={formData.email}
              onChange={(e) => setFormData((p) => {
                return { ...p, email: e.target.value }
              })
              }
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
              value={formData.password}
              onChange={(e) => setFormData((p) => {
                return { ...p, password: e.target.value }
              })
              }
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block font-semibold mb-1">
              Confirm Password
            </label>
            <input value={formData.confirmPassword} onChange={(e) => setFormData((p) => {
              return { ...p, confirmPassword: e.target.value }
            })
            }
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>


          {/* Button */}
          <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600 hover:scale-105 transition-all duration-300">
            {loading ? "Signing up ..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-4 text-gray-500">
          Already have an account?{" "}
          <span onClick={() => { navigate('/login') }} className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
