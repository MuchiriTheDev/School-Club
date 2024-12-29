/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: `#0e8a2f`,
        darkGreen: `#0CCA9A`,
        lightGray: '#ebe8f3',
        lightGreen: `#098a52`,
        textGreen: '#07C972',
        darkBlue: '#374059',
        darkGray: '#484848',
        lightBlue: '#f2f6ff',
        textRed: '#ff4f4f',
        white: '#FFFFFF',
        lightRed: '#F95874',
        lightDarkBlue: '#707EA1',
        
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}