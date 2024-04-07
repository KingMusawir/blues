import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedProp(props) {
  return (
    <div className=' bg-secondary inline-block'>
      <div>
        <img src={props.image} alt='House Image' />
      </div>

      <div className='p-5'>
        <p className='text-primarygraylight text-sm mb-2'>Sale</p>

        <div className=' flex justify-between items-center font-semibold text-lg mb-2'>
          <h2>{props.description}</h2>
          <p className=' text-primary'>N {props.value}</p>
        </div>
        <div className=' flex justify-between items-center'>
          <div>
            <h3 className=' text-primarygray'>{props.location}</h3>
            <p className='text-primarygraylight text-sm'>{props.developer}</p>
          </div>
          <Link to='/viewhouse' className=' bg-primary text-white px-4 py-2'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProp;
