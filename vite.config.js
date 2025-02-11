import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from network
    strictPort: true, // Ensures the same port is used
    allowedHosts: ["6e54-2409-40e5-16c-22b6-321-5fd3-73d6-c139.ngrok-free.app"],
  },
});
