import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        
        <div className='text-center text-2xl text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-8 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[300px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-3 md:w-3/4 text-xs text-gray-600 text-justify'> 
            <p>Welcome to GuideGrid, where we connect students with the perfect tutors to make learning simple and personalized. Our platform is designed to bridge the gap between learners and skilled educators, offering a seamless experience to book tutors who align with your academic needs and goals.</p>
            <p>With a focus on making education accessible and stress-free, we use smart recommendations to match you with tutors based on your preferences and learning style. Let’s transform the way you learn—one session at a time!</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>To revolutionize education by creating a platform where every student can find their ideal tutor, unlocking their true potential. We aim to make personalized learning accessible, enjoyable, and impactful for learners everywhere. Empowering students with the right guidance is our step toward a brighter future!</p>
          </div>
        </div>
    </div>
  )
}

export default About