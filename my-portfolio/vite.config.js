import { defineConfig } from 'vite';
import { createRequire } from 'module';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
const require = createRequire(import.meta.url);

export default defineConfig({
  server: {
    host: true, // This makes the server visible on your local network
    port: 5173, // Default Vite port
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Web Dev Chauncey | Custom Websites',
          description: 'Helping small businesses build custom websites that attract clients and boost online presence.',
        }
      }
    })
  ],
  base: '/',
  resolve: {
    alias: {
      crypto: require.resolve('crypto-browserify')
    }
  }
});

