import React from 'react';

function Detailsprop(props) {
  return (
    <div>
      <h1
        className={` font-bold text-5xl text-center mb-4 text-${props.color}`}
      >
        {props.number + '+'}
      </h1>
      <p className={`text-center text-${props.color} text-xs md:text-lg`}>
        {props.value}
      </p>
    </div>
  );
}

export default Detailsprop;
