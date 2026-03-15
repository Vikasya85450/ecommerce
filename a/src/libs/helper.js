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

export const handleAddToWishlist = (item, addToWish) => {

  addToWish(item);

  toast.success("Item added to wishlist ❤️", {
    autoClose: 1000,
  });
};


// ✅ Remove from Wishlist
export const handleRemoveFromWishlist = (item, removeFromWish) => {

  let itemId = item._id;   // ⚠️ use _id if coming from MongoDB

  removeFromWish(itemId);

  toast.success("Item removed from wishlist ❌", {
    autoClose: 1000,
  });
};