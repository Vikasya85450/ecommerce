import React from "react";
import { useWishlistStore } from "../store/wish.js";
import { RiDeleteBin2Fill } from "react-icons/ri";


const Wishlist = () => {
  // const { items, removeFromWish } = useWishlistStore();
  const { wishitems, addToWish, removeFromWish } = useWishlistStore();

  return (
    <div className="flex flex-col gap-6 p-4">
<h1 className=" text-4xl font-bold text-blue-600">Your ❤️ items</h1>
      {wishitems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is empty ❤️
        </p>
      ) : (   
        
       wishitems.map((item) => (
          <div
            key={item._id}
            className="h-24 shadow-lg bg-neutral-200 rounded-xl flex items-center justify-between px-4"
          > 
            {/* Left Side */}
            <div className="flex gap-4 items-center">
            
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />

              <div>
                <h2 className="text-md font-bold text-blue-600">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">
                  Brand: {item.brand}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <p className="text-green-600 font-bold text-lg">
                ₹ {item.price}
              </p>

              <button
                onClick={() => removeFromWish(item._id)}
              >
                <RiDeleteBin2Fill size={22} color="red" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;