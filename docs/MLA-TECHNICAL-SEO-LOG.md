# MLA Technical SEO Log

Full first-round report: `docs/MLA-SEO-IMPLEMENTATION-REPORT-2026-11-10.md`.

## 2026-11-11 — Controlled technical SEO audit (live site)
- NO CHANGE REQUIRED: robots.txt, sitemap (26 URLs, all 200), canonicals, indexability, H1s, titles/descriptions (no duplicates), orphan pages (none), retired-URL stubs, 404s, HTTP→HTTPS (301, verified; Outstanding item 0 below is resolved), compression (brotli), NAP, hours, llms.txt, practice-page FAQ schema.
- Implemented (owner approved): 3 homepage FAQ legal fixes; nested-link fix; animation pause; lazy video poster.
- Owner decisions: About page reviews (Muhammad Asif, Tariq Mehmood, Sana Bibi) confirmed genuine by the owner — keep. NOT approved (left as is): removing the homepage FAQPage JSON-LD (8 Q&As not visible on the page — Google guideline risk remains); "Best Lawyer" link text / meta keywords; About "decisive ... results" sentence. Logo artwork reads "Experience 27+ years" / "Results that matter" — owner to decide on new artwork.
- Open: homepage mobile lab LCP ~4.6 s (fonts: 3 families/12 styles; 1,955-element DOM with 9 hidden practice panels). Act only if Search Console field data (CrUX) shows poor LCP. www.mlabwp.com.pk could not be tested from the audit environment.

## 2026-11-11 — Media section
- Completed: `/media/` video + poster, `images/gallery/` (10 WebP), tabbed media section on `/` and `/about/`, VideoObject schema, `promo-video/` excluded from Pages build. `seo_check.py`: 0 issues. No horizontal scroll at 390 px.
- Outstanding: after go-live, validate VideoObject in the Rich Results Test; consider also uploading the video to YouTube and adding the URL to `sameAs`/`embedUrl`. Ask the owner for original full-resolution photos (uploads were 600 px) and an un-labelled original of the LHC Bahawalpur Bench photo.
- Decision: firm-attributed "28+ years" allowed (owner, 11 Nov 2026); never personal.

## Current state (2026-11-10, LIVE since the PR #1 merge; canonical fix in PR #2)
| Area | State | Tested? |
|---|---|---|
| Indexable pages | 25 (home, about, contact, 3 general, 9 practice, 10 guides) | yes, `seo_check.py` 0 issues |
| Titles / descriptions | unique on all 25 | yes |
| H1 | exactly one per page | yes |
| Canonicals | `https://mlabwp.com.pk/<page>/`, one per page | yes |
| Structured data | one `@graph` per page; no AggregateRating | JSON validity tested locally; Rich Results Test pending (needs live URL) |
| Sitemap | `/sitemap.xml`, 25 URLs, lastmod 2026-11-10 | yes |
| robots.txt | search/answer bots allowed; GPTBot and ClaudeBot disallowed | file reviewed; live fetch pending |
| Redirect stubs | 10 legacy URLs (table below) | target links checked; live behaviour pending |
| 404 | `/404.html` | local |
| Mobile | no horizontal scroll on any page at 390 px; 0 JS errors | yes (Playwright) |
| Page weight | content pages 32–44 KB HTML (was ~740 KB) | yes |
| Images | WebP; descriptive filenames and alt text; lazy loading below the fold | yes |
| /diary/ | removed from the repository and from all navigation | locally 0 links; live 404 pending merge |
| IndexNow | key file + `scripts/indexnow-submit.sh` | submission pending go-live |
| llms.txt | present | n/a |

## Legacy URL → target (canonical + meta-refresh 0 + JS replace)
criminal-advocate → criminal-lawyer · family-advocate → family-lawyer · court-marriage-lawyer → family-lawyer · property-advocate → property-lawyer ·
civil-advocate → civil-lawyer · writ-petition-lawyer → constitutional-lawyer · fia-lawyer → cyber-crime-lawyer · best-lawyer → lawyer ·
best-advocate → advocate · advocate-high-court → about (all `-bahawalpur/`). For true 301s, use Cloudflare Redirect Rules (owner approval).

## Decisions
- 2026-11-10: AggregateRating removed site-wide (self-serving and inconsistent: 47, 424 and 11 in different places).
- 2026-11-10: the duplicate homepage clones were rebuilt on the existing inner-page template (design unchanged), not deleted.
- 2026-11-10: FIA is grouped with Cybercrime (/cyber-crime-lawyer-bahawalpur/); NAB is grouped with Anti-Corruption (/nab-lawyer-bahawalpur/).
- 2026-11-10: guides are attributed to the Organization until the owner confirms personal review (see the master protocol §6).
- 2026-11-10: /diary/ removed from public deployment. Archive handed to the owner; its sample data only. Real data, if any, lives in the owner's browser localStorage (`mla_cases`).

- 2026-11-10 (owner): Google-Extended allowed; guides stay attributed to the publisher until each is reviewed; PR #1 stays draft pending the owner's legal review.

- 2026-11-10: the site is proxied by Cloudflare (`server: cloudflare`, email obfuscation on). Browser cache max-age is 600 s.

## Legal accuracy queue (found 11 Nov 2026) — L1–L4 and the H1 FIXED in PR #7 (owner: "do it yourself")
- L1 Homepage guide card: pre-arrest bail described as "before an FIR is formally registered" → reword (s.498 CrPC, apprehended arrest, mala fide).
- L2 Homepage property card: "Collector appeal within 30 days" → qualify (forum and limitation depend on the order; PLRA 1967).
- L3 Khula guide step 4: add Punjab dower-return rule (owner to verify wording).
- L4 NAB/FIA guide: outdated bail statement → reflect 2022–23 amendments (restored Sept 2024) and the Rs 500m threshold.
- H1 proposal: "Mian Aqil Nawaz — Advocate High Court, Lawyer in Bahawalpur" (owner to approve).

- L5–L12 (11 Nov 2026, owner items 1–8): 22-A designation, s.491(1A), pre-arrest FAQ, NCCIA/PDP Bill, PECA FAQs, mutation route, khula vs DMMA, Order XXXIX — FIXED (see changelog).

## Outstanding
0. **Turn on Cloudflare "Always Use HTTPS"**: http:// currently serves the site insecurely (verified live 2026-11-10).
1. Owner legal review of the 6 rebuilt or new practice pages, then merge.
2. Search Console + Bing verification and sitemap submission (owner accounts).
3. (Done 2026-11-10) Live checks: robots.txt, sitemap, /diary/ 404, redirect stubs, images. Still to do: Rich Results Test, PageSpeed baseline.
4. (Done 2026-11-10) Owner confirmed the 4.9-star rating text.
5. Confirm the opening hours and map coordinates match the Business Profile.
6. Optional: Cloudflare for true 301s and security headers (owner approval).
7. Homepage (221 KB) still carries the full text of all practice panels; consider trimming them to summaries linking to the practice pages.
8. Two legal guides (bail, civil suit) render text edge-to-edge on desktop (pre-existing layout bug, left as is under the design freeze; a 28 px side padding would fix it — owner to approve).
9. `/diary/` stays in git history (sample data only). If it ever held real data, purging history requires a force-push (owner approval).
