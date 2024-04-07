import React from 'react';
import LogoLight from '../../assets/logo/logoLight.png';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import '../../App.css';
import { Link } from 'react-router-dom';

function Footer() {
  const item1 = [
    { content: 'About', special: true },
    { content: 'About Us', special: false },
    { content: 'Features', special: false },
    { content: 'News & Blog', special: false },
  ];
  const item2 = [
    { content: 'Home', special: true },
    { content: 'Rent', special: false },
    { content: 'Buy', special: false },
    { content: 'Sell', special: false },
    { content: 'Agent', special: false },
  ];
  const item3 = [
    { content: 'Support', special: true },
    { content: 'FAQs', special: false },
    { content: 'Support  Center', special: false },
    { content: 'Contact Us', special: false },
  ];
  const item4 = [
    { content: 'Support', special: true },
    { content: 'FAQs', special: false },
    { content: 'Support  Center', special: false },
    { content: 'Contact Us', special: false },
  ];

  const isMobile = window.innerWidth <= 768;
  return (
    <div className='bg-footer footer text-[10px] lg:text-[20px] p-3'>
      <footer className='mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge py-8 flex gap-4 justify-between '>
        <div className=' flex flex-col gap-24'>
          <div>
            <img src={LogoLight} alt='' />
          </div>
          <div>
            <div className='socials flex gap-4 mb-4'>
              {isMobile ? (
                <>
                  <FaInstagram className='icon-sm' fill='#D1D1ED' />
                  <SlSocialFacebook className='icon-sm' fill='#D1D1ED' />
                  <SlSocialTwitter className='icon-sm' fill='#D1D1ED' />
                  <SlSocialLinkedin className='icon-sm' fill='#D1D1ED' />
                </>
              ) : (
                <>
                  <FaInstagram className='icon-lg' fill='#D1D1ED' />
                  <SlSocialFacebook className='icon-lg' fill='#D1D1ED' />
                  <SlSocialTwitter className='icon-lg' fill='#D1D1ED' />
                  <SlSocialLinkedin className='icon-lg' fill='#D1D1ED' />
                </>
              )}
            </div>
            <p className=' text-secondary'>Copyright 2024 blues.com</p>
          </div>
        </div>
        <FooterList items={item1} />
        <FooterList items={item2} />
        <FooterList items={item3} />
        <FooterList items={item4} />
      </footer>
    </div>
  );
}
function FooterList({ items }) {
  return (
    <div>
      <ul className=' list-none flex flex-col gap-4 '>
        {items.map((item, index) => (
          <Link
            key={index}
            className={`  ${
              index === 0
                ? ' font-bold text-white'
                : 'font-light text-secondary'
            }`}
          >
            {item.content}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
