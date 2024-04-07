import React from 'react';
import { Link } from 'react-router-dom';

function FindPropertyProp(props) {
  return (
    <div className=' inline-block overflow-hidden py-4 px-10  bg-primary text-white  hover:bg-white hover:text-primary hover:border[2] hover:border-primary transition duration-500 ease-in-out'>
      <Link className=' gap-2  text-xl'>{props.value} &#8594;</Link>
    </div>
  );
}

export default FindPropertyProp;
