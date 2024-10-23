/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        testimonialImg: "url('../assets/overlay/overlay_5.png')",
      },
      backgroundSize: {
        sizeLg: "100% 160%",
        size: "100% 100%",
      },
      colors: {
        main: "#F61B1E",
        primary: "#0F051D",
        secondary: "#767676",
        background: "#F15A2B",
        background_main: "#F7F7FA",
        background_primary: "#F0BB1F",
        background_tertiary: "#006380",
      },
      boxShadow: {
        shadowPrimary: "rgba(149, 157, 165, 0.2) 0px 0px 15px",
        shadowSecondary: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
