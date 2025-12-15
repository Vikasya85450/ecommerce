import { toast } from "react-toastify";
import { useCartStore } from "../store/cart";





export const handleAddToCart=(item,addToCart)=>{
    
  addToCart(item);
  toast.success('Item added to cart',{
    autoClose:1000
  })

}

export const handleRemoveFromCart=(item,removeToCart)=>{

let itemId=item.id;


    
  removeToCart(itemId);
  toast.success('Item deleted From cart',{
    autoClose:1000
  })

}