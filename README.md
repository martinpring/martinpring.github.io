# martinpring.com

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | Where |
|---|---|
| Shared facts (email, links, career start year) | `src/site.ts` |
| Home page | `src/pages/index.astro` |
| Stories (blog posts) | `src/content/story/*.md`, served at `/story/<file-name>` |
| Global styles and colour tokens | `src/styles/global.css` |
| Static files (favicons, `CNAME`, images) | `public/` |

## Writing a story

Add a Markdown file to `src/content/story/`:

```md
---
title: "Title"
description: "One sentence for the list, RSS and link previews."
date: 2026-10-27
draft: false
---
```

Push to `master` and the site redeploys. The RSS feed is at `/rss.xml` (and `/feed.xml` for old subscribers).

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `master`.
Repo **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.
The custom domain comes from `public/CNAME` (`www.martinpring.com`).
