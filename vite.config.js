import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const deferCssPlugin = () => {
  return {
    name: 'defer-css',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        /<link([^>]*?)rel="stylesheet"([^>]*?)>/g,
        '<link$1rel="stylesheet"$2 media="print" onload="this.media=\'all\'">'
      );
    }
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    deferCssPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        }
      }
    }
  }
})
