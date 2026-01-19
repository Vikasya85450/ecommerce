import React, { useEffect, useState } from 'react'
import { getProduct } from '../../utils/api';
import ProductCard from '../../components/ProductCard';
import Loader from '../../../components/Loader';


const Products = () => {

  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false)


  const handleOpenProduct = () => {

  }

  useEffect(() => {
    const fetchDta = async () => {
      try {
        setLoading(true)
        const response = await getProduct();

        if (response.status) {
          setProducts(response.result)
        }

      } catch (error) {
        setLoading(false);
        toast.error("something went wrong ")
      } finally {
        setLoading(false)
      }
    }
    fetchDta();
  }, []);


  if (Loading) {
    return <div className='h-screen w-full flex justify-center items-center'>
      <Loader color={"text-black"} />
    </div>
  }
  return (
    <div className='w-full grid p-4 grid-cols-4 gap-3 '>
      {
        products.map((product, i) => <ProductCard key={i} data={product} handleOpenProduct={handleOpenProduct} />)
      }
    </div>
  )
}

export default Products