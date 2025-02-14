import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'


const Sidebar = () => {
    const {aToken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border border-gray-300'>
        {
            aToken && <ul className='text-[#515151] mt-5 '>
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md: min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ' '}`} to={'/admin-dashboard'}>
                    <img src={assets.home_icon} alt="" />
                    <p>Dashboard</p>
                </NavLink>

                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md: min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/all-appointments'}>
                    <img src={assets.appointment_icon} alt="" />
                    <p>Appointments</p>
                </NavLink>

                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md: min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/add-tutor'}>
                    <img src={assets.add_icon} alt="" />
                    <p>Add Tutor</p>
                </NavLink>

                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md: min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} to={'/tutors-list'}>
                    <img src={assets.people_icon} alt="" />
                    <p>Tutors List</p>
                </NavLink>
            </ul>
        }
    </div>
  )
}

export default Sidebar