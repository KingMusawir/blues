import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

function Inputprop({ type, icon, ...rest }) {
  const Icon = encodeURIComponent(renderToStaticMarkup(icon));
  const inputClassName =
    type === 'submit'
      ? ' bg-[#1818A6] text-white rounded cursor-pointer  py-2 px-5'
      : ' border border-[gray] focus:outline-none py-2 px-10  ';
  return (
    <input
      type={type}
      className={inputClassName}
      {...rest}
      style={{
        backgroundImage: `url("data:image/svg+xml,${Icon}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px center',
      }}
    />
  );
}

export default Inputprop;
