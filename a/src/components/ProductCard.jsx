import React, { useMemo } from "react";
import { useCartStore } from "../store/cart";
import { toast } from "react-toastify";
import { handleAddToCart, handleRemoveFromCart } from "../libs/helper";

const ProductCard = ({ item }) => {
  const {items, addToCart,removeToCart}=useCartStore();
 
  
  
  let inCart=useMemo(()=>{
  const result=items.find((i)=>i?.id==item?.id);
  if(result){
    return true;
  }else{
    return false;
  }
  },[items]);

 
  

 
  

  
  
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
    
      <div className="relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-60 object-contain rounded-xl"
        />

      
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full 
          ${
            item.availabilityStatus === "In Stock"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {item.availabilityStatus}
        </span>
      </div>

      
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>

        {/* Rating */}
        <p className="text-yellow-500 mt-1">
          ⭐ {item.rating} / 5
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {item.description}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xl font-bold text-orange-600">${item.price}</p>
            <p className="text-sm line-through text-gray-400">
              MRP ${(item.price + (item.price * item.discountPercentage) / 100).toFixed(2)}
            </p>
          </div>

          <span className="px-2 py-1 bg-red-100 text-red-600 text-sm rounded-lg font-semibold">
            {item.discountPercentage}% OFF
          </span>
        </div>

        {/* Buttons */}
          {
        inCart ? <div className="mt-5 flex gap-3">
          <button onClick={()=>handleRemoveFromCart(item,removeToCart)} className="w-full py-2 bg-red-800 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
           Remove From Cart
          </button>
          </div>:
         <div className="mt-5 flex gap-3">
          <button onClick={()=>handleAddToCart(item,addToCart)} className="w-full py-2 bg-orange-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>
          
          </div>
       }
      </div>
    </div>
  );
};

export default ProductCard;
