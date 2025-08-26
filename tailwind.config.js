export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Gold
        primary: "#DEBB6C",
        "primary-light": "#FDF8ED",
        "primary-lighter": "#F8ECC0",
        "primary-soft": "#F1D696",
        "primary-pale": "#EABB5F",
        "primary-medium": "#E4A235",
        "primary-dark": "#DD8623",
        "primary-deep": "#C3651C",
        "primary-brown": "#A2481B",
        "primary-darker": "#84391C",
        "primary-browner": "#6D301A",
        "primary-darkest": "#3E170A",
        // Secondary Black/Greys
        black: "#000000",
        "gray-lightest": "#F6F6F6",
        "gray-lighter": "#E7E7E7",
        "gray-light": "#D1D1D1",
        "gray-medium": "#B0B0B0",
        gray: "#888888",
        "gray-dark": "#6D6D6D",
        "gray-darker": "#5D5D5D",
        "gray-deep": "#454545",
        "gray-darkest": "#3D3D3D",
        "gray-black": "#262626",
        "gray-deepest": "#EDEDFF",
        "gray-off": "#EFEFEF",
        // Quaternary Gray
        quaternary: "#515151",
        // Tertiary Violets
        tertiary: "#200F2A",
        "tertiary-1": "#F4EEFF",
        "tertiary-2": "#EBE0FF",
        "tertiary-3": "#DBC7FE",
        "tertiary-4": "#C7A5FC",
        "tertiary-5": "#B981F8",
        "tertiary-6": "#B163F1",
        "tertiary-7": "#AA45E6",
        "tertiary-8": "#9638CA",
        "tertiary-9": "#7830A3",
        "tertiary-10": "#602E81",
        // Quaternary
        "quaternary-1": "#5856FD",
        "quaternary-2": "#835DF7",
        // Gradients: start/end solid colors
        "gradient-1-start": "#B465F9",
        "gradient-1-end": "#649BF9",
        "gradient-2-start": "#6894F9",
        "gradient-2-end": "#21F9F0",
        "gradient-3-start": "#4DDCC2",
        "gradient-3-end": "#6D77F0",
        "gradient-4-start": "#079DFB",
        "gradient-4-end": "#4DDCC2",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(90deg, #B465F9 0%, #649BF9 100%)",
        "gradient-2": "linear-gradient(90deg, #6894F9 0%, #21F9F0 100%)",
        "gradient-3": "linear-gradient(90deg, #4DDCC2 0%, #6D77F0 100%)",
        "gradient-4": "linear-gradient(90deg, #079DFB 0%, #4DDCC2 100%)",
        "gradient-5": "linear-gradient(90deg, #6D77F0 0%, #4DDCC2 100%)",
        // Add more gradients as necessary
      },
      fontFamily: {
        mont: ["Mont", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
