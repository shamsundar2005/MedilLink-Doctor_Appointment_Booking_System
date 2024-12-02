import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='flex rounded-lg bg-primary px-6 md:px-10 lg:px-12 my-20'>
      <div className='flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5'>
        <h1 className='text-white text-xl font-semibold lg:text-5xl'>
          Book Appointment With 100+ Trusted Doctors
        </h1>
        <button className='mt-10 bg-green-100 rounded-full px-12 py-3' onClick={()=>{navigate('/login');scrollTo(0,0)}}>
          Create Account
        </button>
      </div>
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img
          src={assets.appointment_img}
          className='w-full bottom-0 right-0 max-w-md absolute'
          alt="Doctor appointment banner"
        />
      </div>
    </div>
  );
};

export default Banner;
