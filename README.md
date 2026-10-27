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
| Shared facts (email, links) | `src/site.ts` |
| Home page (ticker, intro, logo grid, CRT work strip) | `src/pages/index.astro` |
| Work strip items and logo-grid tiles | `src/projects.ts` |
| Drawn placeholder screens for the work strip | `src/components/Screen.astro` |
| Privacy page | `src/pages/privacy.astro` |
| Stories (blog posts) | `src/content/story/*.md`, served at `/story/<file-name>` |
| Global styles and colour tokens | `src/styles/global.css` |
| Static files (favicons, `CNAME`, images) | `public/` |

## Using real screenshots in the work strip

Put the image in `public/images/work/` (4:3 works best, e.g. 1200×900) and add
`image: '/images/work/<file>'` to that project in `src/projects.ts`. It replaces the drawn screen.

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
