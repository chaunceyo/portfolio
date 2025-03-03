import { defineConfig } from 'vite';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default defineConfig({
  resolve: {
    alias: {
      crypto: require.resolve('crypto-browserify')
    }
  }
});

