import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articoli = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articoli' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
  }),
});

const episodi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodi' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    duration: z.string(),
    date: z.string(),
    spotify: z.string().optional(),
    apple: z.string().optional(),
  }),
});

export const collections = { articoli, episodi };
