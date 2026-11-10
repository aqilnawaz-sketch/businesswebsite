# MLA Changelog

Newest first. Branch: `claude/hyperframes-repository-76fmfa`. Status key: **Completed** (in branch) · **Tested** · **Awaiting authorization** · **Not yet verified** (needs live site).

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
