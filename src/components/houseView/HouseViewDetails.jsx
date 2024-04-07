import React, { useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';
import House1 from '../../assets/houseviewImg/home.png';
import '../../App.css';
import NavBar from '../navBar/NavBar';
import { Link } from 'react-router-dom';
import { LuPhone } from 'react-icons/lu';
import Other1 from '../../assets/houseviewImg/other1.png';
import Other2 from '../../assets/houseviewImg/other2.png';
import Other3 from '../../assets/houseviewImg/other3.png';
import Other4 from '../../assets/houseviewImg/other4.png';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function HouseViewDetails() {
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
      <div data-aos='flip-up' className=' w-[100%]'>
        <img src={House1} alt='' className=' mb-4 w-[100%]' />
      </div>

      <div className='  mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge xxlarge:max-w-screen-xxlarge'>
        <div className='flex justify-between mb-12'>
          <div>
            <h2 className=' font-semibold text-[1.5rem] flex items-center gap-4'>
              3 Bedroom Apartment{' '}
              <span className=' font-normal text-[10px] bg-[#D1D1ED] text-[#1818A6] px-2 py-1'>
                For Sale
              </span>
            </h2>
            <p className=' font-normal mb-3'>
              Description: A 3 bedroom fully furnished apartment for sale.{' '}
              <br /> Located in the heart of Lagos Island , the hub of business
            </p>
            <p className='text-[#454545] text-xs mb-4'>
              Posted by Afriglobal estates
            </p>
            <p className=' flex items-center gap-2 text-[#1818A6] mb-4'>
              <MdLocationOn size='20' color='#1818A6' /> Lekki, Ajah
            </p>
            <div className=' flex gap-10'>
              <Interest value='I found this useful' />
              <Interest value='This is within my budget' />
              <Interest value='This is beyond my budget' />
              <Interest value='I love this location' />
            </div>
          </div>
          <div>
            <p className='font-semibold text-[1.5rem] mb-8'>N 300,000.00</p>
            <div className=' inline-block'>
              <Link className=' flex items-center justify-center gap-2 bg-[#1818A6] text-white p-3'>
                <LuPhone /> <span>CONTACT AGENT</span>
              </Link>
            </div>
          </div>
        </div>
        <div className=' mb-20'>
          <p className=' font-semibold mb-6'>Other images of the apartment</p>
          <div data-aos='fade-up-left' className=' flex gap-3'>
            <img src={Other1} alt='' className=' w-80' />
            <img src={Other2} alt='' className=' w-80' />
            <img src={Other3} alt='' className=' w-80' />
            <img src={Other4} alt='' className=' w-80' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Interest(props) {
  return (
    <button className=' border border-[#1818A6] p-2 text-[#1818A6] text-xs hover:bg-[#1818A6] hover:text-white transition-all'>
      {props.value}
    </button>
  );
}

export default HouseViewDetails;
