const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '6xl': { min: '1920px' },
      // '5xl-6xl': { min: '1780px', 'max': '1920px' },
      '5xl': { min: '1780px' },
      // '4xl-5xl': { min: '1660px', 'max': '1780px' },
      '4xl': { min: '1660px' },
      // '4xl-5xl': { min: '1660px', 'max': '1780px' },
      // '4xl': { min: '1660px' },
      // '3xl-4xl': { min: '1534px', 'max': '1660px' },
      '3xl': { min: '1534px' },
      // '2xl-3xl': { min: '1440px', 'max': '1534px' },
      '2xl': { min: '1440px' },
      // 'xl-2xl': { min: '1280px', 'max': '1440px' },
      xl: { min: '1280px' },
      // 'lg-xl': { min: '1024px', 'max': '1280px' },
      lg: { min: '1024px' },
      // 'md-lg': { min: '768px', 'max': '1024px' },
      'wmax-md': { max: '768px' },
      md: { min: '768px' },
      // 'sm-md': { min: '640px', 'max': '768px' },
      sm: { min: '640px' },
      // 'ml-sm': { min: '425px', 'max': '640px' },
      ml: { min: '425px' },
      // 'mxs-ml': { min: '375px', 'max': '425px' },
      mxs: { min: '375px' },
      // 'mm-xs': {'min': '320px', 'max': '375px'},
      mm: { min: '320px' },
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      hottemp: ['hottemp'],
      multi: ['mutli'],
      multi2: ['mutli2'],
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      backgroundSize: {
       '100%': '100%',
       '150%': '150%',
       '200%': '200%',
       '250%': '250%',
      },
      backgroundPosition: {
      '-y-5': 'center -5rem',
      '-y-8': 'center -8rem',
      '-y-10': 'center -10rem',
       '-y-16': 'center -16rem',
       '-y-20': 'center -20rem',
       '-y-23': 'center -23rem',
       '-y-26': 'center -26rem',
       '-y-28': 'center -28rem',
       '-y-32': 'center -32rem',
       '-y-36': 'center -36rem',
       '-y-40': 'center -40rem',
       '-y-45': 'center -45rem',
       '-y-50': 'center -50rem',
       '-y-55': 'center -55rem',
       '-y-60': 'center -60rem',
      },
      screens: {
        'wmm-wmxs': {'raw': '(min-width: 320px) and (max-width: 375px)'},
        'wmm-wml': {'raw': '(min-width: 320px) and (max-width: 425px)'},
        'wmxs-ml': {'raw': '(min-width: 375px) and (max-width: 425px)'},
        'wml-wsm': {'raw': '(min-width: 425px) and (max-width: 639px)'},
        'wsm-wmd': {'raw': '(min-width: 640px) and (max-width: 767px)'},
        'wmd-wlg': {'raw': '(min-width: 768px) and (max-width: 1023px)'},
        'wlg-xl': {'raw': '(min-width: 1024px) and (max-width: 1279px)'},
        'wxl-2xl': {'raw': '(min-width: 1280px) and (max-width: 1534px)'},

        'hsm': {'raw': '(min-height: 640px) and (max-width: 767px)'},
      },
      spacing: {
        '22.5': '5.5rem',
        '104': '27rem',
        '124': '30rem',
        '152': '33rem',
        '170': '36rem',
        '182': '38rem',
        '190': '42rem',
        '200': '46rem',
        '212': '50rem',
        'fit': 'fit-content',
        'masterclassMobile': '965px',
        'masterclass': '2688px',
        'priceBgSpacing': '1250px',
        'priceBgSpacing2': '1618px',
        'screen-25': '125vh',
        'screen-30': '130vh',
        'screen-35': '135vh',
        'screen-235': '235vh'
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

      backgroundImage: () => ({
        presentationBg: "url('/img/homePage/presentationBg.png')",
        priceBg: "url('/img/coursesPage/priceBg.png')",
        priceMobileBg: "url('/img/coursesPage/priceMobileBg.png')",
        masterclassMobileBg: "url('/img/coursesPage/masterclassMobileBg.png')",
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
