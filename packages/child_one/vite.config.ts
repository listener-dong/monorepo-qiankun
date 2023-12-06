import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('data-source', {
      useDevMode: true
    })
  ],
  base: 'http://localhost:8001/',
  server: {
    port: 8001,
    cors: true,
    origin: 'http://localhost:8001'
  }
})
