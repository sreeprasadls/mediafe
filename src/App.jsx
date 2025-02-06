import { useState } from 'react'

import './App.css'

import Log from './pages/Log'
import Landing from './pages/Landing'
import Reg from './pages/Reg'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Header from './component/Header'
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/log' element={<Log />}/>
      <Route path='/reg' element={<Reg />}/>
      <Route path='/dash' element={<Dashboard />}/>
      <Route path='/his' element={<History/>}/>
     

      
      
    </Routes>
    <Footer />
    <ToastContainer />
    
    </>
    
  )
}

export default App
