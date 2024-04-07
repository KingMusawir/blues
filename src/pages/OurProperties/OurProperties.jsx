import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/slider/Carousel';
import FeaturedProp from '../../components/btn/FeaturedProp';
import Home1 from '../../assets/images/home1.png';
import Home2 from '../../assets/images/home2.png';
import Home3 from '../../assets/images/home3.png';
import Home4 from '../../assets/images/home4.png';
import Home5 from '../../assets/images/home5.png';
import Home6 from '../../assets/images/home6.png';
import Home7 from '../../assets/images/home7.png';
import Home8 from '../../assets/images/home8.png';
import Home9 from '../../assets/images/home9.png';
import Home10 from '../../assets/images/home10.png';
import Home11 from '../../assets/images/home11.png';
import Home12 from '../../assets/images/home12.png';
import SearchBar from '../../components/searchBar/SearchBar';

function OurProperties() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className='mx-auto max-w-screen-tiny sm:max-w-screen-small md:max-w-screen-medium lg:max-w-screen-large xl:max-w-screen-xlarge xxlarge:max-w-screen-xxlarge overflow-hidden'>
        <Carousel
          header='Best Selling Properties'
          value1={
            <FeaturedProp
              image={Home1}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value2={
            <FeaturedProp
              image={Home2}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value3={
            <FeaturedProp
              image={Home3}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
        />
        <Carousel
          header='Rents'
          value1={
            <FeaturedProp
              image={Home4}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value2={
            <FeaturedProp
              image={Home5}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value3={
            <FeaturedProp
              image={Home6}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
        />
        <Carousel
          header='Lease'
          value1={
            <FeaturedProp
              image={Home7}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value2={
            <FeaturedProp
              image={Home8}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value3={
            <FeaturedProp
              image={Home9}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
        />
        <Carousel
          header='Best Selling Properties'
          value1={
            <FeaturedProp
              image={Home10}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value2={
            <FeaturedProp
              image={Home11}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
          value3={
            <FeaturedProp
              image={Home12}
              description='2 Bedroom flat apartment '
              value='300,000'
              location='Lekki - Ajah axis'
              developer='Joan Properties'
            />
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default OurProperties;
