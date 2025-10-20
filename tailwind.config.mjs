/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        optima: ['Optima', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'optima-bold': ['Optima Bold', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'helvetica-medium': ['Helvetica Medium', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        gotham: ['Gotham', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'gotham-medium': ['Gotham Medium', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'gotham-bold': ['Gotham Bold', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'gotham-book': ['Gotham Book', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
