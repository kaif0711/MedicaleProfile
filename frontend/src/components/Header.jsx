import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-green-400 rounded-lg px-6 md:px-10 lg:px-20'>
        
        {/* -----left side------ */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md: mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Your courage is the first step toward recovery
            </p>
            <div>
                {/* <img src={assets.group_profiles} alt="" /> */}
                <p className='text-white leading-tight md:leading-tight lg:leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rem ad cum nobis aspernatur aliquid modi magni <br />sit soluta enim pariatur!</p>
            </div>
        </div>
        {/* -----right side------ */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header