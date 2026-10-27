import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Everything on the /story timeline is one collection with three kinds of entry:
 * - story:     a long-form post with its own page at /story/<file-name>
 * - post:      a short moment, often copied from LinkedIn or Instagram, shown in full on the timeline
 * - milestone: a one-line marker in the journey (a launch, a first customer, a hire)
 */
const story = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/story' }),
  schema: z
    .object({
      kind: z.enum(['story', 'post', 'milestone']).default('story'),
      title: z.string().optional(),
      description: z.string().optional(),
      date: z.coerce.date(),
      draft: z.boolean().default(false),
      /** Where a post was first published, and a link back to it. */
      source: z.enum(['linkedin', 'instagram', 'x', 'site']).optional(),
      url: z.string().url().optional(),
      /** Image path under public/, e.g. /images/story/2026-10-27-desk.jpg */
      image: z.string().optional(),
      imageAlt: z.string().optional(),
    })
    .refine((d) => d.kind === 'post' || !!d.title, {
      message: 'Stories and milestones need a title.',
      path: ['title'],
    })
    .refine((d) => d.kind !== 'story' || !!d.description, {
      message: 'Stories need a description (used in the timeline, RSS and link previews).',
      path: ['description'],
    }),
});

export const collections = { story };
