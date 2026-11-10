# MLA Changelog

Newest first. Branch: `claude/hyperframes-repository-76fmfa`. Status key: **Completed** (in branch) · **Tested** · **Awaiting authorization** · **Not yet verified** (needs live site).

## 2026-11-10 — Second live audit (owner order) — PR #4
- Data: homepage "7 Practice Areas" → 9; "7-Domain Expertise" → "Nine Practice Areas" (all nine listed); homepage practice grid now shows all 9 cards
  (added Inheritance, Service Matters) linking to each URL; fixed "Property Advocate & Lawyer in Bahawalpur in Bahawalpur" and "Lawyeryer"; removed duplicate footer link.
- Credibility: removed "winning arguments", "it is winning", "one of the most reviewed", "hundreds of criminal matters", "countless high-profile",
  "distinguished / commanding / renowned", "a leading", "most experienced and trusted", "regularly order reinstatement with back pay".
- Legal (owner approval required before merge): PECA investigations now by NCCIA (2025 amendment) instead of FIA Cybercrime Wing (13 places);
  PECA punishment corrected (up to 14 years, s.10; s.26A up to 3 years/Rs 2m) instead of "up to 7 years"; NAB Rs 500 million threshold, amendments
  restored by the Supreme Court in Sept 2024; Service Tribunal limit "generally 30 days" instead of "90 days"; talaq notice "as soon as may be" (s.7 MFLO)
  instead of "within 90 days"; khula attributed to the Family Courts Act 1964 (Punjab) instead of DMMA 1939; maintenance statutes corrected;
  custody statement made welfare-based; "not legal advice" notice added to Service Matters, Constitutional and Cybercrime pages.
- The +923000000000 number does not appear anywhere in the repository or live HTML (it was only in the homepage schema before PR #1).

## 2026-11-10 — Live verification after PR #3
- Deployed: PR #3 merged (main = e82c354), Pages run #45 succeeded; live at 18:30:36 GMT.
- Tested live (desktop 1366 px and iPhone 13): 475+ shown 6 times on the homepage and 2 on About; rating 4.9 shown 3 times; no stale counts
  anywhere in the visible text; no horizontal scroll. Screenshots taken from the production URL.
- Found: plain http://mlabwp.com.pk/ is NOT redirected to https (served over HTTP with status 200). The site is behind Cloudflare, so the fix is
  Cloudflare → SSL/TLS → Edge Certificates → "Always Use HTTPS" = On (owner action). www → apex https works.

## 2026-11-10 — Review-count correction (owner report)
- The owner reported old counts on the live homepage. Verified: three were missed in the first pass (search looked only for the phrase
  "400+ Google Reviews"): "Over 400 five-star client reviews", the "400+ GOOGLE REVIEWS" header counter, and the "400+" stats bar.
- Fixed all three with `.mla-review-count` (8 instances now: 6 on the homepage, 2 on About). `seo_check.py` now flags ANY visible
  "<number> … reviews" that is not 475.
- Owner decision: the Google rating is 4.9. Changed the homepage 5.0 figures (3) to 4.9 via `.mla-rating`; About already said 4.9.
- Note: the site is served through Cloudflare (cache max-age 600 s). Browsers may show the old copy for up to 10 minutes after a deploy.

## 2026-11-10 — Production deployment
- Deployed: PR #1 merged to `main` (merge commit a67572d) with the owner's approval; GitHub Pages run #43 succeeded.
- Tested live: 25 sitemap pages return 200 with valid JSON-LD and one H1; 10 legacy URLs redirect; 13 images load; /diary/ returns 404;
  robots.txt, sitemap.xml, llms.txt and the IndexNow key file are live; 475+ review text and Founder Member text are live.
- Completed: IndexNow submission accepted (HTTP 202).
- Fix found by the live crawl: 24 pages had relative canonical URLs (the build script's link rewrite ran after the canonicals were written).
  Made them absolute and added an "absolute canonical" test to `scripts/seo_check.py`. Awaiting authorization: PR #2.
- Environment: created the personal cloud environment "businesswebsite" (allows api.indexnow.org and mlabwp.com.pk) for live checks.

## 2026-11-10 — Digital Authority mandate
- Completed and tested: review count set to 475+ in every visible place (`.mla-review-count`); old 400+, 424+ and 47 figures removed.
- Completed and tested: `/diary/` app removed from the repository and from all navigation. Archive delivered privately to the owner.
- Completed: robots.txt rebuilt from current vendor crawler documentation (search allowed; GPTBot and ClaudeBot disallowed).
- Completed: legal-guide bylines (publisher, principal, jurisdiction, date, disclaimer, practice-page link); Article schema `about`, `datePublished`.
- Completed: Person schema enriched (knowsAbout, workLocation, telephone); WebSite alternate names.
- Completed: `llms.txt`, IndexNow key and submit script, `scripts/seo_check.py`.
- Completed: project memory: `CLAUDE.md` and `docs/MLA-*.md`.
- Completed and tested: restored the About-page portrait (it had been replaced by the logo in the first round).
- Owner decisions: 4.9-star rating text confirmed; Google-Extended allowed; guide bylines stay "Published by" for now.
- Awaiting authorization: draft PR #1 (https://github.com/aqilnawaz-sketch/businesswebsite/pull/1), pending the owner's legal review.
- Not yet verified: all live behaviour (awaiting merge).

## 2026-11-10 — Developer Implementation Order (first SEO round)
- Rebuilt criminal, family, property, civil and NAB pages (previously homepage copies); new inheritance page. Awaiting legal review.
- 10 duplicate URLs turned into redirect stubs; canonicals normalised to trailing slash; sitemap regenerated; 404 page.
- One JSON-LD graph per page; AggregateRating removed; wrong schema phone number fixed.
- Removed the 711 KB embedded logo from every page; descriptive image names and alt text; lazy loading; mobile CSS for inner pages.
- Founder Member and Owner/Principal roles stated on the homepage and About page.

## 2026-11-10 — Promo video
- `promo-video/`: 22-second HyperFrames promo (rendered MP4 included). Disallowed in robots.txt.
