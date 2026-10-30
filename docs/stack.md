# Stack

| Layer | Choice | Why |
|---|---|---|
| Site | Astro 7, static output | Landing page + SEO blog; ships zero JS except the form and menu scripts. |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) | Pinned in docs/design.md. |
| Fonts | @fontsource Literata + Be Vietnam Pro | Self-hosted, full Vietnamese subset, no Google Fonts request. |
| Images | `astro:assets` + sharp | AVIF/WebP and responsive widths at build (hero 133kB -> 14-34kB). |
| Blog | Astro content collection (Markdown) | Posts are files in git; no CMS yet. |
| Leads DB | Supabase (REST insert from browser) | Pinned in docs/design.md. No supabase-js: one fetch is enough. |
| Pipeline | Supabase Database Webhook -> Zapier -> Google Sheets -> Power BI | Pinned in docs/design.md. |

Not chosen yet: hosting (any static host works: Cloudflare Pages, Netlify, Vercel), production domain.

Known trade-offs:
- Blog editing needs git/Markdown. If non-technical staff must publish, add a CMS later.
- The anon key is public by design; abuse protection is RLS + column grants + length checks + a honeypot. No rate limiting or CAPTCHA yet: if spam appears, add Cloudflare Turnstile.
- Zapier sits in the middle of the pipeline: a paused Zap or plan limit stops Sheets/Power BI updates while Supabase keeps the data.
