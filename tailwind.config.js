/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  // other config...
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(1000%)' }
        }
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite'
      }
    }
  },
  plugins: []
}