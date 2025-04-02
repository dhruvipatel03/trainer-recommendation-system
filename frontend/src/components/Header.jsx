import React from 'react'
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-12 lg:px-20 py-8 shadow-lg">

       {/* ------Left Side------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-8 md:py-12 m-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-snug md:leading-snug lg:leading-normal drop-shadow-lg">
              Book Appointment <br /> With Trusted Tutors
            </p>

            <div className='flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light'>
              <img className='w-24' src={assets.group_profiles} alt="Group Profiles" />
              <p className="text-sm md:text-base mt-1 text-justify leading-relaxed">
                Simply browse through our extensive list of <br className='hidden sm:block' /> trusted tutors, schedule your appointment hassle-free.
              </p>
            </div>
            <a href="#speciality"  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-700 text-sm font-semibold shadow-md hover:scale-105 hover:bg-gray-200 transition-all duration-300">
               Book Appointment <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
            </a>
        </div>

        {/* ------Right Side------- */}
        <div className='hidden md:block md:w-1/2 lg:w-[400px] relative'>
          <img  style={{ width: '95%', height: 'auto' }} className='md:absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto rounded-lg shadow-xl' src={assets.tutorsImg} alt="Tutors" />
        </div>
    </div>
  )
}

export default Header