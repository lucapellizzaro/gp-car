const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#fde047",
        light: "#f3f4f6",
        dark: "#111827",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
