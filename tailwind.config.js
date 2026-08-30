/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
manrope:["Manrope", "sans-serif"],
outfit: ["Outfit", "sans-serif"],
playfair: ["Playfair Display", "serif"],
young: ["Young Serif", "serif"],
fraunces: ['Fraunces', 'serif'],
sans: ['DM Sans', 'sans-serif'],
mono: ['DM Mono', 'monospace'],
    },
    },
  },
  plugins: [],
}