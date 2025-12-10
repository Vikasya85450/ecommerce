import React from 'react'
import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <div className='h-[80vh] w-screen flex justify-center items-center '><FiLoader size={40} className='text-2xl animate-spin ' /></div>
  )
}

export default Loader