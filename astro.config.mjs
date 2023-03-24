import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import react from "@astrojs/react";
import viteCompression from 'vite-plugin-compression';
dotenv.config();

export default defineConfig({
  integrations: [react()],
  root: "./src",
  publicDir: "./public",
  experimental: {
    assets: true
  },
  plugins: [
    viteCompression({
      threshold: 512000 // 對大於 512kb 的文件進行壓縮
    })
  ]
});