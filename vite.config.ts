import { defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [wasm(), topLevelAwait(), checker({ typescript: true })],
  preview: { cors: true },
  mode: 'production',
  optimizeDeps: {
    exclude: ['@syntect/wasm'],
  },
})
