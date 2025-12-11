import axios from 'axios'
import { toast } from 'react-toastify';



  export const fetchAllProducts=async()=>{
try {
    
    const res=await axios.get('https://dummyjson.com/products');
    return res.data;
} catch (error) {
  toast.error('Error occured on fetching data');
  return 0;
   console.log("fetching productys error",error.message);
    
}
}
