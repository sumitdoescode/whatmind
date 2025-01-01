/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E72757",
        dark: "#000000",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
