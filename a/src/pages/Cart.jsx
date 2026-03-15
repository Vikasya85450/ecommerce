import React from "react";
import { useCartStore } from "../store/cart";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Cart = () => {
  const { items, removeToCart } = useCartStore();

  // ✅ Calculate totals 
  const subtotal = items.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const CartItem = ({ item }) => {
    return (
      <div className="h-20 shadow-lg bg-neutral-200 rounded-xl flex items-center justify-between px-4">
        <div className="flex gap-3 items-center">
          <img
            src={item.image}
            alt=""
            className="w-14 h-14 object-cover rounded-lg"
          />

          <div>
            <h2 className="text-sm font-bold text-blue-600">
              {item.title}
            </h2>
            <p className="text-xs text-gray-600">
              Brand: {item.brand}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-green-600 font-bold">
            ₹ {item.price}
          </p>

          <button
            onClick={() => removeToCart(item._id)}
          >
            <RiDeleteBin2Fill size={20} color="red" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 p-6">

      {/* Cart Items */}
      {items.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item._id}
            item={item}
          />
        ))
      )}

      {/* Summary */}
      {items.length > 0 && (
        <div className="bg-gray-200 p-5 rounded-xl shadow-md w-full md:w-1/3 ml-auto">
          <div className="bg-blue-700 px-2 rounded-xl">
            <h2 className="font-bold text-lg text-white mb-4 ">
            Order Summary
          </h2>
          </div>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>GST (18%)</span>
            <span>₹ {gst.toFixed(2)}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
