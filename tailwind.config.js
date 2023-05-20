/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary-clr))",
        "primary-transparent": "hsl(var(--primary-clr), 0.2)",
        "primary-semitransparent": "hsl(var(--primary-clr), 0.5)",
        accent: "hsl(var(--accent-clr))",
        "accent-transparent": "hsl(var(--accent-clr), 0.2)",
        "accent-semitransparent": "hsl(var(--accent-clr), 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
