import React from 'react'
import { Link } from 'react-router-dom'
import Biology from '../assets/Biology.png'
import Physics from '../assets/Physics.png'
import Maths from '../assets/Maths.png'
import Literature from '../assets/Literature.png'
import Chemistry from '../assets/Chemistry.png'
import Es from '../assets/Es.png'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-10 text-gray-800' id='speciality'>
        <h1 className='text-2xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/2 text-center text-sm'>Simply browse through our extensive list of trusted tutors, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to="/tutors/Biology">
             <img className='w-14 sm:w-20 mb-2' src={Biology} alt="Biology" />
             <p>Biology</p>
          </Link>
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to="/tutors/Physics">
             <img className='w-14 sm:w-20 mb-2' src={Physics} alt="Physics" />
             <p>Physics</p>
          </Link>
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to="/tutors/Maths">
             <img className='w-14 sm:w-20 mb-2' src={Maths} alt="Maths" />
             <p>Mathematics</p>
          </Link>
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to="/tutors/Literature">
             <img className='w-14 sm:w-20 mb-2' src={Literature} alt="Literature" />
             <p>Literature</p>
          </Link>
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to="/tutors/Chemistry">
             <img className='w-14 sm:w-20 mb-2' src={Chemistry} alt="Chemistry" />
             <p>Chemistry</p>
          </Link>
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to="/tutors/Es">
            <img className='w-14 sm:w-20 mb-2' src={Es} alt="Environmental Science" />
            <p>Environmental Science</p>
          </Link>
        </div>
    </div>
  )
}

export default SpecialityMenu
