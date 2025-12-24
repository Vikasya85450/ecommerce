import axios from "axios";
import { toast } from "react-toastify";



export const addCategory = async (data) => {
    try {
        const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/category`,
            data,

        );


        return res.data;
    } catch (error) {
        console.error(
            "Error adding category:",
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

export const DeleteCategory = async (id) => {
    try {

        if (id) {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/category-delete`, { id });
            console.log(response);

            return response.data;
        }
    } catch (error) {
        console.log(error);
        toast.error(" Category Delete Error");
        return;
    }
}
export const EditCategory = async (data) => {
    try {

        if (data) {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/category-edit`, data);


            return response.data;
        }
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || " Category Edit Error")

        return;
    }
}