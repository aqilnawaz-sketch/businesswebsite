# MLA SEO Master Protocol (standing instructions)

Source mandates: the owner's "Developer Implementation Order" and the "Digital Authority Supreme Master Mandate" (both 10 Nov 2026).
This file is the condensed, current version. If a future instruction conflicts with it, ask the owner and then update this file.

## 1. Objective
Make Mian Aqil Nawaz (Advocate High Court) and Mian Law Associates accurately discoverable and identifiable on Google
(Search, Maps, AI Overviews/AI Mode), Bing/Copilot, DuckDuckGo, Yahoo, Brave, ChatGPT search, Claude, Perplexity and Gemini,
through accurate, helpful, crawlable content. No deceptive SEO, fake endorsements, fake reviews, fake rankings or invented credentials.

## 2. Design freeze
Preserve layout, colours (gold #c9a444 / dark #0c0c0e family), the logo, the fonts (Cinzel, Cormorant Garamond, Playfair Display),
navigation and visual identity. Allowed: metadata, schema, alt text, internal links, accessibility, performance, and mobile fixes that
do not change the desktop appearance. Check every change with before/after screenshots at 1366 px and 390 px.

## 3. Page architecture
- **Homepage** `/`: general "lawyer / advocate in Bahawalpur" and brand searches.
- **Nine practice pages** (each its own URL, title, description, one H1, original content, Pakistani + Punjab legal framework,
  FAQs, internal links, contact CTA, Service + FAQPage schema). Never merge them:

| # | Area | URL |
|---|---|---|
| 1 | Civil Law | /civil-lawyer-bahawalpur/ |
| 2 | Criminal Law & Bail | /criminal-lawyer-bahawalpur/ |
| 3 | Family Law & Khula | /family-lawyer-bahawalpur/ |
| 4 | Property & Revenue | /property-lawyer-bahawalpur/ |
| 5 | Inheritance & Succession | /inheritance-lawyer-bahawalpur/ |
| 6 | Service Matters | /service-matters-lawyer-bahawalpur/ |
| 7 | Constitutional Petitions | /constitutional-lawyer-bahawalpur/ |
| 8 | FIA & Cybercrime | /cyber-crime-lawyer-bahawalpur/ |
| 9 | Anti-Corruption & NAB | /nab-lawyer-bahawalpur/ |

- Entity pages: /about/ (Person), /contact/. Supporting pages: /lawyer-bahawalpur/, /advocate-bahawalpur/, /lawyer-near-me-bahawalpur/.
- Legal guides live under /legal-guides/<slug>/ and must link to their practice page.
- **Do not create thin or duplicate location pages.** The 10 legacy duplicate URLs are redirect stubs (see the technical log). Keep them; never delete an indexed URL without a redirect.
- URL format: lowercase, hyphenated, **trailing slash** (GitHub Pages serves folders at `/page/`). Canonical = `https://mlabwp.com.pk/<page>/`.

## 4. On-page rules
Unique title (≤ 70 chars where possible) and meta description (≈ 120–165 chars); exactly one H1; logical H2/H3; descriptive image filenames and alt
text; Open Graph and Twitter tags (image `/images/mian-law-associates-og.jpg`); breadcrumbs on inner pages; contextual internal links.

## 5. Structured data
One JSON-LD `@graph` per page, containing: `LegalService` (#organization), `Person` (#person = Mian Aqil Nawaz; #founder = Mian Aumer Nawaz),
`WebSite`, `WebPage` (+AboutPage/ContactPage), `BreadcrumbList`, `Service` (practice pages), `Article` (guides), and `FAQPage` only when the same
Q&A is visible on the page. **Never** AggregateRating/Review. Validate with Google's Rich Results Test and validator.schema.org after deploy.

## 6. Legal content standard
Original; jurisdiction stated (Pakistan / Punjab); only genuine statutes and provisions; **no case citations unless the owner supplies and
verifies them**; procedure explained; "general information, not legal advice" notice; author/publisher and update date shown; link to the practice page.
New or materially revised legal content requires the owner's approval before merge.

Attribution decision (2026-11-10): guides show "Published by Mian Law Associates · Principal Advocate: Mian Aqil Nawaz". Article schema `author` is the
Organization. When the owner confirms he has reviewed a page, change the byline to "Reviewed by Mian Aqil Nawaz, Advocate High Court" with the review
date, and set the schema `author`/`reviewedBy` to `#person` for that page.

## 7. Crawler policy
See `MLA-AI-DISCOVERABILITY.md`. Search/answer crawlers allowed; GPTBot and ClaudeBot disallowed by default; Google-Extended is the owner's decision.

## 8. Owner approval boundaries
Approval is required for: production merge or deploy; DNS/nameservers/Cloudflare; GitHub permission changes; Search Console, Bing, Business Profile,
LinkedIn, Facebook and YouTube actions; publishing new or materially revised legal content; deleting possibly important data; identity, address, phone
or category changes; paid services; account-level Claude settings. Everything else in the repository may be done autonomously on the working branch.
