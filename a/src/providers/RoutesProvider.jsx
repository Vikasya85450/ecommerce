import React from 'react'
import { Route, Routes} from 'react-router-dom'

import Navbar from '../components/navbar'
import { navItem } from '../utils/navbarItems'
import Cart from '../pages/Cart'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'



const RoutesProvider = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
      {navItem.map((item)=>(
        <Route path={item.path} element={<item.element/>}   />
        
      
    ))}
             <Route path={"/cart"} element={<Cart/>}   />
              <Route path={"/signUp"} element={<SignUp/>}   />
            <Route path={'/logIn'} element={<Login/>}   />

    
   </Routes>
    </>

  )
}

export default RoutesProvider