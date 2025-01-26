import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 3000, // Fallback to 3000 if no environment variable is set
    host: '0.0.0.0', // Required by Render to bind to the right network interface
  },
  plugins: [vue()],
})
