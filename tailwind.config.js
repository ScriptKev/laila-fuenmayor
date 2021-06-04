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
      '2xl': { min: '1535px' },
      xl: { min: '1280px' },
      lg: { min: '1024px' },
      md: { min: '768px' },
      sm: { min: '640px' },
      ml: { min: '425px' },
      mxs: { min: '375px' },
      mm: { min: '320px' },
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      hottemp: ['hottemp', ...defaultTheme.fontFamily.sans],
      multi: ['mutli', ...defaultTheme.fontFamily.sans],
      multi2: ['mutli2', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',
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
      },
      screens: {
        'wmax-mm': {'raw': '(max-width: 320px)'},
        'wmax-xs': {'raw': '(max-width: 375px)'},
        'wmax-ml': {'raw': '(max-width: 425px)'},
        'wmax-sm': {'raw': '(max-width: 640px)'},
        'wmax-md': {'raw': '(max-width: 768px)'},
        'wmax-lg': {'raw': '(max-width: 1024px)'},

        'wmm-wmxs': {'raw': '(min-width: 320px) and (max-width: 375px)'},
        'wmm-wml': {'raw': '(min-width: 320px) and (max-width: 425px)'},
        'wmxs-ml': {'raw': '(min-width: 375px) and (max-width: 425px)'},
        'wml-wsm': {'raw': '(min-width: 425px) and (max-width: 639px)'},
        'wsm-wmd': {'raw': '(min-width: 640px) and (max-width: 767px)'},
        'wmd-wlg': {'raw': '(min-width: 768px) and (max-width: 1023px)'},
        'wlg-xl': {'raw': '(min-width: 1024px) and (max-width: 1279px)'},
        'wxl-2xl': {'raw': '(min-width: 1280px) and (max-width: 1534px)'},

        'hxs': {'raw': '(min-height: 565px) and (max-width: 767px)'},
        'hsm': {'raw': '(min-height: 640px) and (max-width: 767px)'},
        'hmd': {'raw': '(min-height: 731px) and (max-width: 767px)'},
        'hlg': {'raw': '(min-height: 1024px) and (max-width: 767px)'},
        'hxl': {'raw': '(min-height: 1366px) and (max-width: 767px)'},
      },
      spacing: {
        '22.5': '5.5rem',
        '104': '27rem',
        '124': '30rem',
        '152': '33rem',
        '170': '36rem',
        'masterclassMobile': '965px',
        'masterclass': '2688px',
        'priceBgSpacing': '1250px',
        'priceBgSpacing2': '1618px',
        'screen-25': '125vh',
        'screen-30': '130vh',
        'screen-35': '135vh',
        'screen-235': '235vh',
        'screen-240': '240vh',
        'screen-245': '245vh',
        'screen-250': '250vh',
        'screen-255': '255vh',
        'screen-260': '260vh',
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
