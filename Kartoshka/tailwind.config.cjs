/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: 'Montserrat',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: { max: '640px' },
    },
    extend: {
      colors: {
        background: '#E5E5E',
        gray: '#35312D',
        potato: '#ECBA46',
        headerSecond: '#343434',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
