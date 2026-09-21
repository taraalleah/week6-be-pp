import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Make describe, test, expect, beforeEach, afterAll, etc.
    // available globally, similar to Jest.
    globals: true,

    // Backend tests should run in Node.
    environment: 'node',

    // Prevent test files from running in parallel.
    // This is useful when multiple test files share a MongoDB database.
    fileParallelism: false,

    // Optional: give database operations enough time to complete.
    testTimeout: 20000,
  },
})