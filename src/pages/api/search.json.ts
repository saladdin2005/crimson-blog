import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { categories, coverUrl, type Lang } from '../../data/site';

// فهرس البحث: يُبنى أثناء البناء كملف JSON ثابت يُقرأه بحث الهاتف مرة واحدة ثم يُصفّي محلياً.
export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');

  const items = articles
    .map((a) => {
      const [lang, ...rest] = a.id.split('/');
      const slug = rest.join('/');
      const cat = categories[a.data.category];
      return {
        lang: lang as Lang,
        slug,
        title: a.data.title,
        description: a.data.description,
        tags: a.data.tags,
        category: a.data.category,
        catLabel: cat[lang as Lang],
        accent: cat.accent,
        date: a.data.date.toISOString().slice(0, 10),
        readTime: a.data.readTime,
        url: `/${lang}/articles/${slug}`,
        image: a.data.image ?? coverUrl(slug, 400, 300),
      };
    })
    .sort((x, y) => (x.date < y.date ? 1 : -1));

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
