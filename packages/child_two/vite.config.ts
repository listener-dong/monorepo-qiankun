import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ fastRefresh: false }),
    qiankun('subApp_react', {
      useDevMode: true
    })
  ],
  base: 'http://localhost:8002/',
  server: {
    port: 8002,
    cors: true,
    origin: 'http://localhost:8002'
  }
})
