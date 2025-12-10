import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../libs/api'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const Home = () => {


  const [loading ,setloading]=useState(false);
const [products,setProducts]=useState([])

useEffect(()=>{

  
   const fetch=async ()=>{
    try {
       setloading(true);
let data= await fetchAllProducts();
if(data){
 setProducts(data.products)
  
}
  }
     catch (error) {
      console.log("In product error");
      
    }
    finally{
setloading(false);
 }
}
   
  fetch()
  
  
 
},[])


if(loading){
  return <Loader/>
}

if(products.length < 1){
  <h2>No Products Found </h2>
}



  return (

 
    <div>
        <h1>All Products</h1>
        <div className='grid grid-cols-4 gap-4 overflow-x-auto'>
          {products.map((item,i)=><ProductCard key={i} item={item}/>)}
        </div>
    </div>
  )
}

export default Home