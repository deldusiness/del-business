module.exports = {
  plugins: ["tailwindcss"],
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        accent: "#D4A537",
        background: "#F8F9FB",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,31,58,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(circle at top left, rgba(212,165,55,0.2), transparent 25%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
