import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trainers from './pages/Trainers'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/trainers' element = {<Trainers />} />
      </Routes>
    </div>
  )
}

export default App