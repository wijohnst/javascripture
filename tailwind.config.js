/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      // => @media (min-width: 360px) { large-mobile }

      md: "428px",
      // => @media (min-width: 768px) { small-tablet }

      lg: "744px",
      // => @media (min-width: 1024px) { large-tablet }

      xl: "1024px",
      // => @media (min-width: 1280px) { small-laptop }

      xxl: "1512px",
      // => @media (min-width: 1536px) { large-laptop }
    },
    extend: {
      colors: {
        blue: "#3F379F",
      },
    },
  },
  plugins: [],
};
