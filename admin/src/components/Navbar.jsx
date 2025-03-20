import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { TutorContext } from '../context/TutorContext'

const Navbar = () => {

  const {aToken , setAToken} = useContext(AdminContext)
  const {tToken , setTToken} = useContext(TutorContext)
  const navigate = useNavigate()

  const logout = () =>{
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    tToken && setTToken('')
    tToken && localStorage.removeItem('tToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 bg-white border border-gray-300'>
        <div className='flex items-center gap-2 text-s'>
          <img className='w-36 sm:w-40 cursor-pointer' src={assets.logo} alt="" />
          <p className='border px-2.5 py-0.5 rounded-full text-gray-600'>{aToken ? 'Admin' : 'Tutor' } </p>
        </div>
        <button onClick={logout} className='px-10 py-2 bg-primary text-white border-b rounded-full cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar