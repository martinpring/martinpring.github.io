import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../site';

export async function GET(context: APIContext) {
  const stories = (await getCollection('story', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return rss({
    title: `${SITE.name} | Story`,
    description: 'Notes from building software, products and companies.',
    site: context.site!,
    items: stories.map((s) => ({
      title: s.data.title,
      description: s.data.description,
      pubDate: s.data.date,
      link: `/story/${s.id}/`,
    })),
  });
}
