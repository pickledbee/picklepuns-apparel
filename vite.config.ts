import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/picklepuns-apparel/',  // 👈 this line fixes the blank screen
})
