import { toast } from "react-toastify";
import axios from 'axios'

export const Signup = async (userData) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/sign-up`, userData);
        return res.data;

    } catch (error) {
        return error;


    }
}
export const LoginApi = async (userData) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/sign-in`, userData);
        return res.data;

    } catch (error) {
        return error;


    }
}


export const getProduct = async () => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/product`);
        return res.data;
    } catch (error) {
        console.error(
            "Error getting product:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export const getCategory = async () => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/category`

        );


        return res.data;
    } catch (error) {
        console.error(
            "Error in finding category:",
            error.response?.data || error.message
        );
        throw error;
    }
};