/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "1440px",
    },
    extend: {
      colors: {
        red: {
          desaturated: "hsl(0, 36%, 70%)",
          soft: "hsl(0, 93%, 68%)",
          darkGrayish: "hsl(0, 6%, 24%)",
        },
      },
      backgroundImage: {
        "soft-pink-gradient":
          "linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 100%, 98%)) no-repeat",
        "darker-pink-gradient":
          "linear-gradient(135deg,hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
