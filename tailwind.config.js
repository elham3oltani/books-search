/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito : ["Nunito", "sans-serif"],
        Poppins: ["Poppins","sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "banner-book": "url('/src/image/bannerBook.svg')",
      },
     
    },
  },
  plugins: [
  ],
}