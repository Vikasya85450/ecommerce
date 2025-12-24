import React, { useState } from 'react'
import { EditCategory } from '../utils/api';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const EditCategoryModel = ({ setIsEdit, editData }) => {
    const navigate = useNavigate();
    const [name, setName] = useState(editData?.name)
    const [file, setFile] = useState()
    const [isLoading, setLoading] = useState(false);


    const handleEditCategory = async (e) => {

        e.preventDefault();
        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("name", name),
                formData.append("file", file);
            formData.append("id", editData._id);


            formData.forEach((value, key) => {
                console.log(key, value);
            });

            const result = await EditCategory(formData);
            if (result.status == "Success") {

                toast.success("Category Edit Successfully !")
                setIsEdit(false);
                navigate(0)

            } else {
                toast.error("Something went wrong");
                console.log(result);

            }




        } catch (error) {
            console.log(error);


        } finally {
            setLoading(false)
        }
    }

    // const handleEditCategory = (e) => {
    //     e.preventDefault();
    //     console.log(editData);

    // }

    if (isLoading) {
        return <div className='w-full'><Loader color={"text-black"} /></div>
    }


    return (
        <div className="w-full  h-screen z-50 flex justify-center items-center">
            <form onSubmit={(e) => handleEditCategory(e)} className="w-full relative max-w-xl bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800">
                <h1 className="text-2xl font-bold text-gray-100 text-center mb-6">
                    Edit Category
                </h1>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        Category Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter category name"
                        className="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-gray-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        Category Image
                    </label>
                    <input
                        type="file"
                        className="w-full bg-gray-800 border border-dashed border-gray-700 rounded-lg p-2 text-gray-400 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"

                        onChange={(e) => setFile(e.target.files[0])
                        }
                    />
                </div>

                <div className="flex gap-4">
                    <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        Edit Category
                    </button>

                </div>
                <span onClick={() => setIsEdit(false)} className='text-white absolute top-0 right-1 cursor-pointer p-2 rounded-full font-bold'>X</span>
            </form>


        </div>
    )
}

export default EditCategoryModel