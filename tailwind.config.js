/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "primary-gradient": "blue",
        "secondary-gradient": "red",
      },
    },
  },
  plugins: [],
};
