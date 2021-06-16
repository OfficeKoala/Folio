module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'resume-back': "url('/src/assets/back.jpg')",
        'themeColor': "#222f3e"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
