import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col rounded-lg md:flex-row flex-wrap bg-primary rounded-large px-6 md:px-10 lg:px-20'>
        {/*------------------rightside---------------------*/ }
        
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
               <p className='text-4xl md:text-5xl lg:6xl text-white  font-semibold leading-tight'>Book Appointment <br/> With Trusted Doctors</p>
               <div className='flex flex-row py-5 items-center'>
               <img src={assets.group_profiles} alt='' className='pr-5 w-35'/>
                <p className='hidden sm:block text-white '>Simply browse through our extensive list of trusted doctors,<br/>schedule your appointment hassle-free.</p>
               </div>
               <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 '>Book Appointment <img src={assets.arrow_icon} alt=''/></a>
            </div>

        {/*------------------leftside---------------------*/ }
        <div className='md:w-1/2 relative'>
            <img src={assets.header_img} alt='' className='w-full md:absolute bottom-0 h-rounded-lg'/>
        </div>
    </div>
  )
}

export default Header

