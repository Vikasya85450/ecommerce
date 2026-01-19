import axios from 'axios'
import { toast } from 'react-toastify';



export const fetchAllProducts = async (id) => {
  try {

    let res;
    if (id == "all") {
      res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`);

    } else {
      res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product?id=${id}`);
    }

    return res.data;
  } catch (error) {
    toast.error('Error occured on fetching data');
    return 0;
    console.log("fetching productys error", error.message);

  }
}
