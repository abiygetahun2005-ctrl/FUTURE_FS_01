import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/FUTURE_FS_01/", 

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api": "http://localhost:5000",
    },
  },

  plugins: [react()], // 👈 removed lovable

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));