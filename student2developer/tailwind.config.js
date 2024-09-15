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
      },
      fontFamily: {
        'font1': ['Poppins', 'sans-serif'],
        'font2': ['Inter', 'sans-serif'],
        'font3': ['MuseoModerno', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

