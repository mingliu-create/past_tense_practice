import { defineConfig } from 'vite';

export default defineConfig({
  // No special config needed for this simple project, 
  // but having this file helps deployment platforms detect it as a Vite project.
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
});
