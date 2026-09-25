// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection

  const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles", }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    image: z.string(), 
    author: z.string(),
    tech: z.array(z.string()),
    url: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/Projects",}),
  schema: z.object({
    title: z.string(),
    description: z. string(),
    year: z.string(),
    image: z.string(),
    role: z.string(),
    skills: z.array(z.string()), 
    websites: z.string().url(),
  })
})
// 5. Export a single `collections` object to register your collection(s)
export const collections = { articles, projects };