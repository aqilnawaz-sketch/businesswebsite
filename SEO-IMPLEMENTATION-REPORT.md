# MLA SEO Implementation Report

Website: https://mlabwp.com.pk · Branch: `claude/hyperframes-repository-76fmfa` · Date: 10 November 2026

Status: **implemented in the repository, not yet live.** Changes go live when this branch is merged into the branch GitHub Pages publishes from.

> **Before merging:** Mian Aqil Nawaz must review the legal text on the six rebuilt or new practice pages listed in section 3. Every page carries a "general information, not legal advice" notice. No judgments or case citations were added; only statutes are named.

---

## 1. Audit findings (before)

| # | Finding | Impact |
|---|---|---|
| 1 | 15 URLs (criminal, family, property, civil, FIA, NAB, writ, court marriage, "best lawyer", the "advocate" variants) were full copies of the homepage with only the title changed. They had no meta description and two H1s each. | Duplicate content. The primary keywords (criminal, family and property lawyer) had no real page. |
| 2 | Every content page embedded the logo as a 711 KB base64 string. | Pages weighed about 740 KB each, slowing mobile loading. |
| 3 | Review markup was inconsistent and self-serving: `reviewCount` 47 on subpages, 424 on the homepage, 11 in `data/reviews.json`, and "400+/424+" in visible text. | Risks a Google manual action under the review-snippet policy, and contradicts the "no fabricated ratings" rule. |
| 4 | The homepage structured data had the phone number **+923000000000**. | NAP inconsistency. |
| 5 | The LegalService JSON-LD on `/advocate-bahawalpur` and `/lawyer-near-me-bahawalpur` was invalid JSON. | Search engines ignored it. |
| 6 | Canonical URLs had no trailing slash, but GitHub Pages serves folders at `/page/` (it redirects `/page` → `/page/`). The sitemap used the redirecting form. | Canonical and sitemap entries pointed at redirects. |
| 7 | Practice-area links were `javascript:void(0)`, and the footer links on inner pages called functions those pages don't load. | Internal links were not crawlable, and the footer did nothing on inner pages. |
| 8 | Inner pages had no responsive CSS. Header, sidebar and review grids overflowed on phones (pages 864–933 px wide on a 390 px screen). | Mobile-first indexing problem. |
| 9 | All images shared the same alt text and had generic filenames (`image_09.webp`). | Weak image SEO and accessibility. |
| 10 | `robots.txt` explicitly allowed GPTBot and ClaudeBot, and the private case diary (`/diary/`) was crawlable and linked from the menu. | Didn't match the crawler policy, and exposed an internal tool. |
| 11 | `index.html.backup` (2.9 MB) and helper scripts were publicly served. There was no 404 page. | Clutter and wasted crawl budget. |
| 12 | The Founder Member and Owner/Principal roles weren't stated as specified. | Identity and E-E-A-T attribution. |

## 2. Changes implemented

**Identity and NAP**
- One consistent identity everywhere: Mian Law Associates; Mian Aqil Nawaz, Advocate High Court (Owner and Principal Advocate); Mian Aumer Nawaz, Advocate High Court (Founder Member); Chamber No. 39, District Courts, Bahawalpur, Punjab; +92 333 362 1111.
- Homepage heritage text and the About page now state both roles. The wrong schema phone number is corrected.

**Structured data** (one validated JSON-LD `@graph` per page)
- `LegalService` (a LocalBusiness subtype) with address, geo, opening hours, area served, founder, employee and sameAs.
- `Person` for Mian Aqil Nawaz and for Mian Aumer Nawaz.
- `WebSite`, `WebPage` (`AboutPage` / `ContactPage` where relevant) and `BreadcrumbList` on every inner page.
- `Service` on all 9 practice-area pages, and `Article` on the 10 legal guides.
- `FAQPage` only where the same questions are visible on the page.
- **All `AggregateRating` markup removed.** No ratings or reviews are marked up.

**On-page**
- Unique title and meta description on every indexable page (checked automatically: 0 duplicates). The homepage title is shortened from 136 to 71 characters.
- Exactly one H1 per page. The new pages use H2/H3 sections.
- Canonical URLs normalised to `https://mlabwp.com.pk/<page>/`.
- Full Open Graph and Twitter card tags, with a new 1200×630 share image (`/images/mian-law-associates-og.jpg`).
- Descriptive alt text per image. Seven images renamed to descriptive filenames, with all references updated.
- Practice-area cards and footer links now point to real URLs. On the homepage they still open the in-page panels for visitors.
- The sidebar on every inner page links to all 9 practice areas. The footer gains Service Matters and Inheritance.
- The homepage keyword boxes now link to their practice pages.

**Technical**
- Removed the embedded 711 KB logo: content pages are now 32–44 KB of HTML instead of about 740 KB (roughly 95% smaller).
- Added `loading="lazy"` and `decoding="async"` to below-the-fold images. The logo and hero image load eagerly.
- Mobile CSS (phones only; desktop is pixel-identical, verified by before/after screenshots): no page scrolls sideways at 390 px.
- `robots.txt` rewritten (section 6). `sitemap.xml` regenerated with 25 canonical URLs and `lastmod`.
- `404.html` added, linking to every practice area.
- `/diary/` pages set to `noindex,nofollow` and disallowed in robots.txt. The menu link is kept but marked `rel="nofollow"`.
- Removed `index.html.backup`, `emojis_found.json`, `lines_with_emojis.txt`, `move_faq.py` and `move_faq_to_footer.py`. All remain in git history.
- `<meta name="referrer">` added. README rewritten.

## 3. Pages

Each practice area keeps its own URL, title, H1, content, schema and contact links.

| Practice area | URL | Status |
|---|---|---|
| Civil Law | /civil-lawyer-bahawalpur/ | **Rebuilt** with original content (was a homepage copy) |
| Criminal Law and Bail | /criminal-lawyer-bahawalpur/ | **Rebuilt** |
| Family Law and Khula (incl. court marriage) | /family-lawyer-bahawalpur/ | **Rebuilt** |
| Property and Revenue | /property-lawyer-bahawalpur/ | **Rebuilt** |
| Inheritance and Succession | /inheritance-lawyer-bahawalpur/ | **New page** |
| Service Matters | /service-matters-lawyer-bahawalpur/ | Optimised |
| Constitutional Petitions | /constitutional-lawyer-bahawalpur/ | Optimised |
| FIA and Cybercrime | /cyber-crime-lawyer-bahawalpur/ | Optimised (title now targets "FIA Cyber Crime Lawyer") |
| Anti-Corruption and NAB | /nab-lawyer-bahawalpur/ | **Rebuilt** |

Also optimised: Home, About, Contact, `/lawyer-bahawalpur/`, `/advocate-bahawalpur/`, `/lawyer-near-me-bahawalpur/`, and the 10 legal guides.

The rebuilt pages use the existing inner-page design (the same template as Service Matters and Constitutional). They previously showed a full copy of the homepage.

**Redirects.** These duplicate URLs now forward to the page covering the same topic. They are not deleted, so existing links and rankings carry over.

| Old URL | Now goes to |
|---|---|
| /criminal-advocate-bahawalpur/ | /criminal-lawyer-bahawalpur/ |
| /family-advocate-bahawalpur/ | /family-lawyer-bahawalpur/ |
| /court-marriage-lawyer-bahawalpur/ | /family-lawyer-bahawalpur/ |
| /property-advocate-bahawalpur/ | /property-lawyer-bahawalpur/ |
| /civil-advocate-bahawalpur/ | /civil-lawyer-bahawalpur/ |
| /writ-petition-lawyer-bahawalpur/ | /constitutional-lawyer-bahawalpur/ |
| /fia-lawyer-bahawalpur/ | /cyber-crime-lawyer-bahawalpur/ |
| /best-lawyer-bahawalpur/ | /lawyer-bahawalpur/ |
| /best-advocate-bahawalpur/ | /advocate-bahawalpur/ |
| /advocate-high-court-bahawalpur/ | /about/ |

**Important:** GitHub Pages cannot send true server-side 301 redirects. Each old URL uses an instant meta-refresh plus a canonical tag, which Google documents as treated like a permanent redirect. For true 301s, put the domain behind Cloudflare (free plan) and add Redirect Rules for the table above.

## 4. Validation results
- JSON-LD: every block on all 25 indexable pages parses as valid JSON (automated check).
- Internal links and image paths: 0 broken (automated crawl of all pages).
- Titles and descriptions: 0 duplicates, 0 missing. H1: exactly one per page. Canonical: exactly one per page.
- Mobile at 390 px: 0 pages with horizontal scroll, 0 JavaScript errors.
- **Still to run after merge** (needs the live URL): Google Rich Results Test and the Schema.org Validator on Home, one practice page, one guide and About.

## 5. Sitemap and robots
- https://mlabwp.com.pk/sitemap.xml (25 URLs)
- https://mlabwp.com.pk/robots.txt

## 6. Crawler access
| Crawler | Access |
|---|---|
| Googlebot, Bingbot, OAI-SearchBot, all other search crawlers | Allowed (except /diary/ and /promo-video/) |
| GPTBot (OpenAI training), ClaudeBot (Anthropic training) | **Disallowed**: not authorised by default, per the spec. Change to `Allow: /` in robots.txt if the owner approves. |

Also note: GitHub Pages has no bot firewall, so nothing else blocks crawlers. If Cloudflare is added later, check that its "Block AI bots" and Bot Fight settings don't block search crawlers.

## 7–8. Google Search Console / Bing Webmaster Tools
**Not done: needs the owner's accounts.** Steps:
1. Search Console → Add property → **Domain** `mlabwp.com.pk` → add the TXT record at the domain registrar (this covers http/https and www/non-www).
2. Submit `https://mlabwp.com.pk/sitemap.xml`. Use URL Inspection → Request indexing for the nine practice pages.
3. Bing Webmaster Tools → Import from Google Search Console → submit the sitemap.
4. If you'd rather use an HTML meta-tag verification, send me the code and I'll add it.

**GitHub Pages settings to confirm:** Settings → Pages → custom domain `mlabwp.com.pk`, and **Enforce HTTPS** ticked. If `www.mlabwp.com.pk` should work, add a `CNAME` DNS record for `www` pointing to the GitHub Pages host; GitHub then redirects www to the apex automatically.

## 10. Performance (before / after)
| Page | HTML before | HTML after |
|---|---|---|
| Typical content page | ~740 KB | 32–44 KB |
| Homepage | 215 KB | 221 KB (added schema and links) |

Field Core Web Vitals (LCP, INP, CLS) can only be measured on the live site. Run PageSpeed Insights on Home and `/criminal-lawyer-bahawalpur/` after merge, and watch the Core Web Vitals report in Search Console (it needs about 28 days of data).

## 11. Outstanding issues / decisions for the owner
1. **Legal review** of the six rebuilt or new pages before merge.
2. **Review count:** the homepage shows "400+ / 424+ Google Reviews"; `data/reviews.json` has 11. Please check the real count on the Google Business Profile and give it to me to update. Until then, the visible text is unchanged and no rating is marked up.
3. **True 301s** need Cloudflare or similar (section 3).
4. **Homepage size:** the homepage still holds the full text of all 7 practice panels (221 KB) and overlaps with the practice pages. A later step could shorten the panels to summaries that link to each page.
5. **Security headers** (HSTS, CSP, X-Frame-Options) can't be set on GitHub Pages; this needs Cloudflare or another host.
6. **Search Console, Bing and Google Business Profile** actions need the owner's logins. GBP name and categories were not touched.
7. `/diary/` is a case-management tool on a public website. Even with noindex, anyone with the URL can open it. If it will ever hold real client data, move it off the public site.

## 12. Next 90 days
- **Weeks 1–2:** merge, verify Search Console and Bing, submit the sitemap, request indexing of the 9 practice pages, run the Rich Results Test, and record a PageSpeed baseline.
- **Weeks 2–4:** link each practice page from the Google Business Profile services section. Make sure the name, address and phone are identical on Facebook, LinkedIn and legal directories.
- **Monthly:** publish 2 reviewed legal guides, for example a succession certificate guide, a guide to illegal dispossession complaints, or a maintenance claims guide. Ask satisfied clients for genuine Google reviews (never incentivised).
- **Day 30 / 60 / 90:** report from Search Console: indexed vs non-indexed pages, impressions, clicks, CTR, average position per practice page, queries per page (to spot cannibalisation) and Core Web Vitals.

Rankings are not guaranteed. Success is measured against actual Search Console data.
