import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 🚨 FINAL VALUE: Base set to your repository name
  base: '/amanbhandari.com.np/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});