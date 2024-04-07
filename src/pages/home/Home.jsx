import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Hero from '../../components/hero/Hero';
import Offer from '../../components/offer/Offer';
import Services from '../../components/ourService/Services';
import Features from '../../components/featured/Features';
import Testimonial from '../../components/testimonials/Testimonial';
import Suscribe from '../../components/subscription/Suscribe';
import '../../App.css';
import Footer from '../../components/footer/Footer';
function Home() {
  return (
    <div>
      <NavBar />
      <div className='mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge xxlarge:max-w-screen-xxlarge overflow-hidden '>
        <Hero />

        <Offer />

        <Services />

        <Features />
      </div>

      <Testimonial />

      <Suscribe />

      <Footer />
    </div>
  );
}

export default Home;
