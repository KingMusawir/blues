import React from 'react';
import { Form } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { renderToStaticMarkup } from 'react-dom/server';

const locations = [
  'Locations',
  'Lekki',
  'Ajah',
  'Yaba',
  'Egbeda',
  'Bariga',
  'ibafo',
  'Sangotedo',
  'osogbo',
  'ilorin',
];
const priceRange = [
  'Price Range',
  '1,000,000',
  '2,000,000',
  '4,000,000',
  '4,000,000',
  '6,000,000',
  '10,000,000',
  '15,000,000',
  '20,000,000',
  '25,000,000',
];
const propertyType = [
  'Property Type',
  'Apartment',
  'Condo',
  'Residential',
  'Land',
  'Detached House',
  'Bungalow',
  'Multi-Family Homes',
  'Town Home',
];

function SearchBar() {
  const serchIcon = encodeURIComponent(
    renderToStaticMarkup(<HiOutlineSearch color='gray' />)
  );

  function Select(props) {
    return (
      <select className='p-3 bg-white bg-opacity-75 w-[5rem] lg:w-[15rem] border border-gray-300 focus:outline-none'>
        {props.values.map((value, index) => (
          <option value='value' key={index}>
            {value}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className='mx-auto max-w-screen-tiny md:max-w-screen-medium lg:max-w-screen-medium xl:max-w-screen-large xxlarge:max-w-screen-xlarge '>
      <form className=' lg:mx-auto mb-12 flex   gap-2'>
        <input
          type='search'
          placeholder='Search'
          style={{
            backgroundImage: `url("data:image/svg+xml,${serchIcon}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '22rem center',
          }}
          className='p-3 bg-white bg-opacity-75 w-[10rem] sm:w-[25rem] border border-gray-300 focus:outline-none'
        />
        <Select values={locations} />
        <Select values={priceRange} />
        <Select values={propertyType} />
      </form>
    </div>
  );
}

export default SearchBar;
