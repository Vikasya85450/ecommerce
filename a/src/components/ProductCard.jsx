import React, { useMemo } from "react";
import { useCartStore } from "../store/cart";
import { handleAddToCart, handleRemoveFromCart } from "../libs/helper";
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const { items, addToCart, removeToCart } = useCartStore();

  const inCart = useMemo(() => {
    return items.some((i) => i?._id === item?._id);
  }, [items, item?._id]);
   
  const navigate = useNavigate();
  return (
  
    <div  className="max-w-sm bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-all duration-300 flex flex-col" >
      
      {/* Image */}
<div  onClick={() => navigate(`/product/${item._id}`)}>

        <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-60 object-contain rounded-xl"
        />

        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full 
            ${item.stock > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}
          `}
        >
          {item.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

        <h2 className="text-lg font-bold text-gray-800">
          {item.title}
        </h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {item.description}
        </p>
 </div>

      {/* Content */}
      <div className="mt-4 flex flex-col flex-1">
        

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xl font-bold text-orange-600">
              ₹{item.price}
            </p>
            <p className="text-sm line-through text-gray-400">
              MRP ₹{(item.price + (item.price * item.discount) / 100).toFixed(2)}
            </p>
          </div>

          <span className="px-2 py-1 bg-red-100 text-red-600 text-sm rounded-lg font-semibold">
            {item.discount}% OFF
          </span>
        </div>

        {/* Button (Always Bottom) */}
        <div className="mt-auto pt-5">
          {inCart ? (
            <button
              onClick={() => handleRemoveFromCart(item, removeToCart)}
              className="w-full py-2 bg-red-700 text-white rounded-xl font-semibold hover:bg-red-800 transition"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(item, addToCart)}
              className={`w-full py-2 rounded-xl font-semibold transition
                ${item.stock > 0
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"}
              `}
              disabled={item.stock === 0}
            >
              {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default ProductCard;
