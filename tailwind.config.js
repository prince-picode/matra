/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      'primary': '#417F56',
      'primary-80':'#679978',
      'primary-40':'#B3CCBB',
      'white': '#ffffff',
      'black': '#1D252D',
      'danger': '#FD5154',
    },
    fontFamily:{
      body: ['League Spartan']
    },
    extend: {},
   
  },
  plugins: [],
}

