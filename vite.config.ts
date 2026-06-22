import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import type { IncomingMessage, ServerResponse } from "node:http";

/** Accept Netlify Forms POSTs during `vite dev` / `vite preview` (production uses Netlify). */
function netlifyFormDevPlugin(): Plugin {
  const handleFormPost = (
    req: IncomingMessage,
    res: ServerResponse,
    next: () => void,
  ) => {
    if (req.method !== "POST") return next();

    const path = req.url?.split("?")[0];
    if (path !== "/") return next();

    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      if (params.get("bot-field")) {
        res.statusCode = 200;
        res.end("OK");
        return;
      }

      console.info("[dev] Contact form submission:", {
        name: params.get("name"),
        phone: params.get("phone"),
        email: params.get("email"),
        message: params.get("message")?.slice(0, 120),
      });

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("OK");
    });
  };

  return {
    name: "netlify-form-dev",
    configureServer(server) {
      server.middlewares.use(handleFormPost);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleFormPost);
    },
  };
}

// The Laundry Bag — production marketing site (Vite + React 19 + Tailwind).
export default defineConfig({
  plugins: [react(), netlifyFormDevPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor";
          }
          if (id.includes("node_modules/react-router")) {
            return "vendor";
          }
          if (id.includes("node_modules/react-helmet-async")) {
            return "helmet";
          }
        },
      },
    },
  },
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
