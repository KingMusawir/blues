import React, { useState, useEffect } from 'react';
import Home1 from '../../assets/images/home1.png';
import Home2 from '../../assets/images/home2.png';
import Home3 from '../../assets/images/home3.png';
import { Link } from 'react-router-dom';
import FindPropertyProp from '../btn/FindPropertyProp';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import FeaturedProp from '../../components/btn/FeaturedProp';

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <>
      <div className=' mb-12' data-aos='fade-up'>
        <p className='text-primary text-center mb-10 text-xl'>
          FEATURED PROPERTIES
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div data-aos='fade-right'>
            <FeaturedProp
              image={Home1}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          </div>

          <div data-aos='fade-left'>
            <FeaturedProp
              image={Home2}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          </div>

          <div data-aos='fade-up-right'>
            <FeaturedProp
              image={Home3}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <FindPropertyProp value='View all Properties' />
        </div>
      </div>
    </>
  );
}

export default Features;
