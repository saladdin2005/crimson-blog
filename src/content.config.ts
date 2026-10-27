import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['ar', 'en']),
    category: z.enum(['mystery', 'history', 'science', 'tools']),
    date: z.coerce.date(),
    author: z.enum(['you', 'sara']),
    featured: z.boolean().default(false),
    trending: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    readTime: z.number(),
    image: z.string().optional(),
    /** بانر علوي خاص بالمقال في صفحة القراءة (يحلّ محل البانر العام) */
    banner: z.string().optional(),
  }),
});

export const collections = { articles };
