/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "inherit"
          }
        },
        rotateSwitch: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" }
        }
      },
      animation: {
        rotateSwitch: "rotateSwitch 250ms ease-in-out",
        typing: "blink .7s infinite"
      }
    }
  },
  plugins: []
};
