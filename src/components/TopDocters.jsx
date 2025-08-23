import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDocters = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1
        className='text-3xl font-medium'
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Trusted Doctors
      </h1>

      <div
        className='w-full grid sm:grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {doctors.slice(0, 2).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Stagger animations by index
          >
            {/* Responsive image container */}
            <div className='w-full h-64 md:h-72 lg:h-80 bg-green-200'>
              <img
                className='w-full h-full object-contain'
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Info section */}
            <div className='p-5 text-center'>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>MBBS</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopDocters
