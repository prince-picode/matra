/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#417F56",
      "primary-80": "#679978",
      "primary-40": "#B3CCBB",
      white: "#ffffff",
      black: "#1D252D",
      danger: "#FD5154",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "45px",
        xl: "5rem",
        "2xl": "13rem",
      },
      margin: "0 auto",
    },
    fontFamily: {
      body: ["League Spartan"],
    },
  },
  plugins: [],
};
