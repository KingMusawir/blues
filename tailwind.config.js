/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tiny: '380px',
        small: '400px',
        medium: '750px',
        large: '900px',
        xlarge: '1200px',
        xxlarge: '1500px',
      },
      colors: {
        primary: '#1818A6',
        secondary: '#D1D1ED',
        primarygray: '#444444',
        primarygraylight: '#696969',
        border: '#A3A3A3',
        footer: '#050521',
        subheader: '#292929',
      },
      width: {
        70: '70%',
        80: '80%',
        50: '50%',
      },
    },
  },
  plugins: [],
};
