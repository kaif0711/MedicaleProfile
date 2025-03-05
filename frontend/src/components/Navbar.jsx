import React from 'react'
import {assets} from '../assets/assets'
import { NavLink , useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden' />
            </NavLink>
            {/* <NavLink to='/doctors'>
                <li className='py-1'>All doctores</li>
                <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden' />
            </NavLink> */}
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden' />
            </NavLink>
            {/* <NavLink to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-green-400 w-3/5 m-auto hidden' />
            </NavLink> */}
        </ul>
        {/* <div>
            <button>Get Started</button>
        </div> */}
    </div>
  )
}

export default Navbar