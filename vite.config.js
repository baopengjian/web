import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  esbuild: {
    target: 'es2015'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2015'
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/src/modules/')) {
            const parts = id.split('/src/modules/')[1].split('/');
            return parts[0];
          }
          if (id.includes('/src/shared/')) {
            return 'shared';
          }
        }
      }
    }
  }
});
