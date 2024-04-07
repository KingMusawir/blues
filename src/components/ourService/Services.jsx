import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { FiEye } from 'react-icons/fi';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { LiaPeopleCarrySolid } from 'react-icons/lia';
import { IoPeopleSharp } from 'react-icons/io5';
import { RiCustomerService2Fill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set isMobile state
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div data-aos='fade-up' className=' mb-20'>
        <p className='text-primary text-center mb-10 text-xl'>OUR SERVICES</p>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-28 p-4'>
          <div className=''>
            <Service
              icon={<ImSearch size='40' color='#1818A6' />}
              header='Property Search'
              subheading='Browse through  our extensive database of property listings to find homes, apartments, commercial spaces, or investment properties that match your criteria.'
              isMobile={isMobile}
            />
          </div>
          <div className=''>
            <Service
              icon={<FiEye size='40' color='#1818A6' />}
              header='In-Person Property Viewings'
              subheading='Arrange and attend in-person property viewings with our real estate agents to see the shortlisted properties in person and assess them firsthand.'
              isMobile={isMobile}
            />
          </div>
          <div className=''>
            <Service
              icon={<BiMoneyWithdraw size='40' color='#1818A6' />}
              header='In-Person Property Viewings'
              isMobile={isMobile}
              subheading='Arrange and attend in-person property viewings with our real estate agents to see the shortlisted properties in person and assess them firsthand.'
            />
          </div>
          <div className=''>
            <Service
              icon={<LiaPeopleCarrySolid size='40' color='#1818A6' />}
              header='In-Person Property Viewings'
              isMobile={isMobile}
              subheading='Arrange and attend in-person property viewings with our real estate agents to see the shortlisted properties in person and assess them firsthand.'
            />
          </div>
          <div className=''>
            <Service
              icon={<IoPeopleSharp size='40' color='#1818A6' />}
              header='In-Person Property Viewings'
              isMobile={isMobile}
              subheading='Arrange and attend in-person property viewings with our real estate agents to see the shortlisted properties in person and assess them firsthand.'
            />
          </div>
          <div className=''>
            <Service
              icon={<RiCustomerService2Fill size='40' color='#1818A6' />}
              header='In-Person Property Viewings'
              isMobile={isMobile}
              subheading='Arrange and attend in-person property viewings with our real estate agents to see the shortlisted properties in person and assess them firsthand.'
            />
          </div>
        </div>
      </div>
    </>
  );
}
function Service(props) {
  return (
    <>
      <div className={`mb-6 ${props.isMobile ? 'data-aos="zoom-in"' : ''}`}>
        <div className='bg-secondary p-3 inline-block'>{props.icon}</div>
      </div>
      <div>
        <h3 className=' font-bold text-2xl mb-6'>{props.header}</h3>
        <p className='text-xl text-subheader'>{props.subheading}</p>
      </div>
    </>
  );
}

export default Services;
