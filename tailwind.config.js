/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '10%': { opacity: 0.1 },
          '20%': { opacity: 0.2 },
          '30%': { opacity: 0.3 },
          '40%': { opacity: 0.4 },
          '50%': { opacity: 0.5 },
          '60%': { opacity: 0.6 },
          '70%': { opacity: 0.7 },
          '80%': { opacity: 0.8 },
          '90%': { opacity: 0.9 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.4, 0, 1, 1)',
        'fade-in-slower': 'fadeIn 2.5s cubic-bezier(0.4, 0, 1, 1)',
      }, 
      backgroundImage: {
      }
    }
  },
  plugins: [],
}
