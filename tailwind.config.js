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
      fontSize: {
        1: "3rem"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Noto Sans', 'sans-serif']
      },
      colors: {
        primary: '#E5E4E2', // Add a custom primary color
        secondary: {
          100: '#D3D3D3', // Add custom shades of secondary color
          200: '#CCCCCC',
        },
        bg: '#0d0d0d'
      },

    },
  },
  plugins: [],
}