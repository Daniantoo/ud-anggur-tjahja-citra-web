/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B21B6', // Dominant Purple #5B21B6 / #6B21A8
          dark: '#420093',
          light: '#7E22CE',
          container: '#6D28D9',
          fixed: '#EBDDFF',
        },
        secondary: {
          DEFAULT: '#712AE2',
          light: '#8B5CF6',
          fixed: '#EADDFF',
        },
        surface: {
          DEFAULT: '#FAF8FF',
          low: '#F2F3FF',
          container: '#EAEDFF',
          high: '#E2E7FF',
          highest: '#DAE2FD',
          card: '#FFFFFF',
        },
        'on-surface': {
          DEFAULT: '#131B2E',
          variant: '#4A4453',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 4px 20px -2px rgba(91, 33, 182, 0.25)',
        'purple-hover': '0 10px 25px -5px rgba(91, 33, 182, 0.18)',
      },
    },
  },
  plugins: [],
};
