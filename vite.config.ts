import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/pranav2k25-symposium",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
