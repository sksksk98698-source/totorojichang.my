import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    category: z.enum(['tech', 'life']).default('tech'),
    author: z.string().default('Totoro'),
    mathjax: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
