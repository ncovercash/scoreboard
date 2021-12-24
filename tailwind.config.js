module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "width": "width",
        "bg-color": "background-color",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
    fontFamily: {
      heading: `"Averia Sans Libre", sans, sans-serif`,
      round: `"M PLUS Rounded 1c", sans, sans-serif`,
    },
  },
  plugins: [],
};
