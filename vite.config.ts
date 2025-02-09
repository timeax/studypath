import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from "path";

const resolve = (loc: string) => {
    return path.resolve(__dirname, loc);
};


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      "@assets": resolve("./src/assets"),
      "@components": resolve("./src/components"),
      "@styles": resolve("./src/styles"),
      "@layouts": resolve("./src/layouts"),
      "@data": resolve("./src/data"),
      "@context": resolve("./src/context"),
      "@pages": resolve("./src/pages"),
      "@routes": resolve("./src/routes"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '/src/styles/utils/index';`,
      },
    },
  },
})
