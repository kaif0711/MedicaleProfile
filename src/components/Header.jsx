import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div
      className='flex flex-col md:flex-row flex-wrap bg-green-400 rounded-lg px-6 md:px-10 lg:px-20'
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* -----left side------ */}
      <div
        className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]'
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Your courage is the first step toward recovery
        </p>
        <div>
          {/* <img src={assets.group_profiles} alt="" /> */}
          <p className='text-white leading-tight md:leading-tight lg:leading-tight'>
            We will help you to feel better and enjoy every single day of your life. It may be the fastest growing health.
          </p>
        </div>
      </div>

      {/* -----right side------ */}
      <div
        className='md:w-1/2 relative'
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img
          className='w-full md:absolute md:bottom-0 h-auto rounded-lg '
          src={assets.header_img}
          alt="Header Illustration"
        />
      </div>
    </div>
  )
}

export default Header
