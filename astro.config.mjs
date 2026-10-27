import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crimson.example.com',
  // شريط أدوات Astro التطويري يغطّي شريط القراءة أسفل الشاشة على الهاتف
  devToolbar: { enabled: false },
  redirects: {
    '/': '/ar/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
