/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // The Laundry Bag brand palette (Sky Blue from Logo #009cdc)
        brand: {
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
          50: "#f4f7f9",
          100: "#e3ebf1",
          200: "#ccdae4",
          300: "#a8c2d3",
          400: "#7fa4bc",
          500: "#5f88a4",
          600: "#4a6d88",
          700: "#3e5870",
          800: "#354a5e",
          900: "#1b2a3a",
          950: "#0f1924",
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
        display: ["Rubik", "Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(13, 95, 140, 0.22)",
        lift: "0 24px 60px -24px rgba(13, 64, 90, 0.35)",
        glow: "0 0 0 6px rgba(0, 156, 220, 0.18)",
        ring: "0 0 0 1px rgba(255,255,255,0.6), 0 20px 50px -20px rgba(0,124,180,0.45)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #e6f6fc 0%, #c2e9f7 35%, #8fd5ee 100%)",
        "hero-radial":
          "radial-gradient(60% 60% at 80% 0%, rgba(0,156,220,0.18) 0%, rgba(0,156,220,0) 60%), linear-gradient(135deg, #f7fcff 0%, #e8f6fb 50%, #e6f6fc 100%)",
        "brand-gradient":
          "linear-gradient(120deg, #0084bc 0%, #009cdc 55%, #23a9d8 100%)",
        "ink-mesh":
          "radial-gradient(40% 60% at 15% 10%, rgba(0,156,220,0.30) 0%, rgba(0,156,220,0) 60%), radial-gradient(45% 55% at 85% 20%, rgba(0,156,220,0.28) 0%, rgba(0,156,220,0) 60%), radial-gradient(60% 60% at 50% 100%, rgba(70,216,204,0.18) 0%, rgba(70,216,204,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.8s ease both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
