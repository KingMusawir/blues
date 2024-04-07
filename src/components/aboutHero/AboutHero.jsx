import React, { useEffect } from 'react';
import AboutHimage from '../../assets/images/about-hero.png';
import FindPropertyProp from '../btn/FindPropertyProp';
import Detailsprop from '../btn/Detailsprop';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <>
      <div
        data-aos='fade-up'
        className='grid grid-cols-1 lg:grid-cols-5 gap-4 mb-36 items-center '
      >
        <div className='col-span-2'>
          <p className=' text-primary mb-6 text-base'>ABOUT US</p>
          <h1 className=' text-6xl font-medium mb-6'>
            We are the best <br /> among the rest
          </h1>
          <p className=' mb-8 text-lg lg:text-xl font-medium leading-8 text-primarygraylight'>
            We are your No.1 stop for impeccable deals such as lands, houses,
            rents, lease and everything real estate. Affilestate is built to
            help you solve all your real estate problem from getting reasonable
            prices for your properties to buying affordable and secured
            properties.
          </p>
          <FindPropertyProp value='Find Property' />
        </div>
        <div data-aos='fade-left' className=' col-span-3 relative'>
          <img src={AboutHimage} alt='A House Image' />
          <div className='hidden md:inline-block absolute -bottom-12 right-48'>
            <div className=' flex gap-10 bg-primary p-6 pt-10'>
              <Detailsprop number='300' value='Property' color='secondary' />
              <Detailsprop
                number='20k'
                value='Satisfied Customers'
                color='secondary'
              />
              <Detailsprop number='50' value='Agents' color='secondary' />
            </div>
          </div>
          <div className='inline-block md:hidden '>
            <div className=' flex gap-10 bg-primary p-1 text-sm '>
              <Detailsprop number='300' value='Property' color='secondary' />
              <Detailsprop
                number='20k'
                value='Satisfied Customers'
                color='secondary'
              />
              <Detailsprop number='50' value='Agents' color='secondary' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
