# nurlanqadirov.az

Portfolio and case-study site for **Nurlan Qadirov**, Frontend & Full-Stack Developer in Baku, Azerbaijan.

**Live:** [www.nurlanqadirov.az](https://www.nurlanqadirov.az)

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Every page exists in Azerbaijani, English and Russian, each on its own route.

---

## What makes this more than a portfolio template

The site is written to be read by two audiences at once: people, and the search engines and AI assistants that answer questions about people.

**Trilingual at route level, not via a toggle.** Each language lives at its own URL (`/az`, `/en`, `/ru`) with localised service slugs — `/az/services/veb-sayt-hazirlanmasi` and `/en/services/web-development` are the same page in two languages. They are tied together with `hreflang` links and an `x-default` marker, so search engines index three pages instead of treating them as duplicates.

**A connected JSON-LD graph, not scattered blocks.** `Person`, `ProfessionalService`, `WebSite`, `Service`, `CreativeWork`, `FAQPage` and `BreadcrumbList` nodes are addressed by `@id` and reference each other, so a crawler can reconstruct the relationships rather than reading seven disconnected objects. See [`src/lib/structured-data.ts`](src/lib/structured-data.ts).

**Case studies with the reasoning left in.** Each project page documents the problem, what was built, the architecture layer by layer, and every technical decision with the reason behind it — including the trade-offs chosen against. The two full-stack projects also carry an FAQ that ships as `FAQPage` structured data.

**No invented numbers.** Metrics live in [`src/data/site.ts`](src/data/site.ts) and any field left `null` is hidden from both the page and the structured data. An empty section renders as nothing rather than as a placeholder.

**Machine-readable summary.** [`public/llms.txt`](public/llms.txt) gives AI assistants a plain-text overview of the services, pages and projects. [`src/app/robots.ts`](src/app/robots.ts) explicitly allows the AI crawlers by name.

**Generated social cards.** Every case study renders its own OpenGraph image at request time with the project title, category and stack — see [`src/app/[locale]/projects/[slug]/opengraph-image.tsx`](src/app/[locale]/projects/[slug]/opengraph-image.tsx).

---

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router, server components) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | lucide-react |
| Analytics | Google Analytics via `@next/third-parties` |
| Hosting | Vercel |

## Project structure

```
src/
  app/
    [locale]/
      layout.tsx                     root layout, metadata, hreflang alternates
      page.tsx                       home
      faq/                           FAQ page (FAQPage schema)
      services/                      service index + per-service pages
      projects/[slug]/               case studies + generated OG images
    opengraph-image.tsx              default social card
    robots.ts                        AI crawlers allowed by name
    sitemap.ts                       all routes × 3 locales with alternates
  components/
    HomeClient.tsx                   home page sections
    SiteChrome.tsx                   header and footer
  data/
    site.ts                          identity, contact, projects, metrics
  i18n/
    config.ts                        locales, hreflang and OG locale maps
    dictionaries/{az,en,ru}.ts       all visible copy, one file per language
    routes.ts                        localised path builders
  lib/
    structured-data.ts               JSON-LD graph builders
  middleware.ts                      locale detection and redirects
```

Content and structure are deliberately separated: `src/data/site.ts` holds only language-independent facts (URLs, tech, images), while everything a visitor reads lives in `src/i18n/dictionaries/`. Adding a language means adding one dictionary file, not touching any component.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

### Environment variables

All optional — the site builds and runs without them.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. Defaults to `https://www.nurlanqadirov.az`. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token. |

---

## Licence

The code is public so the approach can be read and learned from. The content — copy, case studies, images and personal branding — belongs to Nurlan Qadirov and is not licensed for reuse.
