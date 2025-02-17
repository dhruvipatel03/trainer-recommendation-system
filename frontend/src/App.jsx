import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trainers from './pages/Trainers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path="/tutors/:speciality" element={<Trainers />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Myprofile' element={<Myprofile />} />
        <Route path='/Myappointments' element={<Myappointments />} />
        <Route path='/appointment/:trainid' element={<Appointment />} />
      </Routes>
    <Footer/>
    </div>
  )
}

export default App