import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DeleteCategory } from '../utils/api'


const CategoryCard = ({ data ,handleOpenCategory}) => {
  const [Loading, setLoading] = useState(false);
 

  const navigate = useNavigate()

  const onDelete = async (id) => {
    try {
      setLoading(true);
      const res = await DeleteCategory(id);
      console.log(res);

      if (res.status == "success") {
        toast.success(res?.message);
        navigate(0)
      }


    } catch (error) {
      console.log("Error on Deleting");


    } finally {
      setLoading(false)
    }

  }



  return (
    <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-4 w-full max-w-sm">

      {/* Image */}
      <div className="w-full h-40 rounded-lg overflow-hidden  bg-gray-700 mb-4">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-white truncate">
          {data?.name}
        </h2>

        <p className="text-sm text-gray-400">
          Category
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-4">
        <button onClick={()=>handleOpenCategory(data)}  className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Edit
        </button>
        <button onClick={() => onDelete(data?._id)} disabled={Loading} className="px-3 py-1.5 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition">
          {Loading ? "Deleting" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
