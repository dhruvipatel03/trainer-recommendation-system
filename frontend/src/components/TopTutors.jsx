import React from 'react'
import { tutors } from '../assets/assets'

const TopTutors = () => {
  return (
    <div className='flex flex-col items-centre gap-4 my-10 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium' >Top Tutors to Book</h1>
      <p className='sm:w-1/3 text-centre text-sm' >Simply browse through our extensive list of trusted tutors.</p>
     <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {tutors.slice(0,10).map((item, index)=>(
          <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:tranlate-y-[-10px] transition-all duration-500' key={index} >
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
                <div className='flex items-centre gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div> 
      <button>more</button>
    </div>
  )
}

export default TopTutors
