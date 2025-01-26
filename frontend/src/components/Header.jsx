import React from 'react'
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 md:px-8 lg:px-16">

       {/* ------Left Side------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-8 md:py-10 m-auto">
            <p className="text-lg md:text-2xl lg:text-3xl text-white font-semibold leading-snug md:leading-snug lg:leading-normal">
              Book Appointment <br /> With Trusted Tutors
            </p>

            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
              <img className='w-20' src={assets.group_profiles} alt="" />
              {/* <p className="text-sx md:text-base mt-1"> */}
              <p className="text-xs md:text-sm mt-1">
                Simply browse through our extensive list of <br className='hidden sm:block' /> trusted tutors, schedule your appointment hassle-free.
              </p>
            </div>
            <a href="#speciality"  className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300">
               Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* ------Right Side------- */}
            <div className='md:w-1/2 relative'>
              <img  style={{ width: '65%' }} className='md:absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto rounded-lg' src={assets.tutors} alt="" />
            </div>
    </div>
  )
}

export default Header