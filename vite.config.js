import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fm-newsletter-sign-up-with-success-message/',
  plugins: [react()],
})
