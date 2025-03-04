import { defineConfig } from 'vite';
import { createRequire } from 'module';
import react from '@vitejs/plugin-react';
const require = createRequire(import.meta.url);

export default defineConfig({
  server: {
    host: true, // This makes the server visible on your local network
    port: 5173, // Default Vite port
  },
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      crypto: require.resolve('crypto-browserify')
    }
  }
});

