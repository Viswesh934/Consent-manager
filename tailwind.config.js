/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000342",
        secondary: "#554EF1",
        terinary: "#554EF11A",
        quardinary: "#05055214",
        quinary: "#050552CC",
        

      },
      fontFamily: {
        inter: ["Inter"],
      }
    },
  },
  plugins: [],
}

