import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/bahrPortfolio/' when building via GitHub Actions for GitHub Pages;
  // Default to '/' on Vercel and local development.
  base: process.env.GITHUB_ACTIONS ? '/bahrPortfolio/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});