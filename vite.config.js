import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/shagak_shagak_data_visualization/' : '/',
  plugins: [react()],
})
