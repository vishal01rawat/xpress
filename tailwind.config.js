/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      // 'base': '1rem',
      // 'lg': '1.125rem',
      // 'xl': '1.25rem',
      // '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '4rem',
    },
    extend: {
      colors: {
        customGreen: '#6fc140',
        customGreenfade: '#80B953',
        customBlack: '#0D0E12',
        customBlackFade: '#15181E',

        
      },
    },
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
}

