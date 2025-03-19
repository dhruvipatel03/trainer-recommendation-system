import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { TutorContext } from '../context/TutorContext'


const Sidebar = () => {
    const {aToken} = useContext(AdminContext)

    const {tToken} = useContext(TutorContext)

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


        {
            tToken && (
                <ul className="text-[#515151] mt-5 w-auto md:w-72">
                    <NavLink 
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} 
                        to={'/tutor-dashboard'}
                    >
                        <img src={assets.home_icon} alt="" />
                        <p className="hidden md:block">Dashboard</p>
                    </NavLink>
            
                    <NavLink 
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} 
                        to={'/tutor-appointments'}
                    >
                        <img src={assets.appointment_icon} alt="" />
                        <p className="hidden md:block">Appointments</p>
                    </NavLink>
            
                    <NavLink 
                        className={({ isActive }) => `flex items-center gap-3 py-3.5 px-4 md:px-9 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600' : ''}`} 
                        to={'/tutor-profile'}
                    >
                        <img src={assets.people_icon} alt="" />
                        <p className="hidden md:block">Profile</p>
                    </NavLink>
                </ul>
            )
        }
    </div>
  )
}

export default Sidebar