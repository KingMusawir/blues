import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Carousel(props) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease', // Easing function for animations
      once: false, // Whether animations should only happen once
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div data-aos='fade-up' className='  mb-28 '>
      <p className=' properties text-sm md:text-2xl mb-4 font-semibold'>
        {props.header}
      </p>
      <Slider {...settings}>
        <div>{props.value1}</div>
        <div>{props.value2}</div>
        <div>{props.value3}</div>
      </Slider>
    </div>
  );
}

export default Carousel;
