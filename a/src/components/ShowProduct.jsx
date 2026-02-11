import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useCartStore } from "../store/cart";
import { showproduct } from "../utils/api";
import Loader from "./Loader";

const ShowProduct = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
  const { items, addToCart, removeToCart } = useCartStore();

  const { id } = useParams();

  const getProduct = async () => {
    try {
    const res = await showproduct(id);
    const {result, status }=res;
    
     if (status) {
     setProduct(result); 
        }
    
console.log(result);


      if (res?.status) {
        toast.success("Product found");
      } else {
        toast.error("Product not found");
      }
    } catch (err) {
      toast.error("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  if (!id) return;
  getProduct();
}, [id]);


  // 🔹 Check if product already in cart
  const inCart = useMemo(() => {
    return items.some((i) => i._id === product?._id);
  }, [items, product?._id]);
   
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader color="text-black" />
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl  mx-auto bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className=" size-80  object-cover">
          <img
            src={product.image}
            alt={product.title}
         className="w-full h-full object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="text-2xl font-semibold mt-6">
            ₹{product.price}
          </p>  
          <p className="text-2xl font-semibold mt-6">
         {product.discount}%
          </p>

          <div className="mt-6 flex gap-4">
            {inCart ? (
              <button
                onClick={() => removeToCart(product._id)}
                className="px-6 py-3 bg-red-500 text-white rounded-lg"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="px-6 py-3 bg-green-500 text-white rounded-lg"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShowProduct;
