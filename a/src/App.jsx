import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RoutesProvider from './providers/RoutesProvider'


const App = () => {
  return (
    <section className='bg-gray-400 min-h-screen w-screen overflow-auto px-5 py-4'>
   <BrowserRouter>
   <RoutesProvider/>
   </BrowserRouter>
    </section>

  )
}

export default App