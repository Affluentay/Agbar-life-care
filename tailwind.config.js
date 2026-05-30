/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#3a5a27',
          dark: '#2a4018',
          light: '#4e7a35',
        },
        terra: {
          DEFAULT: '#c45e1e',
          light: '#e0854a',
        },
        ivory: '#faf7f0',
        cream: '#f2ebe0',
        sand: '#ddd0bb',
        bark: '#7a5c3a',
        muted: '#5a5448',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-down': 'fadeDown 0.8s ease forwards',
        'live-pulse': 'livePulse 1.5s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'float': 'float linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        livePulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(224,133,74,0.6)' },
          '50%': { opacity: '0.6', boxShadow: '0 0 0 8px rgba(224,133,74,0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.4' },
          '90%': { opacity: '0.2' },
          '100%': { transform: 'translateY(-20vh) rotate(720deg) translateX(60px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
