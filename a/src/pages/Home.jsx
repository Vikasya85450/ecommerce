import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../libs/api'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import { useCartStore } from '../store/cart'
import { toast } from 'react-toastify'
import CategoryScroll from '../components/CategoryScroll'

const Home = () => {


  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([]);
  const [selected,setSelectedCategory]=useState("all");

  const { addToCart } = useCartStore();

  useEffect(() => {




    const fetch = async () => {
      try {
        setloading(true);
        let data = await fetchAllProducts(selected);

        if (data === 0) {
          setError(true);
        }

        if (data) {
          setProducts(data.result)

        }
      }
      catch (error) {
        console.log("In product error");

      }
      finally {
        setloading(false);
      }
    }

    fetch()



  }, [selected]);




  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h2 className='text-2xl text-red-500 font-bold'>No Products Found </h2>
  }



  return (


    <div>
      <h1>All Products</h1>
      <CategoryScroll setSelectedCategory={setSelectedCategory} selected={selected} />
      <div className='grid grid-cols-4 gap-4 overflow-x-auto'>
        {products.map((item, i) => <ProductCard key={i} item={item} />)}
      </div>
    </div>
  )
}

export default Home