import React, { useEffect } from 'react';
import Inputprop from '../../components/input/Inputprop';
import Formheader from '../../components/input/Formheader';
import { Link } from 'react-router-dom';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlinePhone } from 'react-icons/md';
import { IoPersonAddOutline } from 'react-icons/io5';
import { IoMdPersonAdd } from 'react-icons/io';
import OnboardSide from '../../components/onbaordSide/OnboardSide';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Signup() {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div>
      <div className='mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge xxlarge:max-w-screen-xxlarge'>
        <div
          data-aos='zoom-in'
          className='block sm:flex md:gap-10 shadow-xl md:shadow-none lg:shadow-2xl lg:mt-40 mt-12 md:mt-20  mb-20 items-center justify-center'
        >
          <div className=' login flex flex-col items-center  p-[4rem] md:p-[10rem] shadow-xl md:shadow-none lg:shadow-2xl w-[100%]  '>
            <Formheader onboard={`Signup to get started..`} />
            <form className=' flex flex-col gap-5 '>
              <Inputprop
                type='Text'
                placeholder='Frist Name'
                icon={<IoMdPersonAdd color='#686868' size='20' />}
              />
              <Inputprop
                type='Text'
                placeholder='Last Name'
                icon={<IoPersonAddOutline color='#686868' size='20' />}
              />
              <Inputprop
                type='Tel'
                placeholder='Phone Number'
                icon={<MdOutlinePhone color='#686868' size='20' />}
              />

              <Inputprop
                type='email'
                placeholder='Email'
                icon={<MdOutlineAlternateEmail color='#686868' size='20' />}
              />
              <Inputprop
                type='password'
                placeholder='Password'
                icon={<RiLockPasswordLine color='#686868' size='20' />}
              />
              <Link className=' self-end font-medium text-[15px]'>
                Forgot Password?
              </Link>
              <Inputprop type='submit' value='Login' />
            </form>
          </div>
          <div className=' hidden lg:block'>
            <OnboardSide />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
