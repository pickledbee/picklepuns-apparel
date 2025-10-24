import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/picklepuns-apparel/', // 👈 This line fixes the blank white screen on GitHub Pages
})

