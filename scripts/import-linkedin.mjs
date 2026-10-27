#!/usr/bin/env node
// Import your LinkedIn posts into the /story timeline as draft entries.
//
// 1. LinkedIn → Settings → Data privacy → Get a copy of your data → tick "Posts" (Shares) → request.
// 2. Unzip the archive you get by email and find Shares.csv.
// 3. npm run import:linkedin -- path/to/Shares.csv [--since 2026-01-01] [--dry-run]
//
// Every post becomes src/content/story/linkedin/<date>-<slug>.md with `draft: true`.
// Read them in `npm run dev`, delete what you don't want, and set `draft: false` on the keepers.
// Images in posts are not downloaded (LinkedIn's media links need a login); add your own copy
// under public/images/story/ and set `image:` if you want one shown.
import fs from 'node:fs';
import path from 'node:path';
import { STORY_DIR, isoDay, slugify, toMarkdown, writeEntry, parseArgs } from './lib/entry.mjs';

const args = parseArgs(process.argv.slice(2));
const file = args._[0];
if (!file || !fs.existsSync(file)) {
  console.error('Usage: npm run import:linkedin -- path/to/Shares.csv [--since YYYY-MM-DD] [--dry-run]');
  process.exit(1);
}

/** RFC 4180 CSV parser: quoted fields may contain commas, newlines and "" escapes. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += c;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((f) => f.trim()));
}

const rows = parseCsv(fs.readFileSync(file, 'utf8').replace(/^﻿/, ''));
const header = rows.shift().map((h) => h.trim());
const col = (name) => header.findIndex((h) => h.toLowerCase() === name.toLowerCase());
const iDate = col('Date');
const iLink = col('ShareLink');
const iText = col('ShareCommentary');
const iShared = col('SharedUrl');
if (iDate < 0 || iText < 0) {
  console.error(`Unexpected columns in ${path.basename(file)}: ${header.join(', ')}`);
  process.exit(1);
}

const since = args.since ? new Date(args.since) : null;
const outDir = path.join(STORY_DIR, 'linkedin');
let written = 0;
let skipped = 0;
let existing = 0;

for (const r of rows) {
  // LinkedIn's export sometimes wraps the whole post in an extra pair of quotes.
  const text = (r[iText] ?? '').replace(/^"([\s\S]*)"$/, '$1').trim();
  const date = new Date(`${r[iDate].trim().replace(' ', 'T')}Z`);
  if (!text || Number.isNaN(date.valueOf()) || (since && date < since)) {
    skipped++;
    continue;
  }
  const day = isoDay(date);
  let body = toMarkdown(text);
  const shared = iShared >= 0 ? r[iShared]?.trim() : '';
  if (shared) body += `\n\n[${shared}](${shared})`;

  const result = writeEntry({
    dir: outDir,
    file: `${day}-${slugify(text.split('\n')[0])}.md`,
    data: { date: day, source: 'linkedin', url: r[iLink]?.trim() || undefined },
    body,
    dryRun: !!args['dry-run'],
  });
  result === 'written' ? written++ : existing++;
}

console.log(
  `${args['dry-run'] ? '[dry run] ' : ''}LinkedIn: ${written} new draft(s) in ${path.relative(process.cwd(), outDir)}, ` +
    `${existing} already there, ${skipped} skipped (empty, reshares without text, or before --since).`,
);
