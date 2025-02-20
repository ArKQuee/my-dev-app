import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'my-dev-app', // Replace 'your-repo-name' with your actual GitHub repository name
});

