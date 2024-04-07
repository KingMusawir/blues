import React, { useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import House from '../../assets/houseviewImg/contact/house.png';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div>
      <NavBar />
      <div className='grid grid-cols-2 mt-60 mb-60   mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge xxlarge:max-w-screen-xxlarge'>
        <div data-aos='fade-right'>
          <h2 className='font-medium text-[#1818A6] text-[1.5rem] mb-2'>
            CONTACT US
          </h2>
          <p className=' mb-6 text-sm text-[#00000082]'>
            Visit any of our outlet to see our agents for more information and
            for site viewing
          </p>
          <Address location='Head Office' />
          <Address location='Branch One' />
          <Address location='Branch Two' />
        </div>
        <div data-aos='fade-left'>
          <img src={House} alt='' />
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Address(props) {
  return (
    <p className=' flex  text-[1.2rem] gap-4'>
      <span className='  font-medium text-[#1818A6] text-[1.5rem]'>
        {props.location}:
      </span>
      <span className='  mt-1'>
        22, Joseph Adebayo street, Abule Oja, Yaba <br /> Lagos, Nigeria <br />
        affilestatesheadoffice@gmail.com <br /> +23470897654321
      </span>
    </p>
  );
}

export default ContactUs;
