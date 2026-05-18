/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tuned to The LaundryBag's sky-blue logo (~#29abe2)
        brand: {
          50: "#ecf8fe",
          100: "#d6f0fd",
          200: "#afe1fb",
          300: "#7dcdf6",
          400: "#29abe2",
          500: "#1496cc",
          600: "#0f86bb",
          700: "#0b6e9c",
          800: "#0c5b80",
          900: "#0e4d6b",
          950: "#082f44",
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        ink: {
          50: "#f7f8fb",
          100: "#eef0f5",
          200: "#d9dde7",
          300: "#b6bdcd",
          400: "#8b94aa",
          500: "#697389",
          600: "#525a6e",
          700: "#414858",
          800: "#2a2f3b",
          900: "#171a22",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(13, 95, 140, 0.22)",
        glow: "0 0 0 6px rgba(41, 171, 226, 0.12)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #ecf8fe 0%, #d6f0fd 40%, #afe1fb 100%)",
        "hero-radial":
          "radial-gradient(60% 60% at 80% 0%, rgba(41,171,226,0.18) 0%, rgba(41,171,226,0) 60%), linear-gradient(135deg, #f7fcff 0%, #e3f3fc 60%, #cfeafa 100%)",
      },
    },
  },
  plugins: [],
};
