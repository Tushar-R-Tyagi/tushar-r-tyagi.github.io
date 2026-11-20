import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in /content/projects
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    finding: z.string(), // the one-line finding shown on the homepage
    tag: z.string(),
    date: z.coerce.date(),
    figure: z.string().optional(), // e.g. /figures/goal-probes.svg
    figureAlt: z.string().optional(),
    link: z.string().optional(), // paper / repo; omit to link the write-up page
    featured: z.boolean().default(false), // shown as the selected (dark) row
    draft: z.boolean().default(false),
  }),
});

// One Markdown file per blog post in /content/posts
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    comments: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
