export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEBB6C",
        "primary-light": "#FDF8ED",
        "primary-dark": "#DD8623",
        "success-gradient-start": "#079DFB",
        "success-gradient-end": "#4DDCC2",
      },
      fontFamily: {
        mont: ["Mont", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
