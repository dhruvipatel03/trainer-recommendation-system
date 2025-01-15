import React, { useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'; 
import profilePic from '../assets/profile_pic.png';
import dropdownIcon from '../assets/dropdown_icon.svg';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token,setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-2 mb-2 border-b border-b-gray-400'>
         <img className='W-60 h-10 cursor-pointer' src={logo} alt="Logo"/> 
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/Trainers'>
                <li className='py-1'>All TRAINERS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/About'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/Contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={profilePic}alt="" />
                    <img className='w-2.5' src={dropdownIcon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-width-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p onClick={()=>navigate('Myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('Myappointments')} className='hover:text-black cursor-pointer'>Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log Out</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar