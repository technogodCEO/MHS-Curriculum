import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { transformWithEsbuild } from 'vite'

export default defineConfig({
  plugins: [
    // Pre-transform: tell esbuild to treat .js files as JSX before any other
    // plugin (including Rollup's parser) sees them. This fixes Vitest's SSR
    // transform path which bypasses the top-level `esbuild` config.
    {
      name: 'treat-js-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.includes('node_modules') && id.endsWith('.js')) {
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic',
          })
        }
      },
    },
    react({
      include: '**/*.{jsx,js}',
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
  },
})
