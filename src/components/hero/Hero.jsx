import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Houses from '../../assets/images/houses.png';
import FindPropertyProp from '../btn/FindPropertyProp';
import Detailsprop from '../btn/Detailsprop';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      className=' grid grid-cols-1 lg:grid-cols-5 gap-4 mb-28  '
    >
      <div className=' col-span-2 flex flex-col '>
        <p className=' text-primary mb-6 text-base'>Your all-in-one stop</p>
        <h1 className=' text-6xl font-bold mb-6'>
          Buy<span className=' text-primary'>.</span> Sell
          <span className=' text-primary'>.</span> Rent
          <span className=' text-primary'>.</span>
        </h1>
        <p className=' mb-8 text-lg lg:text-xl font-medium leading-8 text-subheader'>
          Finding the perfect home or property is now easier than ever with
          Blues. We are your one-stop platform that connects home renters,
          buyers, sellers, agents, and service providers, creating a cohesive
          and efficient real estate ecosystem. Whether you're looking to rent,
          buy, sell, or invest, we've got you covered!
        </p>
        <div className=' mb-16'>
          <FindPropertyProp value='Find Property' />
        </div>
        <div className=' flex gap-5 lg:gap-10'>
          <Detailsprop number='300' value='Property' />
          <Detailsprop number='20k' value='Satisfied Customers' />
          <Detailsprop number='50' value='Agents' />
        </div>
      </div>
      <div data-aos='fade-up-left' className='image-box col-span-3'>
        <img src={Houses} alt='A house image' />
      </div>
    </div>
  );
}

export default Hero;
