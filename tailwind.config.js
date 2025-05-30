module.exports = {
  content: [
    './index.html',
    './testing.html',
    './css/main.css',
    './src/input.css',
  ], 
  theme: {
    extend: {
      colors: {
        dark1: 'var(--dark1)',
        dark2: 'var(--dark2)',
        light1: 'var(--light1)',
        light2: 'var(--light2)',
        green1: 'var(--green1)',
        green2: 'var(--green2)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};