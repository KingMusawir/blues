import React, { useEffect } from 'react';
import OfferImage from '../../assets/images/offer.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Offer() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div
      data-aos='fade-up'
      data-aos-anchor-placement='center-bottom'
      className='block lg:flex items-center gap-20 mb-20'
    >
      <img src={OfferImage} className='hidden lg:block max-w-3xl' alt='' />
      <div className=''>
        <h2 className=' font-bold text-2xl lg:text-5xl mb-6'>
          We offer only quality housing <br /> solutions
        </h2>
        <p className=' mb-6 text-lg lg:text-xl text-subheader'>
          Experience a refreshing and stress-free real estate journey by joining
          the Blues community. Whether you're a first-time homebuyer or an
          experienced investor, our platform is designed to cater to all your
          needs, fostering a sense of trust, reliability, and convenience.
        </p>
        <ul className=' grid grid-cols-2 gap-5'>
          <Listprop value='Extensive Property Listings' />
          <Listprop value='Exclusive Buyers Benefits' />
          <Listprop value='Trusted Real Estate Agents' />
          <Listprop value='Quality Service Providers' />
          <Listprop value='Seamless Rental Process' />
          <Listprop value='Ethical Practices ' />
          <Listprop value='Expert Selling Assistance' />
          <Listprop value='Transparent and Secure Transactions' />
        </ul>
      </div>
    </div>
  );
}
function Listprop(props) {
  return (
    <li className=' flex items-center text-lg text-subheader'>
      <span className=' h-4 w-4 bg-primary rounded-full inline-block mr-2'></span>
      {props.value}
    </li>
  );
}

export default Offer;
