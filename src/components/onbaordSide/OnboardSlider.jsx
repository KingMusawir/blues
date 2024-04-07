import React, { useState, useEffect } from 'react';
import Home1 from '../../assets/images/home1.png';
import Home2 from '../../assets/images/home2.png';
import Home3 from '../../assets/images/home3.png';

function OnboardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <img src={Home1} className=' w-[100%]' alt='' />,
    <img src={Home2} className=' w-[100%]' alt='' />,
    <img src={Home3} className=' w-[100%]' alt='' />,
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='relative overflow-hidden mt-5'>
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className='w-full flex-shrink-0'>
            <div className='border border-[#1818A6] p-6 h-full'>{slide}</div>
          </div>
        ))}
      </div>
      <button
        className='absolute top-1/2 left-0 transform -translate-y-1/2 px-3 py-1 bg-[#1818A6] text-white rounded-l-md'
        onClick={prevSlide}
      ></button>
      <button
        className='absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-1 bg-[#1818A6] text-white rounded-r-md'
        onClick={nextSlide}
      ></button>
    </div>
  );
}

export default OnboardSlider;
