/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#8EC7D2',
        customzozo: '#E8BDB9',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

