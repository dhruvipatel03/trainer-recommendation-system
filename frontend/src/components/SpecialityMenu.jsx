import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-10 text-gray-800' id='speciality'>
        <h1 className='text-2xl font-semibold'>Find by Speciality</h1>
        <p className='sm:w-1/2 text-center text-sm'>Simply browse through our extensive list of trusted tutors, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.slice(0,6).map((item, index)=>(
              <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/tutors/${item.speciality}`}>
                 <img className='w-14 sm:w-20 mb-2' src={item.image} alt="" />
                 <p>{item.speciality}</p>
              </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu
