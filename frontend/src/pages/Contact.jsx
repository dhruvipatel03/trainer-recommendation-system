import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-6 md:px-12 lg:px-20 py-10 bg-gray-50'>
        
        <div className='text-center text-3xl font-semibold pt-5 text-gray-700'>
          <p>CONTACT <span className='text-primary'>US</span></p>
        </div>
        
        <div className='flex justify-center items-center pt-12'>
          <div className='flex flex-col md:flex-row gap-12 text-sm items-center bg-white p-6 rounded-lg shadow-lg'>
            <img className='w-full md:max-w-[350px] rounded-lg shadow-md' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-4 text-gray-700'>
              <p className='font-semibold text-xl text-gray-800'>OUR OFFICE</p>
              <p className='text-gray-600'>456, Ashram Road, Near Paldi, <br />Ahmedabad, India</p>
              <p className='text-gray-600'>Tel: +91 98756 78982 <br />Email: guidegrid@gmail.com</p>
              <p className='font-semibold text-xl text-gray-800 mt-4'>CAREERS AT GUIDEGRID</p>
              <p className='text-gray-600'>Learn more about our teams and job openings.</p>
              <button className='border border-primary px-6 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-md'>Explore Jobs</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact