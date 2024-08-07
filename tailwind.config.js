/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/images/hero.png')",
      },
      screens: {
        lgm: { min: '969px' },
        // => @media (min-width: 969px) { ... }

        mdm: { min: '769px' },
        // => @media (min-width: 767px) { ... }

        xsm: { min: '540px' },
        // => @media (min-width: 540px) { ... }

        xxll: {max: '1077px'},

        xlll: { max: '1200px' },
        // => @media (max-width: 1200px) { ... }

        xll: { max: '1020px' },
        // => @media (max-width: 1020px) { ... }
        
        lg: { max: '969px' },
        // => @media (max-width: 969px) { ... }

        md: { max: '769px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }

        xs: { max: '540px' },
        // => @media (max-width: 540px) { ... }

        lexs: { max: '440px' },
        // => @media (max-width: 440px) { ... }
      },
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"],
        "Ubuntu_Mono": ["Ubuntu Mono", "monospace"],
      }
    },
  },
  plugins: [],
};
