import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/6b0582c60bc9a936f86e6d42/',
  // Bundled when the dev server starts, so the first page the agent adds (HashRouter) does not make Vite re-bundle
  // mid-session, which left the Preview white until a manual reload.
  optimizeDeps: { include: ['react-router-dom'] },
})
