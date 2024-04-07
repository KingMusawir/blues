import React from 'react';

function TestimonialProps(props) {
  return (
    <div className=' p-10 border-solid border-2 border-secondary'>
      <p>{props.comment}</p>
      <div className='flex items-center gap-4 mt-4'>
        <img
          src={props.img}
          alt="Customer's Image"
          className=' w-10 h-10 rounded-full object-cover'
        />
        <div>
          <p className=' font-medium'>{props.cname}</p>
          <p className=' text-xs text-primarygraylight'>{props.clocation}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialProps;
