import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RoutesProvider from './providers/RoutesProvider'
import {ToastContainer} from 'react-toastify'


const App = () => {
  return (
    <section className='bg-white min-h-screen max-w-screen overflow-auto '>
   <BrowserRouter>
   <RoutesProvider/>
   <ToastContainer/>
   </BrowserRouter>
    </section>

  )
}

export default App