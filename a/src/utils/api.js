import { toast } from "react-toastify";
import axios from 'axios'

export const Signup=async(userData)=>{
    try {
        const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/sign-up`,userData);
        return res.data;
        
    } catch (error) {
return error;
        
        
    }
}
export const LoginApi=async(userData)=>{
    try {
        const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/sign-in`,userData);
        return res.data;
        
    } catch (error) {
return error;
        
        
    }
}