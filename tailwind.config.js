module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        searchBox: {
          DEFAULT: "#EAEAFF",
        },
        primary: {
          DEFAULT: "#550DED",
        },
        horizontalRuler: {
          DEFAULT: "#E9E9E9",
        },
        footer: {
          DEFAULT: "#2C0346",
        },
      },
      width: {
        "700px": "700px",
        "150px": "150px",
      },
      height: {
        "450px": "450px",
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
    extend: {},
  },
  plugins: [],
};
