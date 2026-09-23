// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection

  const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/articles/Projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    year: z.coerce.date(),
    image: z.string(), 
    role: z.string(),
    skills: z.array(z.string()),
    websites: z.string()
  }),
});
// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects };