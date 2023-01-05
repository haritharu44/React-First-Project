import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
