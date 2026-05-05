import type { Config } from "tailwindcss";

export default {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}", // covers EVERYTHING
],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#000000",
          accent: "#FFC107",
          secondary: "#4f46e5",
          tertiary: "#F21607",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;