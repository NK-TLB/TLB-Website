/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // The Laundry Bag brand palette — driven by CSS variables so the site
        // can switch between templates at runtime. The PRIMARY (brand) colour
        // stays the logo Sky Blue (#009cdc) across every template; templates
        // vary the accent, neutral (ink) ramp, gradients and shadow tint.
        // Each var holds an "R G B" channel triple (see src/index.css).
        brand: {
          50: "rgb(var(--brand-50) / <alpha-value>)",
          100: "rgb(var(--brand-100) / <alpha-value>)",
          200: "rgb(var(--brand-200) / <alpha-value>)",
          300: "rgb(var(--brand-300) / <alpha-value>)",
          400: "rgb(var(--brand-400) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
          800: "rgb(var(--brand-800) / <alpha-value>)",
          900: "rgb(var(--brand-900) / <alpha-value>)",
          950: "rgb(var(--brand-950) / <alpha-value>)",
        },
        // sky2 is kept as an alias of brand for backward compatibility.
        sky2: {
          50: "rgb(var(--brand-50) / <alpha-value>)",
          100: "rgb(var(--brand-100) / <alpha-value>)",
          200: "rgb(var(--brand-200) / <alpha-value>)",
          300: "rgb(var(--brand-300) / <alpha-value>)",
          400: "rgb(var(--brand-400) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
          700: "rgb(var(--brand-700) / <alpha-value>)",
          800: "rgb(var(--brand-800) / <alpha-value>)",
          900: "rgb(var(--brand-900) / <alpha-value>)",
          950: "rgb(var(--brand-950) / <alpha-value>)",
        },
        accent: {
          50: "rgb(var(--accent-50) / <alpha-value>)",
          100: "rgb(var(--accent-100) / <alpha-value>)",
          400: "rgb(var(--accent-400) / <alpha-value>)",
          500: "rgb(var(--accent-500) / <alpha-value>)",
          600: "rgb(var(--accent-600) / <alpha-value>)",
        },
        ink: {
          50: "rgb(var(--ink-50) / <alpha-value>)",
          100: "rgb(var(--ink-100) / <alpha-value>)",
          200: "rgb(var(--ink-200) / <alpha-value>)",
          300: "rgb(var(--ink-300) / <alpha-value>)",
          400: "rgb(var(--ink-400) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          950: "rgb(var(--ink-950) / <alpha-value>)",
        },
      },
      // Fonts, radii and shadows are driven by CSS variables so each template
      // can re-skin the whole site's shape + typography at runtime (see
      // src/index.css). The colour palette stays identical across templates.
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
        "5xl": "var(--radius-5xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
        glow: "0 0 0 6px rgb(var(--brand-500) / 0.18)",
        ring: "0 0 0 1px rgba(255,255,255,0.6), 0 20px 50px -20px rgb(var(--brand-600) / 0.45)",
      },
      backgroundImage: {
        "hero-gradient": "var(--bg-hero-gradient)",
        "hero-radial": "var(--bg-hero-radial)",
        "brand-gradient": "var(--bg-brand-gradient)",
        "ink-mesh": "var(--bg-ink-mesh)",
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
        "hero-enter": {
          "0%": {
            opacity: "0",
            transform:
              "perspective(1200px) rotateX(14deg) translateY(36px) scale(0.94)",
          },
          "100%": {
            opacity: "1",
            transform:
              "perspective(1200px) rotateX(0deg) translateY(0) scale(1)",
          },
        },
        "hero-float-3d": {
          "0%, 100%": {
            transform:
              "perspective(1200px) rotateX(3deg) rotateY(-3deg) translateY(0)",
          },
          "50%": {
            transform:
              "perspective(1200px) rotateX(-2deg) rotateY(3deg) translateY(-10px)",
          },
        },
        "hero-glow": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.08)" },
        },
        "menu-slide-down": {
          "0%": { opacity: "0", transform: "translateY(-16px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "backdrop-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.65)", opacity: "0.55" },
          "70%": { opacity: "0" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "success-pop": {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "success-circle": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "success-check": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.8s ease both",
        float: "float 6s ease-in-out infinite",
        "hero-enter":
          "hero-enter 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "hero-float-3d": "hero-float-3d 8s ease-in-out infinite",
        "hero-glow": "hero-glow 5s ease-in-out infinite",
        "menu-slide-down":
          "menu-slide-down 0.35s cubic-bezier(0.16,1,0.3,1) both",
        "backdrop-fade": "backdrop-fade 0.25s ease both",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
        "success-pop":
          "success-pop 0.55s cubic-bezier(0.16,1,0.3,1) both",
        "success-circle":
          "success-circle 0.65s cubic-bezier(0.16,1,0.3,1) 0.12s both",
        "success-check":
          "success-check 0.4s cubic-bezier(0.16,1,0.3,1) 0.52s both",
      },
    },
  },
  plugins: [],
};
