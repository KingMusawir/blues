import React, { useEffect } from 'react';
import '../../App.css';
import TestimonialProps from '../btn/TestimonialProps';
import Customer from '../../assets/images/customer.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div className='bg-image py-10 mb-12' data-aos='fade-up'>
      <div className='mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge'>
        <h3 className='text-center font-semibold text-2xl mb-3'>
          Let Our Reviews do the Talking
        </h3>
        <p className='text-center font-normal text-sm mb-4'>
          See what our clients are saying about us
        </p>
        <div className=' flex flex-col md:flex-row gap-8'>
          <TestimonialProps
            comment='This is the platform you need if you ever want to venture i to the real estate business. Thanks to Blues for helping me in the process of selling my property.'
            img={Customer}
            cname='Jude henry'
            clocation='Lekki Phase 2'
          />
          <TestimonialProps
            comment='This is the platform you need if you ever want to venture i to the real estate business. Thanks to Blues for helping me in the process of selling my property.'
            img={Customer}
            cname='Jude henry'
            clocation='Lekki Phase 2'
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
