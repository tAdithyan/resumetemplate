/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html',
    
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif',
      }
    },
  },
  plugins: [],
};
