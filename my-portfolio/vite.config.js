import { defineConfig } from 'vite';
import { createRequire } from 'module';
import react from '@vitejs/plugin-react';
const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      crypto: require.resolve('crypto-browserify')
    }
  }
});

