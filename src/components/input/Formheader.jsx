import React from 'react';

function Formheader(props) {
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className=' bg-black w-20 h-20 rounded-full'></div>
      <p className=' text-xl font-bold mt-2'>
        Welcome to <span className=' text-[#1818A6] text-3xl'>BLUES</span>
      </p>
      <p className=' text-[#686868] mt-2 mb-10'>{props.onboard}</p>
    </div>
  );
}

export default Formheader;
