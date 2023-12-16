import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  server: {
    port: 3000, 
  },
  resolve: {
    alias: {
      "/@": "/src",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
