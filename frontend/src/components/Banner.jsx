import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex bg-green-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/* -----Left side------- */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2x1 md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className='mt-4'>Get a free consultation</p>
            </div>
        </div>
        {/* -----Right side------- */}
        <div className='hidden md:block md:w-1/2  lg:w-[300px] relative'>
            <img className='w-full absolute bottom-0 right-0 mx-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner