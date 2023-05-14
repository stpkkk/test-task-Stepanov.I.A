/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    // container: {
    //   padding: {
    //     DEFAULT: '60px',
    //   },
    // },
    screens: {
      extraSm: { max: '380px' },
      sm: { max: '900px' },
    },
    variants: {
      fill: ['hover', 'focus'],
    },
    extend: {
      colors: {
        background: '#E5E5E5',
        gray: '#35312D',
        potato: '#ECBA46',
        lightGray: '#343434',
        darkGray: '#201E1C',
        buttonGray: '#404040',
        lightYellow: '#FFD573',
      },
      backgroundImage: {
        bannerPotatoes: "url('./assets/images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
