import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <div>
         <img src={logo} alt="Logo"/> 
        <ul>
            <NavLink>
                <li>HOME</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>All TRAINERS</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>CONTACT</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Create account</button>
        </div>
    </div>
  )
}

export default Navbar