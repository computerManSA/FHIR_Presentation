import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['17689c51-6596-48d3-8a27-b8ec17f52068-00-3hb7tsve2sciq.sisko.replit.dev','moh-fhir.replit.app'],
    hmr: {
      port: 5173,
      host: '0.0.0.0'
    },
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  define: {
    'process.env': process.env
  }
})