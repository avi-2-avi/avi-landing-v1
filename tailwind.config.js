/** @type {import('tailwindcss').Config} */
module.exports = {
  dark: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Light/Dark refers to the palette where it's used, not the actual color
      background: {
        light: "#E5E9F0",
        dark: "#161526",
      },
      foreground: {
        light: "#2E3440",
        dark: "#FFFFFF",
      },
      red: {
        light: "#BF616A",
        dark: "#F0D3D0",
      },
      blue: {
        light: "#81A1C1",
        dark: "#BCE6EA",
      },
      yellow: {
        light: "#D08770",
        dark: "#F2EDA0",
      },
    },
    extend: {},
  },
  plugins: [],
};
