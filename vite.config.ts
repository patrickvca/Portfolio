import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Caminhos relativos: o site publicado fica em /Portfolio/ no GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
});
