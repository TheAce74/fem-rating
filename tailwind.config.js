/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overPass: ["Overpass", "sans-serif"],
      },
      colors: {
        primary: {
          400: "hsl(25, 97%, 53%)",
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(217, 12%, 63%)",
          300: "hsl(216, 12%, 54%)",
          800: "hsl(213, 19%, 18%)",
          900: "hsl(216, 12%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
