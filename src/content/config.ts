import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    vertical: z.enum(['Utilities', 'Life Sciences', 'Other']),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),          // sort order within vertical and among featured
    featured: z.boolean().default(false),  // show in "Recent Work" on home page
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('KSM Team'),
    tags: z.array(z.string()),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['Technology', 'Industry']),
    description: z.string(),         // short blurb shown on the partners page card
    logo: z.string(),                // path under public/, e.g. 'images/partners/domino.svg'
    url: z.string().url(),           // partner website
    order: z.number().optional(),    // display order within category
  }),
});

export const collections = { 'case-studies': caseStudies, blog, partners };
