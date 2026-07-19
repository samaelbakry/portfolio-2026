# Samaa ElBakry — Portfolio

A premium, Apple-inspired personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Content is generated automatically from the uploaded CV.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
npm start
```

Ready to deploy as-is on [Vercel](https://vercel.com) — just import the repo, no extra config needed.

## Project structure

```
src/
  app/                  # App Router pages, layout, SEO (sitemap, robots), API routes
  components/
    ui/                 # Reusable primitives (Button, Badge, Card-level pieces, icons)
    sections/           # Page sections (Hero, About, Skills, Projects, Experience, Resume, Contact, Footer)
  data/
    cv.ts               # SINGLE SOURCE OF TRUTH — all copy, skills, projects & timeline data
  lib/                  # Utilities (cn helper, Framer Motion variants)
  types/                # Shared TypeScript types
public/
  images/projects/      # Project preview placeholders (SVG)
  Frontend_developer_Samaa_elbakry.pdf   # Downloadable CV (served by the Resume & Hero sections)
```

## Editing content

Everything content-related lives in `src/data/cv.ts`. Search that file for `PLACEHOLDER` to find the handful of fields that weren't in the original CV (location, database skills, live demo links) and were filled in with tasteful defaults — update them any time.

To swap in a new CV:
1. Replace `public/Frontend_developer_Samaa_elbakry.pdf` with your new file (or update `personal.resumeFileName` in `cv.ts` if the filename changes).
2. Update the structured fields in `cv.ts` to match.
3. The Resume section's "Upload New CV" control is wired up to accept a file client-side — hook it to an API route or CMS if you want it to update the live site automatically.

## Design tokens

Defined in `src/app/globals.css` under `:root` / `.dark`:
- Background: white (`#ffffff`) / near-black in dark mode
- Accent: `#FE8C00`
- Type: Manrope (display) + Inter (body), loaded via `next/font/google`
- Radius: `xl` (1.25rem) used throughout for cards, buttons, inputs

## Tech

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- lucide-react (icons)
