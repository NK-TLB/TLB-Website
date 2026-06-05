import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The Laundry Bag — production marketing site (Vite + React 19 + Tailwind).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
  },
});
