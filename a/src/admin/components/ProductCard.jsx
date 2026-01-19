import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DeleteProduct} from "../utils/api";

const ProductCard = ({ data, handleOpenProduct }) => {


    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onDelete = async (id) => {
        try {
            setLoading(true);
            const res = await DeleteProduct(id);
            console.log(id);
            

            if (res?.status === "success") {
                toast.success(res?.message || "Product deleted");
                navigate(0);
            }
        } catch (error) {
            console.log("Error deleting product", error);
            toast.error("Failed to delete product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-4 w-full max-w-sm">

            {/* Image */}
            <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-700 mb-4">
                <img
                    src={data?.image}
                    alt={data?.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="space-y-1">
                <h2 className="text-lg font-semibold text-white truncate">
                    {data?.title}
                </h2>

                <p className="text-sm text-gray-400 truncate">
                    {data?.category?.name}
                </p>

                <div className="flex justify-between text-sm text-gray-300 mt-2">
                    <span>₹ {data?.price}</span>
                    <span>Stock: {data?.stock}</span>
                </div>

                {data?.discount > 0 && (
                    <p className="text-xs text-green-400">
                        {data?.discount}% OFF
                    </p>
                )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-4">
                <button
                    onClick={() => handleOpenProduct(data)}
                    className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(data?._id)}
                    disabled={loading}
                    className="px-3 py-1.5 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-60"
                >
                    {loading ? "Deleting" : "Delete"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
