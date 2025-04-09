import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'] // This file will include global imports and configurations
  }
})