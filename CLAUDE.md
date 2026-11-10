# CLAUDE.md — Mian Law Associates website (mlabwp.com.pk)

This repository is the live website of **Mian Law Associates (MLA)**, Bahawalpur. GitHub Pages publishes the
production branch to https://mlabwp.com.pk. **Every file in this repository is publicly downloadable once merged.**

## Read before changing anything
1. `docs/MLA-BUSINESS-IDENTITY.md`: the approved name, address, phone, people and review count. Never deviate.
2. `docs/MLA-SEO-MASTER-PROTOCOL.md`: the standing rules: design freeze, the nine practice pages, content and schema rules.
3. `docs/MLA-DEPLOYMENT-PROTOCOL.md`: branches, checks to run, and what needs owner approval.
4. Read the topic file for the task at hand:
   - `docs/MLA-KEYWORD-MAP.md`: which page owns which keyword (prevents cannibalisation)
   - `docs/MLA-AI-DISCOVERABILITY.md`: crawler policy, llms.txt, IndexNow, AI search
   - `docs/MLA-TECHNICAL-SEO-LOG.md`: technical state of the site and the audit history
   - `docs/MLA-90-DAY-SEO-ROADMAP.md` and `docs/MLA-SEO-MONITORING.md`: plan and metrics
5. After substantial work, update `docs/MLA-CHANGELOG.md` and `docs/MLA-TECHNICAL-SEO-LOG.md` (completed, outstanding, decisions).

## Non-negotiable rules (summary — the docs are authoritative)
- **Do not redesign.** Keep the layout, colours, logo, fonts, navigation and visual identity. SEO, accessibility and performance fixes only.
- **Nine separate practice-area pages, never merged:** Civil, Criminal & Bail, Family & Khula, Property & Revenue,
  Inheritance & Succession, Service Matters, Constitutional Petitions, FIA & Cybercrime, Anti-Corruption & NAB.
- **Identity:** Mian Aqil Nawaz, Advocate High Court = Owner and Principal Advocate. Mian Aumer Nawaz, Advocate High Court = Founder Member.
  Chamber No. 39, District Courts, Bahawalpur. +92 333 362 1111.
- **Reviews:** show "475+ Google Reviews" via `<span class="mla-review-count">` and the rating 4.9 via `<span class="mla-rating">`. Never add AggregateRating or Review schema, and never invent counts or ratings.
- **Legal content:** no invented judgments or citations. Statutes must be real. Every page says it is general information, not advice.
  New or materially revised legal content needs the owner's approval before merge.
- **Crawlers:** allow search and answer crawlers; GPTBot and ClaudeBot are disallowed unless the owner decides otherwise.
- **Security:** no private tools or client data on this site (the /diary/ app was removed on 2026-11-10). Never commit passwords, API keys,
  client records or case details. robots.txt is not a security control.
- **Owner approval required** for: merging to production, DNS/Cloudflare, Search Console, Business Profile, social accounts,
  publishing new legal content, changing identity, and paid services.

## Quick commands
```bash
python3 -m http.server 8000                       # preview at http://localhost:8000
python3 scripts/seo_check.py                      # links, JSON-LD, titles, H1, canonicals (must report 0 issues)
grep -rl 'mla-review-count' --include=*.html .    # every place the review count appears
scripts/indexnow-submit.sh                        # ONLY after a change is live
```

Updating the review count (owner supplies the verified GBP figure): replace the text inside every
`<span class="mla-review-count">…</span>` and the homepage stat's `data-count`, then log it in `docs/MLA-CHANGELOG.md`.
