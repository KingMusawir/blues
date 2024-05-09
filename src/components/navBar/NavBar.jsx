import React, { useState, useEffect, useRef } from 'react';
import LogoDark from '../../assets/logo/logo-dark.png';
import { Link } from 'react-router-dom';
import BtnProp from '../btn/BtnProp';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function NavBar() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  const navItems = [
    { text: 'Home', to: '/' },
    { text: 'Agents', to: '/about' },
    { text: 'Our Properties', to: '/properties' },
    { text: 'Contact Us', to: '/contactus' },
  ];
  const navItemsMobile = [
    { text: 'Home', to: '/' },
    { text: 'Agents', to: '/about' },
    { text: 'Our Properties', to: '/properties' },
    { text: 'Contact Us', to: '/contactus' },
    { text: 'Sign In', to: '/signin' },
    { text: 'Sign Up', to: '/signup' },
  ];
  const [showModal, setShowModal] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
    }
  }, [showModal]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      modalRef.current.style.height = `${window.innerHeight}px`;
    }
  }, [showModal]);

  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  };

  return (
    <div
      className={` ${
        isSticky
          ? 'sticky top-0 left-0 right-0 bg-white shadow-md z-50 p-2'
          : ''
      }`}
    >
      <div
        className=' my-8 flex justify-between items-center mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge xxlarge:max-w-screen-xxlarge'
        data-aos={isSticky ? 'fade-up' : ''}
      >
        <Link to='/' onClick={handleClick}>
          <img src={LogoDark} alt='' />
        </Link>

        <ul className=' hidden md:flex gap-10 lg:gap-20 '>
          {navItems.map((nav, index) => (
            <li key={index} className='relative'>
              <Link
                to={nav.to}
                className='block'
                style={{
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#1818A6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'transparent';
                }}
                onClick={handleClick}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className=' hidden lg:flex gap-4'>
          <BtnProp
            link='/signin'
            value='Sign In'
            bgColor='white'
            txtColor='blue-800'
            hoverBgColor='blue-700'
            hoverTxtColor='white'
          />
          <BtnProp
            link='/signup'
            value='Sign Up'
            bgColor='white'
            txtColor='primary'
            hoverBgColor='blue-700'
            hoverTxtColor='white'
          />
        </div>
        <GiHamburgerMenu
          size='40'
          color='blue'
          onClick={openModal}
          className=' block lg:hidden'
        />
        {showModal && (
          <div
            ref={modalRef}
            className='fixed top-0 left-0 w-full bg-white z-50 flex flex-col justify-center items-center'
            data-aos='flip-right'
          >
            <ul className='flex flex-col gap-12'>
              {navItemsMobile.map((nav, index) => (
                <li key={index} className='relative text-xl'>
                  <Link
                    to={nav.to}
                    className='block text-center'
                    onClick={() => {
                      closeModal();
                      handleClick();
                    }}
                  >
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
            <IoClose
              size='40'
              color='blue'
              onClick={closeModal}
              className='absolute top-4 right-4 cursor-pointer'
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
