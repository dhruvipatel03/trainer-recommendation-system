import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-6 md:px-12 lg:px-20 py-10 bg-gray-50'>
        
        <div className='text-center text-3xl font-semibold pt-5 text-gray-700'>
          <p>ABOUT <span className='text-primary'>US</span></p>
        </div>

        <div className='my-12 flex flex-col md:flex-row gap-12 items-center'>
          <img className='w-full md:max-w-[350px] rounded-lg shadow-lg' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-5 md:w-3/4 text-sm text-gray-700 text-justify bg-white p-6 rounded-lg shadow-md'> 
            <p>Welcome to <span className='font-semibold text-gray-900'>GuideGrid</span>, where we connect students with the perfect tutors to make learning simple and personalized. Our platform is designed to bridge the gap between learners and skilled educators, offering a seamless experience to book tutors who align with your academic needs and goals.</p>
            <p>With a focus on making education accessible and stress-free, we use smart recommendations to match you with tutors based on your preferences and learning style. Let’s transform the way you learn—one session at a time!</p>
            <b className='text-lg text-gray-900'>Our Vision</b>
            <p>To revolutionize education by creating a platform where every student can find their ideal tutor, unlocking their true potential. We aim to make personalized learning accessible, enjoyable, and impactful for learners everywhere. Empowering students with the right guidance is our step toward a brighter future!</p>
          </div>
        </div>

        <div className='text-2xl font-semibold my-6 text-center'>
          <p>WHY <span className='text-primary'>CHOOSE US</span></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
          <div className='border px-8 py-6 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer rounded-lg shadow-md bg-white'>
            <b className='text-lg'>Efficiency:</b>
            <p>Connecting students with the right tutors quickly and seamlessly to save time and effort.</p>
          </div>

          <div className='border px-8 py-6 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer rounded-lg shadow-md bg-white'>
            <b className='text-lg'>Convenience:</b>
            <p>Simplifying the process of finding, booking, and interacting with tutors, all in one platform.</p>
          </div>

          <div className='border px-8 py-6 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer rounded-lg shadow-md bg-white'>
            <b className='text-lg'>Personalization:</b>
            <p>Tailoring tutor recommendations based on individual learning needs and goals.</p>
          </div>
        </div>
    </div>
  )
}

export default About