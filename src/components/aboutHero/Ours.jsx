import React, { useEffect } from 'react';
import VisionImg from '../../assets/images/about-vision.png';
import StoryImg from '../../assets/images/about-story.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Ours() {
  useEffect(() => {
    AOS.init({
      duration: 100, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  return (
    <div className='overflow-hidden'>
      <div className=' grid grid-cols-1 lg:grid-cols-2 items-center mb-40 gap-4'>
        <div data-aos='fade-down-right' className=''>
          <h1 className='text-6xl font-medium mb-6'>Our Vision</h1>
          <p className='text-lg lg:text-xl font-medium leading-8 text-primarygraylight'>
            Get access to only the best selected tutors from all over the world.
            Learn from experienced experts hand picked just for you . Learning
            is a continuous process. Build a reputable brand by choosing us.Get
            access to only the best selected tutors from all over the world.
            Learn from experienced experts hand picked just for you . Learning
            is a continuous process. Build a reputable brand by choosing us.Get
            access to only the best selected tutors from all over the world.
            Learn from experienced experts hand picked just for you . Learning
            is a continuous process. Build a reputable brand by choosing us
          </p>
        </div>
        <div
          data-aos='fade-down-left'
          className=' flex lg:justify-end relative'
        >
          <img
            src={VisionImg}
            alt='Image representing Our Vision'
            className='max-w-full h-auto'
          />
          <div className=' absolute left-36 top-36 bg-primary px-9 py-4'>
            <p className=' text-secondary text-center text-xl font-semibold'>
              John Jude Felix
            </p>
            <p className=' text-secondary text-center'>CEO-BLue</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 items-center mb-52 gap-4'>
        <div data-aos='flip-up'>
          <img
            src={StoryImg}
            alt='Image representing Our Vision'
            className='max-w-full h-auto'
          />
        </div>

        <div data-aos='flip-down' className=''>
          <h1 className='text-6xl font-medium mb-6'>Our Story</h1>
          <p className='text-lg lg:text-xl font-medium leading-8 text-primarygraylight'>
            Get access to only the best selected tutors from all over the world.
            Learn from experienced experts hand picked just for you . Learning
            is a continuous process. Build a reputable brand by choosing us.Get
            access to only the best selected tutors from all over the world.
            Learn from experienced experts hand picked just for you . Learning
            is a continuous process. Build a reputable brand by choosing us.Get
            access to only the best selected tutors from all over the world.
            Learn from experienced experts hand picked just for you . Learning
            is a continuous process. Build a reputable brand by choosing us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ours;
