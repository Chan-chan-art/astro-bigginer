// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    image: z.string(), 
    author: z.string(),
    tech: z.array(z.string()),
    url: z.string()
    }),
  });

// 5. Export a single `collections` object to register your collection(s)
export const collections = { articles };