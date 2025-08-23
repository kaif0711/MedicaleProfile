import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Appointment from './pages/Appointment'
// import Contect from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,  // animation duration in ms
      once: true,      // only animate once
    });
  }, []);
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />}/>
        {/* <Route path='/contact' element={<Contect/>}/> */}
        <Route path='/appointment/:docId' element={<Appointment />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App