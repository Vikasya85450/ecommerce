import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditProduct, getCategory } from "../utils/api";
import Loader from "../../../src/components/Loader";

const EditProductModel = ({ product, onClose, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Prefill form
  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setDescription(product.description || "");
      setBrand(product.brand || "");
      setStock(product.stock || "");
      setPrice(product.price || "");
      setDiscount(product.discount || "");
      setCategory(product.category?._id || "");
    }
  }, [product]);

  // ✅ Fetch categories
  useEffect(() => {
    getCategory().then(res => {
      if (res?.status === "success") setCategories(res.result);
    });
  }, []);

  // ✅ CORRECT SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product?._id) {
      return toast.error("Invalid product");
    }

    if (!title || !price) {
      return toast.error("Title and price are required");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("stock", stock);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("category", category);

    if (file) {
      formData.append("file", file); // MUST MATCH multer.single("file")
    }

    try {
      setLoading(true);
      const res = await EditProduct(product._id, formData);

      if (res?.message) {
        toast.success("Product updated successfully");
        onSuccess();
        onClose();
      } else {
        toast.error(res?.message || "Update failed");
      }
    } catch {
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-xl">
        <h2 className="text-white text-xl mb-4">Edit Product</h2>

        {loading ? (
          <Loader color="text-white" />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea className="input" value={description} onChange={e => setDescription(e.target.value)} />
            <input className="input" value={brand} onChange={e => setBrand(e.target.value)} />
            <input className="input" type="number" value={stock} onChange={e => setStock(e.target.value)} />
            <input className="input" type="number" value={price} onChange={e => setPrice(e.target.value)} />
            <input className="input" type="number" value={discount} onChange={e => setDiscount(e.target.value)} />

            <select className="input" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              {categories.map(c => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>

            <input type="file" onChange={e => setFile(e.target.files[0])} />

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded">
                Update
              </button>
              <button type="button" onClick={onClose} className="flex-1 bg-gray-600 text-white py-2 rounded">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProductModel;
