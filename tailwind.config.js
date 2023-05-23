/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateSwitch: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" }
        }
      },
      animation: {
        rotateSwitch: "rotateSwitch 250ms ease-in-out"
      }
    }
  },
  plugins: []
};
