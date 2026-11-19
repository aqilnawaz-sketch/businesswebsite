# MLA Changelog

Newest first. Branch: `claude/hyperframes-repository-76fmfa`. Status key: **Completed** (in branch) · **Tested** · **Awaiting authorization** · **Not yet verified** (needs live site).

## 2026-11-19 — Homepage mobile header buttons (branch `claude/home-mobile-header-ctas`)
Owner approved in chat. Phones only (≤640px): a Call Now + WhatsApp row under the homepage header, styled like the inner pages' header buttons. Desktop unchanged; menu button unchanged.

## 2026-11-19 — Old logo restored + smaller mobile headline (branch `claude/headline-and-old-logo`)
Owner request in chat: restore the logo used before today (header `mian-law-associates-logo-128.webp` from before 202ed82; schema `logo` back to `mian-law-associates-logo.webp`). The plain logo files stay in /images for directory listings. Homepage H1 on phones (≤640px): 11vw → 8vw (text unchanged).

## 2026-11-19 — Mobile hero portrait (branch `claude/mobile-hero-portrait`)
Owner approved in chat. Homepage only, screens up to 960px: the existing portrait (mian-aqil-nawaz-advocate-high-court-portrait.webp) shows in a 120px round gold-bordered frame above the H1, where the desktop side photo is hidden. Desktop unchanged; no new image.

## 2026-11-19 — Readability: muted text colour (branch `claude/mobile-footer-space`)
Owner approved in chat. `--muted` lightened for contrast on the dark background: homepage #8a7258 → #a08a6e, inner pages #8a8070 → #a39a8a (same hue). Gold, fonts, layout unchanged.

## 2026-11-19 — Mobile footer space (branch `claude/mobile-footer-space`)
Owner approved in chat. On screens up to 640px, footer gets 80px bottom padding so its last lines are not hidden behind the floating Call/WhatsApp buttons. Buttons, colours and desktop layout unchanged.

## 2026-11-19 — Search-term variants (re-done from PR #27, branch `claude/search-variants-v2`)
Owner approved in chat. Near-me page adds "advocate near me"; choosing-a-lawyer guide adds best advocate, top 10 lawyers, vakeel/vakil and case-specific searches; Urdu achha-wakeel page adds ٹاپ وکیل and case types. No self-claims; "no list can tell you" line kept.

## 2026-11-19 — WhatsApp availability wording (branch `claude/whatsapp-office-hours`)
Owner instruction: WhatsApp is answered in office hours; after hours clients leave a message. Replaced "WhatsApp 24 hours" on /contact/ (3 places) /about/ (1) and the 11 Urdu pages (sidebar "واٹس ایپ (24 گھنٹے)" → office hours / leave a message). Reason: Google AI Overview was describing the firm as "online services open 24 hours".

## 2026-11-19 — Audit fixes (branch `claude/audit-fixes-2026-11-19`)
Owner instruction in chat: fix what the 19 Nov audit found, but leave the search-term paragraphs and anything about Bar Council wording untouched. Design unchanged.
- Schema (30 pages): LegalService `alternateName` is now ["Mian Law Associates Bahawalpur", "MLA Bahawalpur"] to separate the firm from same-name firms in Lahore/Peshawar; LinkedIn added to the organisation `sameAs`.
- Footer (40 pages): YouTube and TikTok links added next to LinkedIn, same style, where missing.
- WhatsApp (280 links): pre-filled first message (English pages: "Assalam o Alaikum, I would like legal advice about: "; Urdu pages: Urdu equivalent). Tracking regex still matches.
- PECA guide and guides hub: description "FIA process" → "the NCCIA inquiry".
- Homepage reviews heading: "Real Reviews from Google" → "Selected Reviews from Google" (the widget shows a hand-picked set).
- Not changed (owner decision or standing rule): search-term paragraphs; homepage practice panels (required by CLAUDE.md); locked history text; CSS consolidation (deferred: design-freeze risk).
seo_check: 0 issues.

## 2026-11-19 — Case-search coverage (branch `claude/case-search-coverage`)
Owner request: be found for lawyer/advocate/wakeel + case type (khula, bail, etc.). Each of the 9 practice pages gets one natural paragraph naming its case types with lawyer/advocate/wakeel wording, a link to the choosing-a-lawyer guide, and an Urdu line linking its Urdu page. Six new Urdu pages (civil, inheritance, service matters, constitutional, cyber crime, NAB) reuse only verified statements already on the English pages; all nine areas now have Urdu pages with hreflang pairs. No "best/top" self-claims.

## 2026-11-19 — "Choosing a good lawyer" guide, EN + UR (branch `claude/choose-lawyer-guide`)
Owner request (covers good lawyer / achha wakeel / best lawyer searches without self-praise). New: /legal-guides/choosing-a-lawyer-bahawalpur/ and /ur/achha-wakeel-bahawalpur/ (hreflang pair). Linked from the guides hub, /lawyer-bahawalpur/ and /ur/. Sitemap and llms.txt updated.

## 2026-11-19 — GA4 tracking switched on (branch `claude/ga4-activate`)
Owner request in chat. GA4 property "mian law associates" (Pakistan time); web stream mlabwp.com.pk created 19 Nov 2026; Measurement ID G-8V11PZG188 set in `/mla-track.js`. Events: click_call, click_whatsapp, click_directions, click_email, click_review. In GA4, mark click_call and click_whatsapp as key events (conversions).

## 2026-11-19 — Content & structure batch 1 (branch `claude/content-structure-batch1`, awaiting owner merge; includes PR #20)
Owner approved in chat on 19 Nov 2026 (MCQ answers). Design and theme unchanged.
- Homepage: the nine practice panels keep their titles, intros, service titles and links; the 70 duplicated legal descriptions and 9 keyword lines were removed (panel text 2,655 → 1,265 words) so each practice page can rank for its own topic.
- `/lawyer-near-me-bahawalpur/` kept at the owner's request and rewritten as a directions/visit page (how to reach the chambers, hours, courts nearby, what to bring, all nine areas, Urdu paragraph). Removed "WhatsApp 24 hours", "same-day consultation" and "experienced, and trusted". Locked 1997/reviews line unchanged. Footer link now points to Inheritance; the lawyer page links to it.
- `/lawyer-bahawalpur/` (334 → 713 words) and `/advocate-bahawalpur/` now link all nine practice areas and describe courts, location, hours and Urdu option. Locked first paragraphs unchanged.
- Practice pages: two new verified FAQs each (4 → 6), visible text and FAQPage schema identical.
- New guides (16-point template): after-fir-registered-pakistan, maintenance-suit-pakistan, succession-certificate-pakistan. Rebuilt: fir-cancellation, property-dispute.
- Urdu pages: /ur/criminal-lawyer-bahawalpur/, /ur/family-lawyer-bahawalpur/, /ur/property-lawyer-bahawalpur/ with hreflang pairs to the English pages.
- Sitemap, llms.txt and keyword map updated. `scripts/seo_check.py`: 0 issues. Desktop 1366 px and mobile 390 px rendered; no sideways scroll.
- Sources checked 19 Nov 2026 for new legal statements: Limitation Act Arts 91, 120, 164; CrPC ss.154, 167, 173, 496–498; Family Courts Act 1964 ss.13(3), 14(3), 17-A; Punjab Land Revenue Act 1967 s.172; PECA s.16; NAB Rs 500m (SC, Sept 2024); NADRA SFUs nationwide (Aug 2025).
- Review pass (19 Nov 2026): corrected the service-matters writ FAQ (writ generally needs statutory service rules; non-statutory = master and servant), removed duplicated NADRA wording from the inheritance FAQ, added the section 14 appeal exception to the maintenance guide, clarified the federal 2020 / Punjab 2021 Acts in the succession guide, fixed two Urdu statute names, and changed /contact/ "six days a week" to "seven days a week" (Sunday hours exist).
- Flag for owner: /advocate-bahawalpur/ previously said "WhatsApp 24 hours" (removed in the rewrite of that line); confirm if it should return.

## 2026-11-19 — Enquiry tracking, FAQ schema, claims clean-up (branch `claude/tracking-faq-schema-claims`, awaiting owner merge)
Owner request in chat on 19 Nov 2026 (audit items 1 and 2). No GBP or social changes.
- Added `/mla-track.js` to all 27 content pages (not redirect stubs, 404 or promo-video). Counts Call, WhatsApp, Directions, Email and Write-a-review clicks as GA4 events (`click_call`, `click_whatsapp`, `click_directions`, `click_email`, `click_review`). **Inactive until the owner's GA4 Measurement ID is entered in the file.**
- Homepage FAQPage schema rebuilt from the 12 visible FAQ answers (the old 8 schema questions were not on the page, a structured-data guideline breach). WebPage dateModified → 2026-11-19.
- Homepage HTML fix: the FAQ section sat after `</body>`; `</body>` moved to just before `</html>`.
- Claims removed (PBC Rule 135 / house rules): "widely recognised as a reliable, result-driven law firm", "Expert criminal defence", "Specialist defence", "specialist intervention … expert defence"; "expert" removed from six legal-guide CTAs.
- About page: three unverified testimonial cards (Muhammad Asif, Tariq Mehmood, Sana Bibi; two stated outcomes/timing such as "bail granted the same day") replaced by three reviews from `data/reviews.json`. Blockquote "TOP-NOTCH … fight hard to get the best results" replaced. Generic "Experience, Expertise, Authoritativeness, and Trustworthiness" sentence replaced with a plain lead-in.
- Homepage carousel and `data/reviews.json`: removed Hammad Ali ("achieving the best outcomes") and Taiba Batool ("TOP-NOTCH … best results"); they stay on Google.
- NOT changed (locked content, owner decision needed): homepage "a proven legal track record" (Established Since 1997 item); /advocate-bahawalpur/ "a proven track record matter above all"; /about/ "outcome-focused … decisive and legally sustainable results".
- Review count 490+ → **500+** everywhere (Google Maps: 4.9 from 500 reviews, checked 19 Nov 2026; owner request). `seo_check.py` now expects 500.
- `scripts/seo_check.py`: 0 issues.

## 2026-11-16 — Sunday hours added where missing (branch `claude/sunday-hours-2026-11-16`, awaiting owner merge)
Owner request in chat on 16 Nov 2026.
- /contact/: meta, OG and Twitter descriptions (and the matching schema text) now read "Mon–Sat 7:30 AM–11:30 PM, Sun 11:30 AM–11:30 PM" (they gave Mon–Sat only).
- /advocate-bahawalpur/: closing line now includes "Sun 11:30 AM – 11:30 PM", matching its sidebar and the rest of the site.
- Checked, no change needed: every other page, every openingHoursSpecification schema block and the homepage already show Sunday 11:30 AM – 11:30 PM. /ur/ shows no hours. Redirect stubs carry no hours.
- `scripts/seo_check.py`: 0 issues.

## 2026-11-16 — Audit fixes (branch `claude/audit-fixes-2026-11-16`, awaiting owner merge)
Owner-approved in chat on 16 Nov 2026.
- Completed: removed three teaching reviews (Mahar Shakeel, Talha Memon, Usman Saeed) from the homepage review carousel and `data/reviews.json`; they stay on Google.
- Completed: homepage counters keep their real figures for crawlers, AI tools and reduced-motion users (a JS-rendering crawl had captured "0").
- Completed, **legal review needed**: rewrote three homepage FAQ answers: possession suit (SRA 1877 ss.8–9, Limitation Act, Illegal Dispossession Act 2005), property transfer (TPA s.54, Registration Act ss.17, 23, mutation), electronic evidence (ETO 2002, QSO Art.164).
- Completed: width/height on the logo, QR and four review images (CLS). Other images left alone: their CSS has no height, so attributes would distort them.
- Decision: homepage keeps nine cards and nine panels (standing owner rule). Font trimming skipped: browsers only download faces in use, so no real gain.
- Checked, no change needed: hours already Sun 11:30 on every page in `main` (the audit used a stale snippet).

## 2026-11-16 — Review count 475+ → 490+ (Google shows 493, 4.9). All `mla-review-count` spans and the homepage stat updated.

## 2026-11-16 — Urdu page, secondary phone, spam-signal clean-up (branch `claude/urdu-page-nap-fixes`, awaiting owner merge)
Owner-approved in chat on 16 Nov 2026.
- New `/ur/` Urdu overview page (RTL, Noto Nastaliq Urdu), hreflang pair with `/` (ur, en, x-default); linked from the homepage footer; added to sitemap.xml, llms.txt and the keyword map. Name spelling per owner: میاں عاقل نواز. **New legal text: owner review required before merge.**
- Secondary phone +92 300 868 1692 added as "alternate": homepage contact card, footer Contact list (26 pages), /contact/ card, and a second `ContactPoint` in the LegalService schema (26 pages). Primary number unchanged everywhere else.
- Removed the meta keywords tag from the homepage (Google ignores it).
- Footer "Also Serving South Punjab" block (26 pages): the "Lawyer in [city]" list became one plain sentence naming the approved service area (Google spam policy lists city blocks as keyword stuffing).
- Link text "Best Lawyer (in) Bahawalpur" → "Lawyer in Bahawalpur" (13 links; same target). /best-lawyer-bahawalpur/ and /best-advocate-bahawalpur/ redirects untouched.
- 9 homepage "← All Practice Areas" links: `href="#"` → `href="/#practice"` (the click behaviour is unchanged).
- Not changed: titles, H1s, URLs, canonicals, the review count, locked history text, layout.

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

## 2026-11-19 — "best / top / behtareen" search wording (PR #28)
- Added visible, neutral search-term wording to all 9 English practice pages, all 9 Urdu practice pages, /lawyer-bahawalpur/ and /advocate-bahawalpur/ (20 pages).
- Covers: best/top/top 10/top 3 lawyer & advocate in Bahawalpur, good lawyer, achha/behtareen wakeel, and per-area Roman Urdu (khula ka wakeel, talaq ka wakeel, zamanat ka wakeel, faujdari wakeel, zameen/property ka wakeel, virasat ka wakeel, writ ka wakeel, PECA/NAB ka wakeel) plus Urdu equivalents.
- Compliance (PBC Rule 135): wording describes what people search for; every block says no page can tell who is best for a case and links to the choosing guide. No self-praise. Visible text only (no hidden keywords).
- Locked paragraphs untouched; design unchanged; seo_check 0 issues.

## 2026-11-19 — more search terms (PR #30)
- Criminal (EN/UR): cheque bounce (489-F PPC), murder/qatl (302 PPC), narcotics (CNSA 1997), anti-terrorism (ATC).
- Family (EN/UR): court marriage, jahez (dowry articles), haq mehr.
- Hubs: legal advisor / legal adviser / قانونی مشیر, attorney, vakil / wakil, lawyer phone number.
- Contact page: visible "Lawyer phone number in Bahawalpur / وکیل کا نمبر" line.
- /lawyer-bahawalpur/: nearby towns line (Ahmadpur East, Lodhran, Hasilpur, Yazman, Khairpur Tamewali, Rahim Yar Khan, Bahawalnagar).
- Same neutral style as PR #28/#29; no self-praise; visible text only.
- Also in PR #30: "Common case types" line (EN + UR) on all 9 practice pages (e.g. 302/324/365-A/420/489-F PPC, CNSA, Arms Ordinance, ATA; khula, nafaqa, haq mehr, jahez, custody; qabza, intiqal, haq shufa, hiba; succession certificate, wasiyat; PEEDA 2006; Article 199 writs; PECA s.16/20/21; NAO 1999, PCA 1947).
- Logo (owner decision 19 Nov 2026): plain version without "Experience 27+ Years" / "Results that Matter" band. New images/mian-law-associates-logo-plain.(webp|jpg); schema "logo" now points to it; header logo-128 regenerated from it. Original file kept unchanged.
- PR #32 (final sweep): criminal (rape/zina/509/336-B/PPWVA 2016/trafficking + 406/384/354/498-A/319, bijli chori, ishtihari, remand, juvenile, sulh, jail appeal), family (jactitation, nikahnama correction, NADRA divorce certificate, hizanat, guardianship certificate, jahez list), civil (s.39 SRA, accounts, malicious prosecution, Banking Court, Consumer Court, insurance, drafting), property (girdawari/jamabandi, tatima, housing societies, BDA, illegal construction, verification), inheritance (warasat nama, FRC, 498-A, deceased's salary/GP fund/pension), service (WAPDA/Railways/banks/universities, leave encashment, Civil Servants Acts), constitutional (quashment, writs vs police/FIA/NAB inquiries, universities/boards, harassment petitions), cyber (s.26A/24/13/14 PECA, SIM, impersonation, PECA courts), NAB/FIA (assets beyond means, misuse of authority, FIA banking/anti-corruption, AMLA 2010, freezing, trials/appeals). Full list: docs/MLA-KEYWORD-MAP.md.
