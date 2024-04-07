import React from 'react';
import { Link, Router } from 'react-router-dom';

function BtnProp(props) {
  // Define the default background color and text color
  let bgColor = 'bg-white';
  let textColor = 'text-blue-800';

  // Change background color and text color for 'Sign Up' button
  if (props.value === 'Sign Up') {
    bgColor = 'bg-blue-800';
    textColor = 'text-white';
  }

  return (
    <Link
      to={props.link}
      className={`border-solid border-2 rounded-md border-blue-800 px-6 py-2 ${bgColor} ${textColor}`}
      style={{
        // Define hover styles dynamically
        [`&:hover`]: {
          backgroundColor: `var(--hover-bg-color, ${props.bgColor})`,
          color: `var(--hover-text-color, ${props.txtColor})`,
        },
      }}
    >
      {props.value}
    </Link>
  );
}

export default BtnProp;
