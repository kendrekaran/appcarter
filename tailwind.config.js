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
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translate(73px, -1px) rotate(36deg)' },
          '40%': { transform: 'translate(141px, 72px) rotate(72deg)' },
          '50%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translate(83px, 122px) rotate(108deg)' },
          '80%': { transform: 'translate(-40px, 72px) rotate(144deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        }
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite'
      },
      minHeight: {
        '70vh': '70vh',
      },
      colors: {
        primary: '#007bff', // Adjust to match your brand color
        'primary-dark': '#0056b3',
      }
    }
  },
  plugins: []
}