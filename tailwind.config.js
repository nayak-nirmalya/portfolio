/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
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
        typing: "typing 2.5s steps(20) infinite alternate, blink .7s infinite"
      }
    }
  },
  plugins: []
};
