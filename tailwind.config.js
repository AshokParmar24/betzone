/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        black: {
          charcol: "#1A1A1A",
          dark: "#1D1D1B",
          chalk: "#292D32",
          shade: "#111112",
        },
        white: {
          50: "#FFFFFF",
          100: "#ffffff66",
        },
        grey: {
          50: "#575756",
          100: "#393939",
          200: "#333332",
          300: "#2C2C2A",
          400: "#242421",
        },
        orange: {
          50: "#EB6708",
          200: "#eb670833",
          300: "#e8373733",
          400: "#e83737",
        },
        gold: {
          safari: "#B8994C",
        },
        green: {
          50: "#039C55",
          100: "#09FB02",
        },
      },
    },
  },
  plugins: [],
};
