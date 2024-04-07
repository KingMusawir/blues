import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import AboutHero from '../../components/aboutHero/AboutHero';
import Ours from '../../components/aboutHero/Ours';
import Testimonial from '../../components/testimonials/Testimonial';
import Suscribe from '../../components/subscription/Suscribe';
import Footer from '../../components/footer/Footer';
import Ourteam from '../../components/aboutHero/team/Ourteam';

function About() {
  return (
    <div>
      <div className=' '>
        <div className='mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge xxlarge:max-w-screen-xxlarge overflow-hidden'>
          <AboutHero />
          <Ours />
          <Ourteam />
        </div>
        <Testimonial />

        <Suscribe />
        <Footer />
      </div>
    </div>
  );
}

export default About;
