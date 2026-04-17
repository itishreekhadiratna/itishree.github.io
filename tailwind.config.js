/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C738BD",
        dark: "#1f242d",
        secondary: "#323946"
      }
    }
  },
  plugins: [],
}
