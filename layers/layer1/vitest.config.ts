import { fileURLToPath } from 'node:url'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineVitestProject({
  root: fileURLToPath(new URL('.', import.meta.url)),
  test: {
    name: 'composable-nuxt',
    include: ['test/nuxt/**/*.{test,spec}.ts'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('./.playground', import.meta.url)),
      },
    },
  },
})
