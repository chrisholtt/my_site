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
      colors: {
        primary: '#FF0000', // Add a custom primary color
        secondary: {
          100: '#E5E5E5', // Add custom shades of secondary color
          200: '#CCCCCC',
        },
      },

    },
  },
  plugins: [],
}