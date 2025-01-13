import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trainers from './pages/Trainers'
import Myprofiles from './pages/Myprofile'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App