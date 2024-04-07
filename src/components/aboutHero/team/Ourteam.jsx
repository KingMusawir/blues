import React, { useState } from 'react';
import '../../../App.css';
import John from '../../../assets/ourteam/john.png';
import Stella from '../../../assets/ourteam/stella.png';
import Dave from '../../../assets/ourteam/dave.png';
import Favour from '../../../assets/ourteam/favour.png';
import Silers from '../../../assets/ourteam/silers.png';
import Kike from '../../../assets/ourteam/kike.png';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';

function Ourteam() {
  return (
    <div className=' mb-20'>
      <h3 className='text-6xl font-medium mb-6 text-center'>Our Team</h3>
      <p className='text-lg lg:text-xl font-medium leading-8 text-primarygraylight text-center mb-20'>
        Our team comprises of professionals from different branches and <br />
        specializations
      </p>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <TeamProp img={John} name='John Jude John' position='CEO/Founder' />
        <TeamProp
          img={Stella}
          name='Stella Adewuyi'
          position='Personal Assistant'
        />
        <TeamProp img={Dave} name='David Nwachukwu' position='CTO/Developer' />
        <TeamProp img={Favour} name='Favour Muhammed' position='HR/Manager' />
        <TeamProp
          img={Silers}
          name='Silers Adebiyi'
          position='Software Engineer'
        />
        <TeamProp img={Kike} name='Kikelomo Raji' position='UI/UX Designer' />
      </div>
    </div>
  );
}
function TeamProp(props) {
  const [isHovered, stateIsHovered] = useState(false);
  return (
    <div
      className='team realtive'
      onMouseEnter={() => stateIsHovered(true)}
      onMouseLeave={() => stateIsHovered(false)}
    >
      <img className='block w-[100%] h-[auto]' src={props.img} alt='' />
      {isHovered && (
        <div className='absolute top-0 left-0 w-full h-full text-white flex flex-col justify-center items-center z-50'>
          <p className=' font-semibold text-secondary text-center text-3xl mb-3'>
            {props.name}
          </p>
          <p className='text-center text-secondary text-xl mb-6'>
            {props.position}
          </p>
          <ul className=' list-none flex gap-4'>
            <Link to={props.fbto}>
              <SlSocialFacebook size='20' fill='#D1D1ED' />
            </Link>
            <Link to={props.twito}>
              <SlSocialTwitter size='20' fill='#D1D1ED' />
            </Link>
            <Link to={props.lkdto}>
              <SlSocialLinkedin size='20' fill='#D1D1ED' />
            </Link>
            <Link to={props.igto}>
              <FaInstagram size='20' fill='#D1D1ED' />
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Ourteam;
