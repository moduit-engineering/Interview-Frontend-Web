module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "414px",
      sm: "414px",
      md: "414px",
      lg: "414px",
      xl: "414px",
      // ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "solid-blue": "#174291",
      },
    },
  },
  plugins: [],
};
