// Shared helpers for the import scripts.
import fs from 'node:fs';
import path from 'node:path';

export const STORY_DIR = path.resolve('src/content/story');

/** yyyy-mm-dd in Swedish time, so a late-evening post keeps its local date. */
export function isoDay(date) {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Stockholm' }).format(date);
}

export function slugify(text, max = 48) {
  const s = text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max)
    .replace(/-+$/, '');
  return s || 'post';
}

/**
 * Social post text -> safe Markdown. Keeps line breaks, and stops hashtags at the start of a
 * line from turning into headings and stray < > from being read as HTML.
 */
export function toMarkdown(text) {
  return text
    .replace(/\r\n?/g, '\n')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^(\s*)#/gm, '$1\\#')
    .trim();
}

function yamlString(s) {
  return JSON.stringify(s); // JSON strings are valid YAML double-quoted strings
}

/** Writes one draft entry unless a file with that name already exists. Returns 'written' | 'exists'. */
export function writeEntry({ dir, file, data, body, dryRun }) {
  const target = path.join(dir, file);
  if (fs.existsSync(target)) return 'exists';
  const lines = ['---', 'kind: post'];
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined || v === null || v === '') continue;
    lines.push(`${k}: ${typeof v === 'string' ? yamlString(v) : v}`);
  }
  lines.push('draft: true', '---', '', body, '');
  if (!dryRun) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(target, lines.join('\n'));
  }
  return 'written';
}

export function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        i++;
      } else args[key] = true;
    } else args._.push(a);
  }
  return args;
}
