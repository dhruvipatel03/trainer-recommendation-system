import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* -----Left section-------- */}
        <div>
          <img className='mb-5 w-40' src={logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
          Welcome to the Teacher Recommendation System! Our platform helps students connect 
          with the best teachers based on their expertise, availability, and personalized preferences. 
          Book your sessions easily,and take the first step and Start your journey today!
          </p>
        </div>
        {/* -----Center section-------- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* -----Right section-------- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>guidegrid@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------------ copyright text------------ */}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2025@ guidegrid - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
