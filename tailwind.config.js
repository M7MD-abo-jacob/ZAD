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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        "heart-beat": {
          "0%": { transform: "scale(1);" },
          "14%": { transform: "scale(1.3);" },
          "28%": { transform: "scale(1);" },
          "42%": { transform: "scale(1.3);" },
          "70%": { transform: "scale(1);" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "heart-beat": "heart-beat 1s infinite",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
      colors: {
        muted: "hsl(var(--muted-light))",
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
