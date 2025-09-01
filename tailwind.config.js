import DarkMode from "./src/Components/Navbar/DarkMode"

// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4263eb",
        secondary: "#63e6be"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  DarkMode: "selector",
  plugins: [],
};
