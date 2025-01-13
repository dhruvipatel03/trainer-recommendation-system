import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/trainers/:speciality' element={<Trainers />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<Myappointments />} />
        <Route path='/appointment/:trainid' element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App