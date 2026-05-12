import { fileURLToPath } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vitest/config'

// Resolve `@/*` -> `./src/*` without depending on the ESM-only
// `vite-tsconfig-paths` plugin (which esbuild cannot `require()` when
// loading this config under the default CJS bundling path).
const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, 'src'),
    },
  },
  test: {
    environment: 'node',
    globals: false,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
})
