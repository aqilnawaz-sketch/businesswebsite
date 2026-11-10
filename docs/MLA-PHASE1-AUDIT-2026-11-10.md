# MLA Phase One Audit & Recommendations — 10 November 2026

**Status: for discussion. No changes have been made to the live site or to any account in this phase.**
Live site audited: https://mlabwp.com.pk at `main` = `e0682e1` (all 25 pages pass the technical crawl; see §16).

Evidence labels: **[Observed]** = seen directly in a live page or a search result today · **[Estimate]** = judgement · **[No access]** = needs the owner's login.
Search results come from Firecrawl's web index, Pakistan location, which is close to Google but **is not Google**. Search Console is the authoritative source.

---

## 1. Website audit — summary
| Area | Status |
|---|---|
| Nine practice pages, own URLs, unique titles/descriptions, one H1, schema, absolute canonicals | ✅ [Observed, live crawl] |
| 475+ reviews / 4.9 rating / hours / phone / address consistent | ✅ [Observed] |
| FAQs on practice pages | ⚠ 4–5 per page; FAQPage schema missing on Service, Constitutional and Cybercrime |
| Procedural guides | ⚠ 10 guides; only some follow a procedural structure; 11 important procedures have no guide (§10) |
| Homepage | ⚠ 221 KB; holds the full text of 7 hidden practice panels plus a hidden "Additional Practice Areas" block that search engines **do index** (it shows "Corporate & Commercial Law") [Observed in index snippet] |
| Plain `http://` | ❌ not redirected to https (Cloudflare "Always Use HTTPS" off) [Observed] |

## 2. Google Business Profile — [No access]
Cannot audit without the owner's login. See §17 for what to check and the authorization needed.

## 3. Social profiles
| Profile | Observation |
|---|---|
| Instagram @mlabwp | Reels describe Mian Aqil Nawaz as "**Founder** of Mian Law Associates" [Observed]. This **conflicts** with the approved identity (Owner & Principal; Founder Member = Mian Aumer Nawaz). Change the bio/captions to "Owner & Principal Advocate". |
| Facebook | Personal profile facebook.com/aqilnawaz ("Advocate High Court Bahawalpur") [Observed]; the website links the page facebook.com/Mlabwp. Decide which should be in `sameAs`. |
| LinkedIn, YouTube, TikTok | Linked from the site; not audited in depth (login walls). |

## 4. Personal entity — Mian Aqil Nawaz
- Search "Mian Aqil Nawaz advocate Bahawalpur": **#1 is mlabwp.com.pk** [Observed], followed by Instagram and Facebook.
- Possible related entity: Wikipedia article "Mian Allah Nawaz" (Bahawalpur advocate, practice from 1964) [Observed]. **Do not link or claim any relationship unless the owner confirms it.**
- Gap: guides are attributed to the firm, not to him, until he reviews them (protocol §4). Reviewing them is the single biggest E-E-A-T step.

## 5. Organisation entity — Mian Law Associates
- Schema graph is consistent (LegalService + Person + WebSite) [Observed].
- **Not listed** on search.just.pk, Lawzana, Wooqlaw or Zor Services [Observed: 0 results]. These directories outrank MLA for several queries.

## 6. Nine practice pages
| Page | Visible FAQs | FAQ schema | Words | Gap |
|---|---|---|---|---|
| Civil | 4 | yes | ~890 | guides: injunction, recovery, decree execution |
| Criminal & Bail | 4 | yes | ~1,100 | guides: FIR first steps, post-arrest bail, trial stages |
| Family & Khula | 4 | yes | ~1,030 | guides: maintenance, haq mehr, custody |
| Property & Revenue | 4 | yes | ~960 | guides: declaration/cancellation suits, mutation proceedings |
| Inheritance | 4 | yes | ~980 | guide: succession certificate (NADRA vs court) |
| Service Matters | 4 | **no** | ~940 | guide: departmental appeal → Service Tribunal; Punjab time limit to verify |
| Constitutional | 4 | **no** | ~600 | thinnest page; guide exists (writ petition), needs the 16-point structure |
| FIA & Cybercrime | 4 | **no** | ~660 | guide: NCCIA complaint procedure (post-2025) |
| Anti-Corruption & NAB | 5 | yes | ~1,000 | guide: NAB inquiry → investigation → reference |

## 7. Keyword map
The current map is `docs/MLA-KEYWORD-MAP.md`. Additions proposed:
- `khula lawyer Bahawalpur` and `bail lawyer Bahawalpur` → the Family and Criminal pages (not new pages).
- Question keywords → guides (§10).

## 8. English, Urdu and Roman Urdu keywords [Observed SERPs]
| Query | Who ranks | MLA |
|---|---|---|
| lawyer in Bahawalpur | Lawzana (directory) #1 | **#2** (homepage) |
| criminal lawyer Bahawalpur bail | search.just.pk #1, then MLA, A&P Law Firm, Lawzana | **#2** (homepage, not the criminal page) |
| family lawyer Bahawalpur khula | search.just.pk #1, then MLA, A&P Law Firm, Lawzana | **#2** (homepage) |
| وکیل بہاولپور (Urdu) | directories (search.just.pk Urdu, Lawzana Urdu), news | **absent** |
| wakeel Bahawalpur (Roman Urdu) | doctors named "Wakeel", one Facebook lawyer page | absent; low intent, because "wakeel" is also a surname |
| how to get pre-arrest bail in Pakistan | saeedlawfirm, masoodandmasood, pakistanlegalservices, nmklegal | **absent** |
| khula procedure in Pakistan | pklegal, khadijalawassociates, onlinekhula, saeedlawfirm, paklawyer | absent (guide exists but isn't ranking in this index) |
| inheritance mutation Punjab | punjab-zameen.gov.pk (PLRA, official) #1 | absent |
| Mian Aqil Nawaz advocate Bahawalpur | **MLA #1** | ✅ |

Takeaways [Estimate]:
- MLA already wins local commercial queries through the homepage. The practice pages should take over once Google re-crawls the rebuilt versions.
- MLA loses every "how to" question to national blogs.
- Urdu is open ground: only directories compete there.

## 9. FAQ opportunity map (strongest 5–8 per area; F = short FAQ, G = needs a guide, ✓ = already covered)
| Area | Proposed questions |
|---|---|
| Civil | ✓ stay order · ✓ appeal · ✓ fraud decree · **F** which court has jurisdiction · **F** what if the defendant doesn't appear · **G** how to recover money · **G** how to enforce a decree · **F** declaration vs injunction |
| Criminal | ✓ pre vs post-arrest bail · ✓ police refuse FIR · **G** what to do after an FIR · **F** bailable vs non-bailable · **F** how to get an FIR copy · **F** rights of an accused · **G** criminal trial stages · ✓ compromise |
| Family | ✓ custody · ✓ maintenance while separated · **G** khula procedure (update guide) · **G** maintenance suit & enforcement · **G** haq mehr recovery · **F** khula vs dissolution on grounds · **F** husband abroad · ✓ court marriage |
| Property | ✓ fraudulent mutation · ✓ illegal occupation · **F** is mutation ownership · **G** cancelling a registered/fraudulent deed · **F** declaration vs cancellation suit · ✓ partition · **F** which court |
| Inheritance | ✓ succession certificate · ✓ sister's share · ✓ grandchildren · **F** how shares are distributed · **F** documents needed · **F** challenging a relinquishment deed · **G** succession certificate (NADRA vs court) |
| Service | ✓ illegal dismissal · ✓ Tribunal · **G** departmental appeal → Tribunal · **F** show-cause notice reply · **F** interim relief · **F** when a writ is maintainable (owner to verify the Punjab time limit) |
| Constitutional | ✓ writ · ✓ habeas · **F** Article 199 explained · **F** writ vs civil suit · **F** when a writ is not maintainable · **G** filing a writ (restructure the existing guide) |
| FIA & Cybercrime | ✓ case filed · ✓ PECA offences · ✓ harassment complaint · **G** NCCIA complaint procedure · **F** online impersonation · **F** electronic evidence in court · **F** responding to a notice |
| NAB | ✓ notice · ✓ NAB vs FIA vs ACE · ✓ bail · **F** inquiry vs investigation · **F** current NAB jurisdiction (Rs 500m) · **G** NAB inquiry → reference procedure |
| Home | keep the existing FAQ; add "Which practice area covers my problem?" linking to all nine |

## 10. Procedural-guide opportunity map
**Existing guides to restructure** to the 16-point template (protocol §3):
bail-in-pakistan · civil-suit-procedure · khula-procedure · divorce-procedure · writ-petition · peca-cybercrime (NCCIA) · nab-fia-arrest · property-dispute · property-transfer · fir-cancellation.

**New guides proposed** (priority order):
1. What to do after an FIR is registered (Criminal)
2. Maintenance suit and enforcement in the Family Court (Family)
3. Succession certificate: NADRA or court (Inheritance)
4. Inheritance mutation (wirasat) in Punjab (Inheritance/Property; cite PLRA)
5. Recovery of haq mehr (Family)
6. Temporary injunction / stay order (Civil)
7. Recovery of money and summary suits (Civil)
8. Cancellation of a fraudulent registered deed (Property)
9. Departmental appeal and the Punjab Service Tribunal (Service)
10. NCCIA cybercrime complaint (FIA & Cybercrime)
11. NAB inquiry, investigation and reference (NAB)
12. Child custody proceedings (Family)
13. Criminal trial stages under the CrPC (Criminal)

At 2 per month, that's about 6–7 months. A faster pace is possible only if the owner's review keeps up.

## 11. Statutory accuracy issues still open
1. Service Tribunal: confirm the exact Punjab limitation and proviso (the site now says "generally 30 days").
2. Khula in Punjab: confirm the dower-return rules after the 2015 amendment and the Federal Shariat Court ruling.
3. The homepage hidden panels still contain older legal text that is not fully reviewed. Removing or condensing them avoids two versions of the same law.
4. Bar Council advertising rules: self-praise such as "Best Lawyer in Bahawalpur" in headings and link text. Owner to decide.
5. The existing guides carry the owner's earlier claims ("28+ years", "About the Author"). These are fine if accurate, but the owner should confirm.

## 12. Search-engine visibility [Observed]
- The index still holds **old** versions: 7 practice areas, "commanding", the duplicate `/best-lawyer-bahawalpur/` and `/fia-lawyer-bahawalpur/` pages, no-slash URLs, and `/diary/` ("Litigation Desk — Login").
- These clear only when Google re-crawls. Search Console URL Inspection → Request indexing speeds this up (owner access).

## 13. AI-platform visibility — [Not tested]
ChatGPT search, Gemini, Copilot, Perplexity and Claude search were not queried from this environment. Use the monthly prompt list in
`docs/MLA-AI-DISCOVERABILITY.md` and log dated screenshots. Expected driver [Estimate]: AI engines cite the pages that rank for question queries,
so the guides in §10 matter more than anything else here.

## 14. Competitor analysis [Observed]
| Competitor | Type | Strength | MLA advantage |
|---|---|---|---|
| search.just.pk | directory | #1 for practice + Urdu queries | MLA isn't listed: a free genuine listing would help |
| lawzana.com, wooqlaw.com, zorservices.co | directories | "10 best lawyers" lists | MLA isn't listed |
| aandplawfirm.com (A&P Law Firm) | local firm | separate criminal and family pages | MLA has 9 pages, 28+ years and 475+ reviews |
| umerlegaladvisor.com | local advocate | "best family lawyer" claims | MLA is more established |
| saeedlawfirm, pklegal, paklawyer, masoodandmasood | national blogs | own the "how to" questions | MLA can add the Bahawalpur/Punjab forum detail they lack |

Recommendation: build genuine listings and better guides. No competitor-comparison pages, no fake "top 10" lists.

## 15. Internal-linking strategy
- Every FAQ answer that needs steps links to its guide. Every guide links to its practice page (already done by byline).
- Every practice page links to all nine (done via the sidebar) and to 2–4 guides.
- The homepage grid links to all nine (done).
- Add a "Legal Guides" hub page `/legal-guides/`: currently missing, and the breadcrumb points to `/#blogs`.

## 16. Technical SEO corrections
| Item | Status |
|---|---|
| Live crawl, 25 pages: 200 status, canonical, JSON-LD, one H1, phone, address | ✅ |
| http → https | ❌ Cloudflare "Always Use HTTPS" (owner) |
| FAQPage schema on Service, Constitutional and Cybercrime | to add with the FAQ work |
| `/legal-guides/` hub page | missing |
| Homepage weight and hidden panels | recommend condensing (no visual change to the visible homepage) |
| Search Console verification code already present | ✅ (owner to confirm the property) |

## 17. Business Profile synchronisation (when access is granted)
Check: name and primary category (no change without approval); add the nine services with links; description that mentions the nine areas; hours
(Sun 11:30); 475+ reviews and 4.9 rating; photos (chamber, team); weekly posts linking new guides. **Authorization needed:** Google Business Profile manager access.

## 18. Content strategy
2 guides per month (§10 order) · 1 short video per guide (YouTube + Facebook + Instagram, each linking to the guide) · LinkedIn article version ·
a Business Profile post per guide. Everything reviewed by the owner before posting. Fix the Instagram "Founder" wording first.

## 19–20. Priority and effort [Estimate]
| # | Item | Effort | Permission |
|---|---|---|---|
| P1 | Cloudflare "Always Use HTTPS" | 2 min (owner) | Cloudflare access |
| P1 | Search Console: sitemap + request indexing of the 9 practice pages | 15 min (owner) | GSC access |
| P1 | Remove/condense the hidden homepage panels and the hidden "Additional Practice Areas" block | 2–3 h | design-neutral, needs approval |
| P2 | FAQ expansion: 3–4 new FAQs per practice page from §9, plus FAQPage on 3 pages | 1 day + owner review | legal approval |
| P2 | `/legal-guides/` hub page in the existing template | 2 h | approval |
| P2 | Directory listings (just.pk, Lawzana, Wooqlaw) with identical NAP | owner 1–2 h | owner accounts |
| P2 | Fix the Instagram "Founder" wording | owner 5 min | owner account |
| P3 | 13 new guides + restructure 10 existing ones | ~1 day each + review | legal approval each |
| P3 | Urdu summary paragraph on each practice page | 1 day + review | approval |
| P3 | Business Profile synchronisation | 1–2 h | GBP access |

## 21. Permissions required
Cloudflare (dashboard) · Google Search Console · Google Business Profile · Bing Webmaster Tools · Instagram/Facebook/LinkedIn/YouTube (owner edits) ·
directory sign-ups (owner) · legal approval of each FAQ batch and guide · production merge approval for each website release.

## 22. 90-day roadmap
- **Days 0–14:** P1 items; approve the FAQ batch for Criminal, Family, Inheritance (highest demand); first two guides (FIR first steps, maintenance).
- **Days 15–45:** FAQ batches for the remaining six areas; `/legal-guides/` hub; guides 3–4; directory listings; Business Profile sync; Instagram fix.
- **Days 46–90:** guides 5–6 + restructure 4 existing guides; Urdu summaries (if approved); monthly AI-answer test; day-30/60/90 reports from Search Console.

Measure: impressions, clicks, CTR and position per practice page and per guide; question queries; indexed pages; Maps actions; reviews; Core Web Vitals.
Observed data is kept separate from estimates. No ranking promises.
