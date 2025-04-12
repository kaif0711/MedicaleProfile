import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className='flex bg-green-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/* -----Left side------- */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className='mt-4'>Get a free consultation</p>
            </div>
        </div>
        {/* -----Right side------- */}
        <div className='hidden md:block md:w-1/2 lg:w-[300px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt='' />
        </div>
    </div>
  );
};

const MultipleImageSlideshow = () => {
  const images = [
    assets.dr16,
    assets.dr2,
    assets.dr1,
    assets.dr4,
    assets.dr14,
    assets.dr17,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 1;
  const slidesToScroll = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + slidesToScroll) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='relative w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[300px] lg:w-[1140px] lg:h-[350px] mx-auto mt-4 sm:mt-6 overflow-hidden rounded-lg shadow-lg'>
      <img
        src={images[currentIndex]}
        alt='Slideshow'
        className='w-full h-full object-cover transition-opacity duration-500 rounded-lg'
      />
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'
      >
        &#10094;
      </button>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'
      >
        &#10095;
      </button>
      {/* Slide Indicators */}
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${currentIndex  === index ? 'bg-gray-800' : 'opacity-50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const BannerWithSlideshow = () => {
  return (
    <div>
      <Banner />
      <MultipleImageSlideshow />
    </div>
  );
};

export default BannerWithSlideshow;
