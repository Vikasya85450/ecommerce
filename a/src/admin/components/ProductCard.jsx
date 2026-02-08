import React, { useState } from "react";
import { toast } from "react-toastify";
import { DeleteProduct } from "../utils/api";

const ProductCard = ({ data, handleOpenProduct, onDeleteSuccess }) => {
  const [loading, setLoading] = useState(false);

  // 🗑️ Delete product
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      setLoading(true);
      const res = await DeleteProduct(data._id);

      if (res?.status === "success") {
        toast.success(res.message || "Product deleted");
        onDeleteSuccess(data._id); // refresh list
      } else {
        toast.error(res?.message || "Delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-xl transition">

      {/* 🖼️ Image */}
      <div className="h-40 w-full rounded-lg overflow-hidden bg-gray-700 mb-3">
        <img
          src={data?.image || "/no-image.png"}
          alt={data?.title || "Product"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📦 Info */}
      <h2 className="text-white font-semibold truncate">
        {data?.title}
      </h2>

      <p className="text-gray-400 text-sm truncate">
        {data?.category?.name || "No category"}
      </p>

      <div className="flex justify-between text-gray-300 text-sm mt-2">
        <span>₹ {data?.price}</span>
        <span>Stock: {data?.stock}</span>
      </div>

      {data?.discount > 0 && (
        <p className="text-green-400 text-xs mt-1">
          {data.discount}% OFF
        </p>
      )}

      {/* 🔘 Actions */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => handleOpenProduct(data)}
          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          disabled={loading}
          className="px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700 disabled:opacity-60"
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
