import React, { useContext, useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'; 
import profilePic from '../assets/profile_pic.jpg';
import dropdownIcon from '../assets/dropdown_icon.svg';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();

    const {token , setToken , userData} = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false)

    const logOut = ()=>{
        setToken(false)
        localStorage.removeItem('token')
    }
   
  return (
    <div className='flex items-center justify-between text-medium h-20 py-2 mb-2  border-b border-b-gray-400'>
         <img onClick={()=>navigate('/')} className='w-65 h-20 object-contain cursor-pointer  ' src={logo} alt="Logo"/> 
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
                token && userData
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={userData.image}alt="" />
                    <img className='w-2.5' src={dropdownIcon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-xl font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-width-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p onClick={()=>navigate('Myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('Myappointments')} className='hover:text-black cursor-pointer'>Appointments</p>
                            <p onClick={logOut} className='hover:text-black cursor-pointer'>Log Out</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
            }
            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* ---------------mobile menu------------------------------ */}
            <div className={` ${showMenu ? 'fixed w-full':'h-0 w-0'}  md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-6 py-6'>
                    <img className='w-36 z-30' src={logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className="px-4 py-2 rounded inline-block">Home</p></NavLink>
                <NavLink  onClick={()=>setShowMenu(false)} to='/Trainers' ><p className="px-4 py-2 rounded inline-block">All trainers</p></NavLink>
                <NavLink  onClick={()=>setShowMenu(false)} to='/About'><p className="px-4 py-2 rounded inline-block">About</p></NavLink>
                <NavLink  onClick={()=>setShowMenu(false)} to='/Contact'><p className="px-4 py-2 rounded inline-block">Contact</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar