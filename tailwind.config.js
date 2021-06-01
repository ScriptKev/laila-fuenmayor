const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { min: '1280px' },
      lg: { min: '1024px' },
      md: { min: '768px' },
      sm: { min: '640px' },
      ml: { min: '425px' },
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      hottemp: ['hottemp', ...defaultTheme.fontFamily.sans],
      multi: ['mutli', ...defaultTheme.fontFamily.sans],
      multi2: ['mutli2', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        '22.5': '5.5rem',
        '104': '27rem',
        '124': '30rem',
        '152': '33rem',
        '170': '36rem',
        'screen-25': '125vh',
        'screen-30': '130vh',
        'screen-35': '135vh',
        'screen-235': '235vh'
      },
      gridTemplateColumns: {
       'galleryLayout': 'minmax(750px, 1fr) 1fr',
      },
      zIndex: {
        '-10': '-10',
      },
      colors: {
        primary: {
          100: '#c2b1c4',
          300: '#856288' 
        },
        secondary: {
          300 : '#c93742'
        }
      },

      backgroundImage: (theme) => ({
        presentationBg: "url('/img/homePage/presentationBg.png')",
        priceBg: "url('/img/coursesPage/priceBg.png')",
        masterclassBg: "url('/img/coursesPage/masterclassBg.png')",
        warrantyBg: "url('/img/coursesPage/warrantyBg.png')",
        CTABg: "url('/img/coursesPage/CTABg.png')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundPosition: ['hover', 'focus'],
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
