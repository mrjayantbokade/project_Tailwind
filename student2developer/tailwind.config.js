/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redboot: "#dc2626",
        blackboot: "#2f3033",
        grayboot: "#64748b",
        whiteboot: "#f8fafc",
        gradientblue: "#DBE6F6",
        yellowboot: "#fff6cc",
        brownboot: "#713f12",
        yellowdark: "#ca8a04",

      },
      fontFamily: {
        font1: ['poppins', 'sans-serif'],
        font2: ['Inter', 'sans-serif'],
        font3: ['MuseoModerno', 'sans-serif'],
        font4: ['Roboto', 'sans-serif'],
      },


    },
  },
  plugins: [],
}

