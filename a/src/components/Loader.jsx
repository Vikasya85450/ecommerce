import React from 'react'
import { FiLoader } from "react-icons/fi";

const Loader = ({ color }) => {
  return (
    <div className={`h-[80vh] w-full flex justify-center items-center ${color && color} `}><FiLoader size={40} className='text-2xl animate-spin ' /></div>
  )
}

export default Loader