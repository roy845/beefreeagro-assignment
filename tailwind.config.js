/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-gradient": "linear-gradient(to right, #6886fe, #844de7)",
      },
    },
  },
  plugins: [],
};

//before
// gradient start ---> #06b6d4
// gradient stop ---> #3b82f6
