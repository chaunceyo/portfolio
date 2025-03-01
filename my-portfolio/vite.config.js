import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify'
    }
  },
  define: {
    global: 'window', // Needed for certain environments (like Vercel)
  },
});
