# CLAUDE.md — Mian Law Associates website (mlabwp.com.pk)

This repository is the live website of **Mian Law Associates (MLA)**, Bahawalpur. GitHub Pages publishes the
production branch to https://mlabwp.com.pk. **Every file in this repository is publicly downloadable once merged.**

## Read before changing anything
1. `docs/MLA-BUSINESS-IDENTITY.md`: the approved name, address, phone, people and review count. Never deviate.
2. `docs/MLA-SEO-MASTER-PROTOCOL.md`: the standing rules: design freeze, the nine practice pages, content and schema rules.
3. `docs/MLA-DEPLOYMENT-PROTOCOL.md`: branches, checks to run, and what needs owner approval.
4. Read the topic file for the task at hand:
   - `docs/MLA-FAQ-AND-PROCEDURE-PROTOCOL.md`: **mandatory** FAQ and legal-procedure rules (audit → recommend → owner approval → implement)
   - `docs/MLA-PHASE1-AUDIT-2026-11-10.md`: current audit, FAQ/guide opportunity maps, priorities (nothing in it is approved until the owner says so)
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
- **FAQs & procedures are mandatory strategy**, but are published in small, owner-reviewed batches (5–10 per area). Follow the 16-point guide template.
- **Legal content:** no invented judgments or citations. Statutes must be real. Every page says it is general information, not advice.
  New or materially revised legal content needs the owner's approval before merge.
- **Crawlers:** allow search and answer crawlers; GPTBot and ClaudeBot are disallowed unless the owner decides otherwise.
- **Security:** no private tools or client data on this site (the /diary/ app was removed on 2026-11-10). Never commit passwords, API keys,
  client records or case details. robots.txt is not a security control.
- **Owner approval required** for: merging to production, DNS/Cloudflare, Search Console, Business Profile, social accounts,
  publishing new legal content, changing identity, and paid services.

## Professional-claims rules (owner, 11 Nov 2026)
- Mian Aqil Nawaz is **Advocate High Court**, NOT Advocate Supreme Court. Never imply Supreme Court enrolment or practice.
  The Supreme Court may be mentioned only as an institution (e.g. a judgment restoring the NAB amendments).
- **History, firm wording only:** the chambers / Mian Law Associates were **established in 1997** (Founder Member: Mian Aumer Nawaz).
  Do NOT state a personal practice start year or "28+ years of his experience" until the owner supplies his enrolment year.
- No outcome or timing promises (same-day bail, "within hours", success rates, "results speak for themselves"), no superlatives
  ("most powerful", "top result", "most trusted"). Filing and preparation can be described as prompt; decisions rest with the court.
- Homepage: **nine practice cards AND nine detailed panels** (01/09–09/09), each linking to its dedicated page.
- Cybercrime: PECA cases are investigated by the **NCCIA** (2025 amendment). FIA keeps its other functions. Re-verify both before editing.

## Audit rules (added 11 Nov 2026 after repeated stale findings)
- **Audit the live HTML** (`curl -s "https://mlabwp.com.pk/<page>?v=$(date +%s)"`), never search snippets, AI answers or cached copies. Those can lag by weeks.
  If an audit by the owner reports issues already fixed, show the live evidence and explain the cache lag.
- **Legal accuracy covers every text block**: homepage cards, hidden/overlay panels, guide previews, FAQs and footers, not only the main pages.
- Open legal items: see "Legal accuracy queue" in `docs/MLA-TECHNICAL-SEO-LOG.md`.

## Quick commands
```bash
python3 -m http.server 8000                       # preview at http://localhost:8000
python3 scripts/seo_check.py                      # links, JSON-LD, titles, H1, canonicals (must report 0 issues)
grep -rl 'mla-review-count' --include=*.html .    # every place the review count appears
scripts/indexnow-submit.sh                        # ONLY after a change is live
```

Updating the review count (owner supplies the verified GBP figure): replace the text inside every
`<span class="mla-review-count">…</span>` and the homepage stat's `data-count`, then log it in `docs/MLA-CHANGELOG.md`.
