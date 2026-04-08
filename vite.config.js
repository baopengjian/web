import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
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
