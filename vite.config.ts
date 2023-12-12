import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { striper } from 'vite-plugin-striper';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [striper({ decorators: ['BackendMethod'] }), react()],
  server: { proxy: { '/api': 'http://localhost:3003' } },
});
