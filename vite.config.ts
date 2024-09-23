import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base: '/webapp/com.example.vite/',
  build: {
      outDir: 'build/resources/main/static',
  },
  plugins: [react()],
} satisfies UserConfig
