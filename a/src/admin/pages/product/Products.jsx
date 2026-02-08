import React, { useEffect, useState } from "react";
import { getProduct } from "../../utils/api";
import ProductCard from "../../components/ProductCard";
import EditProductModel from "../../components/EditProductModel";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getProduct();
      if (res?.status) setProducts(res.result);
    } catch {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
    setOpenEdit(true);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader color="text-black" />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            data={p}
            handleOpenProduct={handleOpenProduct}
            onDeleteSuccess={fetchProducts}
          />
        ))}
      </div>

      {openEdit && selectedProduct && (
        <EditProductModel
          product={selectedProduct}
          onClose={() => setOpenEdit(false)}
          onSuccess={fetchProducts}
        />
      )}
    </>
  );
};

export default Products;
