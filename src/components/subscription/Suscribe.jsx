import React from 'react';

function Suscribe() {
  return (
    <div className=' flex flex-col  items-center mb-12'>
      <h3 className='text-center font-bold text-3xl mb-2'>Get More Updates</h3>
      <p className='text-center mb-4'>
        Want to be one of the first few to get updated about our new property
        listings and discounts? <br /> Subscribe to our email list today.
      </p>
      <form action='#' className='  flex w-70 md:w-50  pl-4'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Input email address'
          className=' py-2  px-2 w-full border-solid border-2 border-border peer'
        />
        <input
          type='submit'
          value='Subscribe'
          className=' bg-primary py-2 px-4 lg:px-6 text-white border-none'
        />
      </form>
    </div>
  );
}

export default Suscribe;
