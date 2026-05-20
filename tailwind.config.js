/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Old TLB site brand: green #33d65b for "For your Business" / accents,
        // sky-blue #009cdc for "For your Home" / logo / institutional.
        brand: {
          50: "#e8f9ee",
          100: "#caf2d7",
          200: "#9ce6b3",
          300: "#69d889",
          400: "#33d65b",
          500: "#1cbf45",
          600: "#16a23a",
          700: "#138033",
          800: "#11652b",
          900: "#0d4f24",
          950: "#062f15",
        },
        sky2: {
          50: "#e6f6fc",
          100: "#c2e9f7",
          200: "#8fd5ee",
          300: "#4dbce3",
          400: "#23a9d8",
          500: "#009cdc",
          600: "#0084bc",
          700: "#066b97",
          800: "#0a557a",
          900: "#0c4661",
          950: "#062c40",
        },
        accent: {
          50: "#e8fbf9",
          100: "#c9f3ee",
          400: "#46d8cc",
          500: "#2cc1b4",
          600: "#1ca197",
        },
        ink: {
          50: "#f7f8fb",
          100: "#eef0f5",
          200: "#d9dde7",
          300: "#b6bdcd",
          400: "#8b94aa",
          500: "#697389",
          600: "#525a6e",
          700: "#454545",
          800: "#2a2f3b",
          900: "#171a22",
        },
      },
      fontFamily: {
        sans: [
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Rubik",
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(13, 95, 140, 0.22)",
        glow: "0 0 0 6px rgba(51, 214, 91, 0.18)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #e8f9ee 0%, #caf2d7 35%, #c2e9f7 100%)",
        "hero-radial":
          "radial-gradient(60% 60% at 80% 0%, rgba(0,156,220,0.18) 0%, rgba(0,156,220,0) 60%), linear-gradient(135deg, #f7fcff 0%, #e8f6fb 50%, #e8f9ee 100%)",
      },
    },
  },
  plugins: [],
};
