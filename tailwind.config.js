module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        textPrimary: "#EEEEEE",
        textSecondary: "#CCCCCC"
      },
      fontFamily: {
        serif: ["'Noto Serif JP'", "serif"]
      }
    },
  },
  plugins: [],
};