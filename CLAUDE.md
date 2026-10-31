# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page plus lead capture for LVT Law Firm (Công ty Luật LVT, Vietnam). The "CRM" is the lead pipeline below, not an in-app admin UI. `docs/design.md` is the source of truth for page sections, content and the design system: read it before any work.

## Commands

- `npm run dev` – dev server at http://localhost:4321 (draft blog posts are visible here only)
- `npm run build` – `astro check` (type check) then static build to `dist/`
- `npm run check` – type check only
- `npx astro dev stop` – Astro 7 allows one dev server per project; stop it before starting another (or pass `--force`)

No test suite. Verify UI changes by rendering at 390px and 1440px (and 320px for overflow).

## Stack

Astro 7 (static output) + Tailwind CSS v4 via `@tailwindcss/vite` (no tailwind.config; tokens live in `@theme` in `src/styles/global.css`). Fonts self-hosted through `@fontsource`. Custom reusable classes are declared with `@utility` (v4 cannot `@apply` classes from `@layer components`).

## Where content lives

All firm content is data, not markup:
- `src/data/site.ts` – firm name, slogan, hotline, email, address, Zalo OA link, Google Maps embed URL.
- `src/data/practice-areas.ts` – practice areas; drives both the homepage section and the form select.
- `src/data/lawyers.ts` – Team section, one object per lawyer card. Photos go in `static/img/luat-su/` and are referenced by file name (resolved with `import.meta.glob` in `Team.astro`).
- `src/data/featured-cases.ts` – "Dự án tiêu biểu" (title + description, no lawyer). Photos go in `static/img/du-an/`, referenced by file name like lawyers. Publish only case details the firm has approved.
- `src/content/blog/*.md` – "Kiến thức pháp lý" posts (content collection in `src/content.config.ts`). File name = URL slug under `/kien-thuc/`. `draft: true` posts appear only in dev.

Values written as `[...]` are placeholders; `Slot.astro` renders them with a dashed red outline so they are obvious on the page. Never replace a placeholder with a plausible-looking invented value.

## Lead pipeline

Contact form (`Contact.astro` -> `src/lib/leads.ts`) -> Supabase `leads` table via REST -> Supabase Database Webhook -> Zapier -> Google Sheets -> Power BI (lead count, by legal field, by status).

- Schema and security: `supabase/migrations/0001_create_leads.sql` (run manually in the Supabase SQL editor; no Supabase CLI in this repo).
- `status` is one of `Khách hàng mới` (default), `Đang tư vấn`, `Đã ký hợp đồng`; staff change it in the Table Editor. The website never sets it.
- `legal_field` values are the `name`s in `practice-areas.ts` plus `Lĩnh vực khác`. The SQL CHECK constraint lists the same strings: change both together. Renaming a value splits historical Power BI data.
- Zapier and the Sheet map column names; renaming or dropping a column breaks the pipeline silently.
- The browser uses `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY` (see `.env.example`). anon has column-level INSERT only, no SELECT, so inserts use `Prefer: return=minimal`. Never put the service_role/secret key in a `PUBLIC_` variable.

## Design

- Any UI work follows the user-level `front-end-design` skill (`D:/programming/skills`).
- Update the "Design system" section of `docs/design.md` when tokens, fonts or signature elements change.
- Visible copy is Vietnamese; code and comments stay English.
- Mobile-first. A fixed bottom bar on mobile (`MobileCallBar.astro`) carries the tel: hotline and Zalo; the body has bottom padding for it.
- `docs/references/` is inspiration only (design-02 is the main tone) and never ships.

## Assets

`static/img/` holds real firm photos, imported through `astro:assets` so they are optimized at build. It is not Astro's publicDir; `public/` is (favicon only).
- `docs/excluded-assets/congtyluatlvt_4.jpg` is a third-party news-app screenshot, deliberately removed from the site. Do not reintroduce it.
- `congtyluatlvt_5.jpg` looks like a press photo and is unused until the firm confirms rights to it.
- Activity captions state only what is readable on the banners in each photo.

## Content that must not be invented

Lawyer names, degrees, practice certificate numbers, years of experience, case counts, office address, hotline, email and Zalo OA must come from the firm. Fabricated credentials on a law firm site are a real liability. Blog posts on legal rules need a lawyer's review; do not write legal content as fact.
