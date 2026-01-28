/* eslint-disable @typescript-eslint/no-explicit-any */
import react from "@vitejs/plugin-react";
import fs from "fs";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("./certificate/ShoppingAppCert.key.pem"),
      cert: fs.readFileSync("./certificate/ShoppingAppCert.cert.pem"),
    },
    host: true,
    port: 3000,
  },
  plugins: [react(), tsconfigPaths(), svgr()],
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
      { find: "@drawers", replacement: "/src/drawers" },
      { find: "@screens", replacement: "/src/screens" },
      { find: "@store", replacement: "/src/store" },
      { find: "@types", replacement: "/src/types" },
      { find: "@api", replacement: "/src/api" },
      { find: "@helpers", replacement: "/src/helpers" },
      { find: "@overlays", replacement: "/src/overlays" },
      { find: "@toasts", replacement: "/src/toasts" },
    ],
  },
  test: {
    global: true,
    environment: "jsdom",
  },
} as any);
