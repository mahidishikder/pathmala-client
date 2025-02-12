/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Correct placement of darkMode
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

