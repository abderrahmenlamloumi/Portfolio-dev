import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
  },
  esbuild: {
    target: 'esnext',
    supported: {
      'top-level-await': true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
      supported: {
        'top-level-await': true,
      },
    },
  },
})