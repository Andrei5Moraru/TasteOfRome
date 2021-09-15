const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: "#5271ff",
        },
        gray: {
          light: "#F3F4F6",
          dark: "#1F2937",
        },
      },
      screens: {
        print: { raw: "print" },
        // => @media  print { ... }
      },
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
    extend: {
      outline: ['active'],
    },
  },
  
  plugins: [
    require('tailwindcss-filters'),
  ],
};
