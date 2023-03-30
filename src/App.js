import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Footer from "./components/Footer"

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Activities from './components/Activities'
import Location from './components/Location'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/location' element={<Location />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App