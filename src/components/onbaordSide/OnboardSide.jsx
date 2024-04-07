import React from 'react';
import OnboardSlider from './OnboardSlider';

function OnboardSide() {
  return (
    <div className=' flex flex-col items-center justify-center p-10'>
      <div>
        <h2 className=' font-semibold text-2xl text-left mb-4'>
          Rent, Buy and Sell your properties with{' '}
          <span className='text-[#1818A6] text-3xl'>BLUES</span>
        </h2>
        <p className=' text-[#878686]'>
          Finding the perfect home or property is now easier than ever with
          Blues. We are your one-stop platform that connects home renters,
          buyers, sellers, agents, and service providers, creating a cohesive
          and efficient real estate ecosystem.
        </p>
      </div>
      <OnboardSlider />
    </div>
  );
}

export default OnboardSide;
