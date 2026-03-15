import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { navItem } from '../utils/navbarItems'
import Cart from '../pages/Cart'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import { paths } from '../admin/utils/routes'
import UserLayout from '../layouts/Userlayout'
import AdminLayout from '../admin/layout/Adminlayout'
import Dashboard from '../admin/pages/Dashboard'
import ShowProduct from '../components/ShowProduct'
import Profile from '../pages/Profile'
import Home from '../pages/Home'
import Addressform from '../components/Addressform'



const RoutesProvider = () => {
  return (
    <>


      <Routes>
        <Route element={<UserLayout />}>
          {navItem.map((item) => (
            <Route path={item.path} element={<item.element />} />
           

          ))}
          <Route path={"/cart"} element={<Cart />} />
           <Route path={'/'} element={<Home />} />
          
          <Route path={'/profile'} element={<Profile />} />
          <Route path={"profile/signUp"} element={<SignUp />} />
          <Route path={'profile/logIn'} element={<Login />} />

          <Route path="/product/:id" element={<ShowProduct />} />
          <Route path="/api/addressform" element={<Addressform />} />

            
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {
            paths.map((path) => (<Route path={path.path} element={<path.element />} />))
          }



        </Route>


      </Routes>
    </>

  )
}

export default RoutesProvider