/* eslint-disable @typescript-eslint/no-explicit-any */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@resources", replacement: "/src/_resources" },
      { find: "@assets", replacement: "/src/assets" },
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@constants",
        replacement: "/src/constants",
      },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@modals", replacement: "/src/modals" },
      { find: "@screens", replacement: "/src/screens" },
      { find: "@store", replacement: "/src/store" },
      { find: "@types", replacement: "/src/types" },
      { find: "@services", replacement: "/src/services" },
    ],
  },
  test: {
    global: true,
    environment: "jsdom",
  },
} as any);
