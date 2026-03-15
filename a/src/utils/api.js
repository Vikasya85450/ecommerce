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


export const showproduct = async (id) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error in finding product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const seeprofile = async (id) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error in finding product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const searchproduct = async (query) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/product/search?query=${query}`
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error in search product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const addAdress = async (data) => {
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/address`,
            data,
        );
        return res.data;
    } catch (error) {
        console.error(
            "Error adding product:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export const getAddress = async (query) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/address`
    );
    return res.data;
  } catch (error) {
    console.error(
      "Error in search product:",
      error.response?.data || error.message
    );
    throw error;
  }
};
