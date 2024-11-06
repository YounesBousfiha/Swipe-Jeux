/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-out-left": {
          "0%": {
              opacity: 1,
          },
          "100%": {
              opacity: 0,
              transform: "translate3d(-100%, 0, 0)",
          },
          "fade-out-right": {
            "0%": {
                opacity: 1,
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(100%, 0, 0)",
            },
          }
        }
      }
    },
  },
  plugins: [],
}

