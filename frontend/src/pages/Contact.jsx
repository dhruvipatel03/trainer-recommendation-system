import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        
        <div className='text-center text-2xl pt-5 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>
        
        <div className='flex justify-center items-center pt-10'>
        <div className='flex flex-col justfy-center md:flex-row gap-10 text-sm'>
          <img className='w-full md:max-w-[300px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-3'>
            <p>OUR OFFICE</p>
            <p>456, Ashram Road, Near Paldi, <br />Ahmedabad, India</p>
            <p>Tel: +91 98756 78982 <br />Email: guidegrid@gmail.com</p>
            <p>CAREERS AT GUIDEGRID</p>
            <p>Learn more about our teams and job openings.</p>
            <button>Explore Jobs</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact