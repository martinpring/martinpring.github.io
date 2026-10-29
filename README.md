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
| Stories, posts, milestones and roles | `src/content/story/**/*.md`; views in `src/pages/story/` |
| Global styles and colour tokens | `src/styles/global.css` |
| Static files (favicons, `CNAME`, images) | `public/` |

## Using real screenshots in the work strip

Put the image in `public/images/work/` (4:3 works best, e.g. 1200×900) and add
`image: '/images/work/<file>'` to that project in `src/projects.ts`. It replaces the drawn screen.

## The /story timeline

`/story` has two views:

- **`/story`**: stories and posts, newest first, in a vertical list grouped by year.
- **`/story/timeline`**: roles, milestones and stories, oldest first, as a grid of years. Role
  descriptions open on click.

Every entry is a Markdown file in `src/content/story/` (subfolders are fine), with one of four kinds:

| `kind` | Use it for | Shows as |
|---|---|---|
| `story` (default) | Long-form writing | Title and description on the timeline, full text on `/story/<file-name>` |
| `post` | Short moments, copied LinkedIn or Instagram posts | Full text (and image) on the timeline, "via LinkedIn ↗" link back |
| `milestone` | One-line markers: a launch, a first customer, a hire | Highlighted line with a diamond marker |
| `role` | Jobs and positions (your LinkedIn experience lives in `src/content/story/work/`) | Title, date range and place, plus the description. Use `precision: month`, `end:` a date or `present`, and `place:` |

```md
---
kind: post                 # story | post | milestone
title: "Optional for posts"
description: "Required for stories"
date: 2026-10-27
source: linkedin           # linkedin | instagram | x | site (optional)
url: https://www.linkedin.com/feed/update/...   # link back to the original (optional)
image: /images/story/2026-10-27-desk.jpg        # file under public/ (optional)
imageAlt: "What the photo shows"
draft: true                # drafts show in `npm run dev` only, never on the live site
---

The text of the entry.
```

Push to `master` and the site redeploys. The RSS feed (`/rss.xml`, and `/feed.xml` for old
subscribers) includes stories, posts and milestones, but not roles.

### Importing LinkedIn and Instagram posts

Both importers read the data export you download from the platform and write one **draft** per
post, so nothing goes live until you've read it and set `draft: false`. Re-running is safe:
existing files are left alone. Add `--since 2026-01-01` to skip older posts, or `--dry-run` to
see what would happen.

```sh
# LinkedIn: Settings → Data privacy → Get a copy of your data → Posts. Unzip, then:
npm run import:linkedin -- ~/Downloads/linkedin-export/Shares.csv

# Instagram: Accounts Center → Your information and permissions → Download your information
# → Posts, format JSON. Unzip, then:
npm run import:instagram -- ~/Downloads/instagram-export
```

- LinkedIn entries link back to the original post. Their images aren't downloaded (LinkedIn's
  media links need a login), so add your own copy under `public/images/story/` if you want one.
- Instagram entries get their first photo copied to `public/images/story/`. Videos are skipped.
  The export has no post links, so add `url:` yourself if you want a "via Instagram" link.

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `master`.
Repo **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.
The custom domain comes from `public/CNAME` (`www.martinpring.com`).
