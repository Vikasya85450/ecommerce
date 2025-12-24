import React, { useState } from "react";
import { addCategory } from "../../utils/api";
import {toast} from 'react-toastify'
import Loader from '../../../components/Loader'

const AddCategory = () => {
    const [name, setName] = useState("")
    const [file, setFile] = useState()
    const [isLoading , setLoading]=useState(false)

    const handleSubmit = async (e) => {
   
           e.preventDefault();

        const formData = new FormData();

        formData.append("name", name),
            formData.append("file", file)
  try {
    setLoading(true)
        const response = await addCategory(formData);
        
        if(response.status == "success"){
            toast.success("category added successfully")
        }
        setName("");
        setFile(null)
      
        
     } catch (error) {
        console.log(error);
        setLoading(false)
      
     }finally{
        setLoading(false)
     }


    }



    return (
        <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center">{ isLoading? <Loader color={"text-white"}/> : 
            <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-xl p-8">

                {/* Header */}
                <h1 className="text-3xl font-semibold text-white text-center mb-8">
                    Add Category
                </h1>

                {/* Form */}
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>

                    {/* Category Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Category Name
                        </label>
                        <input onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            placeholder="Enter category name"
                            className="w-full rounded-md bg-gray-700 border border-gray-600 px-4 py-2 text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Category Image
                        </label>
                        <input onChange={(e) => setFile(e.target.files[0])
                        }
                            type="file"
                            id="image"
                            className="w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-gray-300
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:text-sm file:font-medium
                         file:bg-gray-600 file:text-white
                         hover:file:bg-gray-500"

                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium
                       hover:bg-blue-700 transition"
                    >
                        Add Category
                    </button>
                </form>
            </div>}
        </div>
    );
};

export default AddCategory;
