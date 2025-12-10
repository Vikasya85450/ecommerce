import axios from 'axios'



  export const fetchAllProducts=async()=>{
try {
    
    const res=await axios.get('https://dummyjson.com/products');
    return res.data;
} catch (error) {
   console.log("fetching productys error",error.message);
    
}
}
