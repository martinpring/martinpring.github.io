import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../site';
import { getEntries, entryHref, entryTitle } from '../lib/timeline';

export async function GET(context: APIContext) {
  const entries = await getEntries();
  return rss({
    title: `${SITE.name} | Story`,
    description: 'The journey so far: building Tradesnap, Real Logic and what happens along the way.',
    site: context.site!,
    items: entries.map((e) => ({
      title: entryTitle(e),
      description: e.data.description ?? (e.body ?? '').slice(0, 400),
      pubDate: e.data.date,
      link: entryHref(e),
    })),
  });
}
