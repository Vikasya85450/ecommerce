import React from 'react'
import { Route, Routes} from 'react-router-dom'

import Navbar from '../components/navbar'
import { navItem } from '../utils/navbarItems'


const RoutesProvider = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
      {navItem.map((item)=>(
        <Route path={item.path} element={<item.element/>}   />
      
    ))}
    
   </Routes>
    </>

  )
}

export default RoutesProvider