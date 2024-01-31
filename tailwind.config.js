/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray': '#ebebeb',
        'custom-blue':'#c0e3e5',
        'custom-yellow':'#fdc936',
        'custom-black':'#322625'
      },
      fontFamily: {
        'neutra': ['Neutra Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}