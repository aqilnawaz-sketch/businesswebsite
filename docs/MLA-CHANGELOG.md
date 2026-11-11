# MLA Changelog

Newest first. Branch: `claude/hyperframes-repository-76fmfa`. Status key: **Completed** (in branch) · **Tested** · **Awaiting authorization** · **Not yet verified** (needs live site).

## 2026-11-11 — Homepage "Legal Blog" section: cards link to all 10 guides (LIVE)
Committed directly to `main` as `de31e70` from the GitHub web editor (no pull request). Owner request: "Full redesign of section"; owner decision after it went live: "Keep it live".
- `#blogs` now shows 10 cards, one per existing guide, each linking to its guide page, plus two tiles: "Browse all legal guides" (`/legal-guides/`) and "Discuss your case" (phone). Before: 6 unlinked mini-articles dated Nov 2024–Apr 2025, whose only buttons were phone links.
- Card dates now come from each guide's own `dateModified` ("Updated Jul 2026" / "Updated Nov 2026"). The descriptions say what each guide covers, with no new legal statements.
- Same palette, fonts, grid, `blog-card`/`reveal` classes and responsive rules. 5 CSS lines added (stretched card link, focus outline). In-section contrast raised: date, label and body text.
- Unchanged: heading, subtitle, disclaimer, "Get Legal Consultation" button, JSON-LD, title/meta, review count, `#guides` section.
- Design-freeze exception (SEO Master Protocol §2) for this one section: accepted by the owner when keeping it live.
- Removed with the old cards: the owner-corrected mutation (L2/L6) and injunction (L12, Order XXXIX) card text. Those topics have no guide page yet.
- **Still pending:** Mian Aqil Nawaz's review of the 10 card descriptions.
- Tested before commit: `scripts/seo_check.py` 0 issues; local preview at 1366 px (3 columns) and 390 px (1 column, no horizontal scroll); no console errors. Live check: 15 `/legal-guides/` links on the homepage (4 footer + 11 new).

## 2026-11-11 — Technical SEO audit: approved fixes only
- Homepage FAQ (legal accuracy, owner approved): rewrote "How is FIR quashing possible?" (s.561-A CrPC / Art. 199, exceptional cases; s.249-A/265-K after challan), "How is property divided in divorce?" (no general division; dower, dowry articles, maintenance; FCA 1964) and removed "Legal representation ensures fair outcome" from the custody answer (now cites the Guardians and Wards Act 1890 and visitation).
- Homepage: invalid nested address link in the "Chamber No. 39" credential replaced with equivalent valid markup (pixel-identical; removes an empty link).
- Homepage: hero particle animation now runs only while the hero is on screen and the tab is visible; respects reduced-motion.
- Homepage + About: the video poster loads only when the video section nears the screen.
- Measured (Lighthouse mobile, local, 2 runs): performance 73–76 → 79–81, TBT 280–350 → 150–220 ms, weight 641 → 577 KiB, accessibility 93 → 97. Lab LCP 4.8 → 4.6 s.

## 2026-11-11 — Chamber interior photo
- Added owner's real photo of Chamber No. 39 (`images/gallery/mian-law-associates-chamber-39-interior-bahawalpur.webp`, 1200×900) as the 2nd, double-width tile in the homepage and About gallery (grid now 4 columns on desktop so rows stay full).

## 2026-11-11 — Introduction video, photo gallery, firm "28+ years"
- New 35-second introduction video `/media/mian-law-associates-introduction.mp4` (720p, 3.9 MB, silent, click-to-play, `preload="none"`) with poster image. Firm-attributed "28+ years since 1997"; all nine practice areas; Mian Aumer Nawaz as Founder Member.
- New tabbed "Video | Photo Gallery" section on the homepage (`#media`, between Courts and Why Choose) and the About page (before Client Reviews). VideoObject JSON-LD added on both.
- 10 owner-supplied photos added in `images/gallery/` (WebP, alt text, captions).
- NOT published (owner was told why): Supreme Court photo (would imply Supreme Court practice), courtroom interior photo, family-with-children photo and LHC Bahawalpur Bench photo (both carry Google's "AI-generated content" label), business card, round logo and poster with "27+ years"/"Results that matter" (only the Mailsi notification document was cropped and used).
- Footer label on all 26 pages: "Established 1997 · 28+ Years · Bahawalpur, Punjab" (firm wording, owner request).
- `_config.yml`: whole `promo-video/` folder excluded from the site (old promo said "28+ years" as a personal claim).

## 2026-11-11 — Internal files physically excluded from the website
- Removed `.nojekyll`; added `_config.yml` with `exclude:` (docs/, scripts/, CLAUDE.md, README.md, promo-video notes/config).
- Tested with the github-pages gem (Jekyll 3.10.0): 117 website files published byte-identical, 24 internal files not published, nothing generated.
- The files remain in the public GitHub repository (and history); a private repository would be needed to hide them there.

## 2026-11-11 — Targeted legal correction pass (owner-authorised items 1–8)
Text-only edits (HTML tags byte-identical; no layout, H1, colour, font, logo, contact or review changes; locked history untouched).
- Homepage criminal panel: s.22-A no longer says "Sessions Judge as Judicial Magistrate" → Ex-officio Justice of Peace (Sessions Judge or nominated ASJ, s.25 CrPC), s.22-A(6).
- Homepage s.491: High Court powers + s.491(1A) conferral on Sessions/Additional Sessions Judges; forum depends on facts.
- Homepage FAQ pre-arrest bail: s.498, non-bailable offences, mala fide test; bailable = right under s.496; no general pre-FIR protection.
- Cyber: "Pakistan Electronic Crimes Act" → Prevention of…; complaint to NCCIA (homepage panel, cyber page, PECA guide heading/step 2, guide card title);
  Personal Data Protection Bill stated as proposed, not enacted.
- Homepage FAQ PECA offences (ss.3–5, 13–14, 20–21, 24, 26A) and online-harassment procedure (NCCIA inquiry, PPC matters to police).
- Homepage FAQ + guide card mutation: forum/remedy/limitation depend on the order and statute (PLRA 1967); civil declaration where title is disputed.
- Homepage FAQ khula vs dissolution under DMMA 1939 s.2. Homepage injunction guide: Order XXXIX rr.1–3 CPC, ss.54–56 SRA 1877.

## 2026-11-11 — SEO / performance execution — PR #10 (AWAITING PRODUCTION APPROVAL)
- Lighthouse (local, Google's mobile/desktop throttling; the PageSpeed API quota is 0 for unauthenticated use):
  Home mobile perf 73 → 83, LCP 6.5 s → 4.3 s, SEO 92 → 100, a11y 89 → 91, weight 1,064 → 562 KB; practice/guide pages 98–99 → 100, 632 → 131 KB.
- 128 px logo (5 KB) for all small logo displays (the original 520 KB file is kept for schema/social); non-blocking Google Fonts on 27 pages
  (preload + onload, noscript fallback, gstatic preconnect); footer h5 → h3.fh (identical look) to fix heading order; underline body-text links.
- Homepage: 19 javascript:void(0) links → crawlable (photo lightbox keeps working via return false; panel back buttons use '#').
- Legal precision: 22-A(6) / Ex-officio Justice of Peace = Sessions Judge or nominated Additional Sessions Judge (s.25); s.491 forum includes LHC.
- robots.txt: /docs/, /scripts/, CLAUDE.md, README.md excluded from crawling (not a security control); removed data/raw review copy paste.txt;
  FAQ draft marked as an unpublished draft; tracking parameters removed from Instagram/YouTube links; sitemap lastmod 2026-11-11.
- LOCKED CONTENT untouched (verified by diff). A nested-link defect inside the locked "Chamber No. 39 — Est. 1997" box was left as is because of the lock.

## 2026-11-11 — Independent live audit corrections — PR #9 (AWAITING PRODUCTION APPROVAL)
- B1 removed the Supreme Court implication (the owner's exact replacement sentence).
- B2 added detailed panels 08 Inheritance and 09 Service Matters (existing design), renumbered all to /09, added a "Full Practice Page →" link to each panel,
  made cards 08/09 open their panels, and fixed the 7 panel titles that closed with </h1>.
- B3 removed bail timing claims ("within hours", "1–3 days"); same-day filing/preparation reworded so the court controls the outcome and timing.
- B4 removed "most powerful remedy" (homepage + writ guide); now neutral Article 199 wording.
- B5 NCCIA/FIA sync (cyber page meta/schema, homepage white-collar panel).
- B6 pre-arrest bail FAQ: mainly relevant to non-bailable offences; s.496 right in bailable offences.
- B9 firm-only history: personal "since 1997 / 28+ years" claims replaced (Home, About, Advocate, Lawyer, Lawyer-near-me, 2 guides).
  Also removed "top result for lawyer near me", "most accessible and trusted", "results speak for themselves".
- Kept by owner decision: About-page client testimonial.

## 2026-11-11 — Homepage H1 / title (owner's exact wording) — PR #8, AWAITING PRODUCTION APPROVAL
- Decision log: the owner set the exact homepage wording:
  - H1 "Mian Aqil Nawaz — Advocate High Court & Lawyer in Bahawalpur"
  - supporting line listing the nine areas
  - location line "Advocate High Court | Chamber No. 39, District Courts, Bahawalpur."
  - title "Mian Aqil Nawaz Advocate High Court | Mian Law Associates Bahawalpur" (also og/twitter/schema)
- Search-equity note: the new title no longer begins with "Lawyer & Advocate in Bahawalpur". Monitor "lawyer Bahawalpur" impressions in Search Console for 4 weeks after go-live.
- Note on process: PR #7 was deployed on the owner's "Do urself" before the owner's later instruction to review first. From now on, production merges only after an explicit final approval.

## 2026-11-11 — Fresh live audit corrections — PR #7
- Verified live: 400+/424+/7-areas/duplicate heading were already fixed. The owner's audit had read a cached or indexed copy.
- Fixed (legal accuracy): homepage pre-arrest bail card (s.498 CrPC, apprehended arrest, mala fide; Sessions Court first);
  homepage mutation card (no unqualified "30 days"); khula guide dower return (Punjab 2015 amendment, checked case by case);
  NAB guide bail (2022–23 amendments restored Sept 2024; Rs 500m threshold).
- Homepage H1 shortened to "Mian Aqil Nawaz – Advocate High Court, Lawyer in Bahawalpur" (title tag unchanged).

## 2026-11-10 — Cloudflare HTTPS settings applied by the owner
- Owner turned on Cloudflare "Always Use HTTPS" and "Automatic HTTPS Rewrites", and set Minimum TLS to 1.2. Encryption mode left on Automatic (Full).
- Tested: http://mlabwp.com.pk/robots.txt (no script) now ends at https:// (server-side redirect); TLS 1.1 handshake refused, TLS 1.2 accepted.
- Pending: fresh SSL Labs grade (expected A); HSTS to be considered about a week later.
- The Cloudflare account is the owner's own (aqilnawaz@gmail.com). Before the fix, about 368 of 1,144 requests a day arrived over plain HTTP.

## 2026-11-10 — Browser-security fix + approved Phase One items — PR #5
- Root cause of the iPhone ⚠ triangle: http://mlabwp.com.pk is served over plain HTTP (status 200, no redirect) because Cloudflare
  "Always Use HTTPS" is off. Certificates are valid (Cloudflare/Let's Encrypt, apex + *.mlabwp.com.pk, to Jan 2027), there is no mixed content,
  and DNS (apex and www) points to Cloudflare. Owner is applying the Cloudflare setting with Claude's steps.
- Safety net (owner-approved): a one-line script in every page's <head> switches http:// to https:// for mlabwp.com.pk and www only.
- Removed the hidden homepage "Additional Practice Areas" block (display:none, but indexed; listed "Corporate & Commercial Law").
- New /legal-guides/ hub (CollectionPage + ItemList); guide breadcrumbs and site "Blog" links now point to it; sitemap 26 URLs; llms.txt updated.
- FAQPage data added for the visible FAQs on Service Matters, Constitutional and FIA & Cybercrime.
- Drafted docs/MLA-FAQ-DRAFT-BATCH-1.md (Criminal, Family, Inheritance) for owner legal review — not published.
- Owner decisions: keep identity wording (Aumer = Founder Member/pioneer; Aqil = Owner & Principal); do not edit the "Mian Allah Nawaz" entry or link it.

## 2026-11-10 — Supreme Digital Authority mandate: Phase One (audit only)
- No website or account changes. Added `docs/MLA-FAQ-AND-PROCEDURE-PROTOCOL.md` (permanent protocol) and `docs/MLA-PHASE1-AUDIT-2026-11-10.md`.
- Awaiting owner discussion and approval of the individual recommendations.

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
- Owner decision: Sunday hours 11:30 AM–11:30 PM everywhere (was 11:00 AM on most pages and in the schema); WhatsApp 24 hours confirmed.
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
