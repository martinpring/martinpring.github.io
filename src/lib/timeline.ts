import { getCollection, type CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'story'>;

/** All published entries, newest first. Drafts are included only in `npm run dev`. */
export async function getEntries(): Promise<Entry[]> {
  const entries = await getCollection('story', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Entries grouped by year, years newest first. */
export function byYear(entries: Entry[]): [number, Entry[]][] {
  const map = new Map<number, Entry[]>();
  for (const e of entries) {
    const y = e.data.date.getFullYear();
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(e);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

/** Link target for an entry: stories get their own page, everything else an anchor on the timeline. */
export function entryHref(e: Entry): string {
  return e.data.kind === 'story' ? `/story/${e.id}` : `/story#${e.id}`;
}

/** A short plain-text title for feeds and lists, falling back to the first line of a post. */
export function entryTitle(e: Entry): string {
  if (e.data.title) return e.data.title;
  const first = (e.body ?? '').replace(/[#*_>`\[\]]/g, '').trim().split(/\n/)[0] ?? '';
  return first.length > 80 ? `${first.slice(0, 77)}…` : first || 'Post';
}

export const SOURCE_LABEL: Record<string, string> = {
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  x: 'X',
  site: 'this site',
};
