import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.tsv'],
  plugins: [svelte()],
  base: './',
})
