import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../libs/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useCartStore } from "../store/cart";
import CategoryScroll from "../components/CategoryScroll";
import Bannner from "../components/Bannner";
import top from "../utils/topproduct.js";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [selected, setSelectedCategory] = useState("all");

  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProducts(selected);

        if (!data || data === 0) {
          setError(true);
        } else {
          setProducts(data.result);
        }
      } catch (err) {
        console.log("Product fetch error", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [selected]);

  if (loading) return <Loader />;

  if (error)
    return (
      <h2 className="text-2xl text-red-500 font-bold">
        No Products Found
      </h2>
    );

  return (
    <div className="space-y-6">
      {/* Categories */}
      <CategoryScroll
        setSelectedCategory={setSelectedCategory}
        selected={selected}
      />

      {/* Banner */}
      <div className="px-4">
        <Bannner />
      </div>

      {/* Top Products */}
      <div className="bg-gray-200 py-3">
        <h1 className="text-2xl font-medium px-4 mb-2">
          Top Products
        </h1>

        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
          {top.map((pro, idx) => (
            <div
              key={idx}
              className="min-w-[260px] flex items-center gap-4 p-3 bg-white rounded-xl shadow hover:shadow-md transition-all pb-3   "
            >
              {/* Image */}
              <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                <img
                  src={pro.img}
                  alt={pro.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div>
                <p className="font-semibold text-gray-800">
                  {pro.name}
                </p>
                <p className="text-sm text-gray-500">
                  {pro.brand}
                </p>
                <p className="text-orange-600 font-bold">
                  ₹{pro.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item, i) => (
          <ProductCard  key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
