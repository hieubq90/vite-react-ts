/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
      inter: ['Inter', 'sans-serif'],
      noto: ['Noto Sans JP', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'light': '#ffffff',
        'dark-600': '#2e2e2e',
        'dark-500': '#414141', // text
        'gray-400': '#777777',
        'primary-300': '#ffcc21',
        'primary-400': '#ff963c',
        'primary-500': '#ea6c00',
        'secondary': '#8fe9d0',
        'primary-gradient': '#ff77e9',
      },
    },
  },
  plugins: [],
};
