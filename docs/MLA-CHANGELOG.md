# MLA Changelog

Newest first. Branch: `claude/hyperframes-repository-76fmfa`. Status key: **Completed** (in branch) · **Tested** · **Awaiting authorization** · **Not yet verified** (needs live site).

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
