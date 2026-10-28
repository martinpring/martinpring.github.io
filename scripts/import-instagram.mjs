#!/usr/bin/env node
// Import your Instagram posts into the /story timeline as draft entries.
//
// 1. Instagram → Accounts Center → Your information and permissions → Download your information.
//    Choose "Posts", format JSON, media quality as you like.
// 2. Unzip the archive.
// 3. npm run import:instagram -- path/to/unzipped-export [--since 2026-01-01] [--dry-run]
//
// Every post becomes src/content/story/instagram/<date>-<slug>.md with `draft: true`, and its
// first photo is copied to public/images/story/. Videos are not copied; the entry notes it.
// The export has no links to the original posts, so these entries have no "via Instagram" link
// unless you add `url:` yourself.
import fs from 'node:fs';
import path from 'node:path';
import { STORY_DIR, isoDay, slugify, toMarkdown, writeEntry, parseArgs } from './lib/entry.mjs';

const args = parseArgs(process.argv.slice(2));
const root = args._[0];
if (!root || !fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
  console.error('Usage: npm run import:instagram -- path/to/unzipped-export [--since YYYY-MM-DD] [--dry-run]');
  process.exit(1);
}

/** Instagram exports UTF-8 text as if it were Latin-1 ("Ã¥" instead of "å"). Undo that. */
const fixText = (s = '') => {
  try {
    const fixed = Buffer.from(s, 'latin1').toString('utf8');
    return fixed.includes('�') ? s : fixed;
  } catch {
    return s;
  }
};

/** Find posts_*.json anywhere in the export (the folder layout changes between export versions). */
function findPostFiles(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) findPostFiles(p, out);
    else if (/^posts_\d+\.json$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = findPostFiles(root);
if (files.length === 0) {
  console.error(`No posts_*.json found under ${root}. Make sure "Posts" was included and the format was JSON.`);
  process.exit(1);
}

const since = args.since ? new Date(args.since) : null;
const outDir = path.join(STORY_DIR, 'instagram');
const imgDir = path.resolve('public/images/story');
const dryRun = !!args['dry-run'];
let written = 0;
let existing = 0;
let skipped = 0;

for (const f of files) {
  const posts = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const post of Array.isArray(posts) ? posts : []) {
    const media = post.media ?? [];
    const ts = post.creation_timestamp ?? media[0]?.creation_timestamp;
    const caption = fixText(post.title || media[0]?.title || '').trim();
    if (!ts) {
      skipped++;
      continue;
    }
    const date = new Date(ts * 1000);
    if (since && date < since) {
      skipped++;
      continue;
    }
    const day = isoDay(date);
    const slug = slugify(caption.split('\n')[0] || `photo-${ts}`);
    const file = `${day}-${slug}.md`;

    // First photo, if any, is copied next to the site's images.
    let image;
    let note = '';
    const photo = media.find((m) => /\.(jpe?g|png|webp)$/i.test(m.uri ?? ''));
    if (photo) {
      const src = path.join(root, photo.uri);
      const name = `ig-${day}-${slug}${path.extname(photo.uri).toLowerCase()}`;
      if (fs.existsSync(src)) {
        if (!dryRun && !fs.existsSync(path.join(outDir, file))) {
          fs.mkdirSync(imgDir, { recursive: true });
          fs.copyFileSync(src, path.join(imgDir, name));
        }
        image = `/images/story/${name}`;
      }
    } else if (media.some((m) => /\.(mp4|mov)$/i.test(m.uri ?? ''))) {
      note = '\n\n<!-- This post was a video; videos are not imported. -->';
    }

    const result = writeEntry({
      dir: outDir,
      file,
      data: { date: day, source: 'instagram', image, imageAlt: image ? '' : undefined },
      body: (caption ? toMarkdown(caption) : '') + note,
      dryRun,
    });
    result === 'written' ? written++ : existing++;
  }
}

console.log(
  `${dryRun ? '[dry run] ' : ''}Instagram: ${written} new draft(s) in ${path.relative(process.cwd(), outDir)}, ` +
    `${existing} already there, ${skipped} skipped.`,
);
