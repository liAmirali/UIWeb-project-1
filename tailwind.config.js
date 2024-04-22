/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "objects-group": "url('/images/bg/objects-group-bg.png')",
      },
      colors: {
        primary: {
          100: "#BCD2EE",
          200: "#88ACD9",
          300: "#5D8DCC",
          400: "#336EB9",
          500: "#1C4E8E",
          600: "#13427D",
          700: "#0B3265",
          800: "#082852",
          900: "#052042",
        },
        secondary: {
          500: "#A3D139",
        },
        tertiary: {
          500: "#B21589",
        },
        dark: {
          500: "#101316",
        },
        gray: {
          500: "#A5A9AC",
        },
        light: {
          500: "#D9E1E1",
        },
      },
    },
  },
  plugins: [],
}