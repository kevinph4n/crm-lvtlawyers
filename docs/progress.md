# Progress

## Done (2026-10-30)
- Astro + Tailwind site: homepage (hero, strengths, practice areas, team, activities, insights, contact/lead form), blog index and post pages.
- Lead form posts to Supabase REST; validated with a mocked endpoint (payload, headers, success stamp, error message when env is missing). Not yet tested against a real Supabase project.
- `supabase/migrations/0001_create_leads.sql`: leads table, status values, RLS + column-level insert grant for anon.
- `congtyluatlvt_4.jpg` moved to `docs/excluded-assets/` (third-party screenshot).
- Checked at 320 / 390 / 1440px: no horizontal overflow, no console errors.

## Waiting on the firm
- Contact details in `src/data/site.ts`: years of experience, hotline, email, address, working hours, Zalo OA link, Google Maps embed.
- Lawyers in `src/data/lawyers.ts`: names, titles, certificate numbers, practice areas, degrees, 4:5 portraits in `static/img/luat-su/`. Add one object per extra lawyer.
- Caption for `congtyluatlvt_6.jpg` (event / award name, place, date).
- Rights to `congtyluatlvt_5.jpg` (looks like a press photo; currently unused).
- Real logo to replace the temporary seal mark (`SealMark.astro`, `public/favicon.svg`).
- First real blog posts (reviewed by a lawyer).

## Next
1. Create the Supabase project, run the migration, fill `.env` from `.env.example`, submit a real test lead.
2. Supabase Database Webhook (INSERT on leads) -> Zapier Catch Hook -> Google Sheets row; connect Power BI to the Sheet.
3. Choose hosting and domain; set `site` in `astro.config.mjs`, then add a sitemap.
