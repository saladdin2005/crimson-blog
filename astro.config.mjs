import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crimson-blog.netlify.app',
  // شريط أدوات Astro التطويري يغطّي شريط القراءة أسفل الشاشة على الهاتف
  devToolbar: { enabled: false },
  // توليد صفحات تحويل (meta-refresh) تعمل على أي مضيف: Netlify / Vercel / Cloudflare
  redirects: {
    '/': '/ar/',
    '/ar/articles/travel-journals/': '/ar/articles/december-movies/',
    '/en/articles/travel-journals/': '/en/articles/december-movies/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
