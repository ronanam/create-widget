import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // 빌드 결과물 저장 폴더
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    lib: {
      entry: "./src/main.jsx",
      name: "MyWidget",
      fileName: "main",
      formats: ["iife"],
    },
  },
  base: "/create-widget/",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
