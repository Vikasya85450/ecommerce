import React, { useEffect, useState } from "react";
import { addProduct, getCategory } from "../../utils/api";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [categories, setAllCategory] = useState([])



  const navigate = useNavigate();

  useEffect(() => {
    const fetchDta = async () => {
      try {
        setLoading(true)
        const response = await getCategory();

        if (response.status == 'success') {
          setAllCategory(response.result)
        }

      } catch (error) {
        setLoading(false);
        toast.error("something went wrong ")
      } finally {
        setLoading(false)
      }
    }
    fetchDta();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !category || !file) {
      return toast.error("Please fill all required fields");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await addProduct(formData);

      if (response.status) {
        toast.success("Product added successfully");
        setTitle("");
        setDescription("");
        setBrand("");
        setStock("");
        setCategory("");
        setPrice("");
        setDiscount("");
        setFile(null);
        navigate('/products')

      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center">
      {isLoading ? (
        <Loader color="text-white" />
      ) : (
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-semibold text-white text-center mb-8">
            Add Product
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Title */}
            <input
              type="text"
              placeholder="Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
            />

            {/* Description */}
            <textarea
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input h-24 resize-none"
            />

            {/* Brand */}
            <input
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="input"
            />

            {/* Stock */}
            <input
              type="number"
              placeholder="Stock Quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="input"
            />

            {/* Category Dropdown */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
              <option value="">Select Category</option>
              {categories?.map((cat, i) => (
                <option key={i} value={cat?._id}>
                  {cat?.name}
                </option>
              ))}
            </select>

            {/* Price */}
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input"
            />

            {/* Discount */}
            <input
              type="number"
              placeholder="Discount (%)"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="input"
            />

            {/* File Upload */}
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-gray-300"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
            >
              Add Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
