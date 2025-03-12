/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gold': '#d4af37',
        'deep-blue': '#0a192f',
        'light-blue': '#64ffda',
        'marble': '#f5f5f5',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1608731294842-f0c9f6f4b6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      },
    },
  },
  plugins: [],
};