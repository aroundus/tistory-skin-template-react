import * as path from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { stylex } from 'vite-plugin-stylex-dev';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'script.js',
        chunkFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          if (name) {
            if (name.endsWith('.css')) {
              return 'style.css';
            }
          }

          return '[name].[ext]';
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]__[hash:5]',
      localsConvention: 'camelCase',
    },
  },
  plugins: [
    checker({
      typescript: true,
    }),
    react(),
    stylex(),
    svgr(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  server: {
    preTransformRequests: false,
  },
});
