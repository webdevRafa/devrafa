/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'sky-blue': '#729cdf',
      'gray': '#465670',
      'white': '#ffffff',
      'dark-blue': '#00235b',
      'red-orange': '#5b0023',
      'dark-green': '#373737',
      'green': '#18ffa6',
      'soft-green': '#e2fff4'
    },
    extend: {},
  },
  plugins: [],
}

