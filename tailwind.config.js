/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        backdrop: "url('/bg.png')",
      },
      fontSize: {
        1: "3rem"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Noto Sans', 'sans-serif']
      },
      colors: {
        primary: '#222222', // Add a custom primary color
        secondary: {
          100: '#999999', // Add custom shades of secondary color
          200: '#555555',
        },
        bg: '#0d0d0d'
      },

    },
  },
  plugins: [],
}