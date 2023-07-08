import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // proxy: {
    //   //setting default proxy http
    //   "/api": {
    //     target: "https://exp-server-mikj.onrender.com",
    //     changeOrigin: true,
    // // rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
