import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'
import Sidebar from '../components/Sidebar';


const Adminlayout = () => {
  const navigate = useNavigate();
  const { role } = useAuthStore();



  useEffect(() => {
    if (role !== 'admin') {
      navigate('/')
    }
  }, [role])



  return (
    <section className='w-screen h-full flex'>
      <div className='w-[20vw]'>
        <Sidebar />
      </div>
      <div className='w-[80vw] max-h-screen overflow-y-scroll'>
        <Outlet />
      </div>

    </section>

  )
}

export default Adminlayout