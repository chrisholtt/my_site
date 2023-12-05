/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backgroundImage: {
        backdrop: "url('/bg.png')",
      },
      fontSize: {
        1: "3rem"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Noto Sans', 'sans-serif']
      },
      colors: {
        primary: '#222222',
        secondary: {
          100: '#999999', // Add custom shades of secondary color
          200: '#555555',
        },
        greenCode: "#32CD32",
        bg: '#0d0d0d'
      },


    },
  },
  plugins: [],
}