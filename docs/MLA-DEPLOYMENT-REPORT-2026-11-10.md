# MLA Website — Final Deployment Report

**Website:** https://mlabwp.com.pk · **Date:** 10 November 2026 · **Owner:** Mian Aqil Nawaz, Advocate High Court
**Status: LIVE.** Deployed with the owner's approval through PR #1 and PR #2.

Status key: ✅ Completed and tested live · 🟡 Completed, not yet verified · ⏳ Awaiting the owner · ❌ Not done

---

## 1. Deployment
| Item | Result |
|---|---|
| Publishing branch | `main` (contains `CNAME` = mlabwp.com.pk and `.nojekyll`; confirmed by the GitHub Pages runs) |
| PR #1: SEO, AI discoverability, technical work | Merged (commit `a67572d`). Pages run #43: build ✅, deploy ✅ |
| PR #2: absolute canonical URLs (found by the live crawl) | Merged (commit `73579da`). Pages run #44 ✅; live about 30 seconds after the merge |
| Design | Preserved. Desktop matches before/after screenshots; mobile fixes apply on phones only |

## 2. Live verification (crawled from the public site after deployment)
| Check | Result |
|---|---|
| 25 sitemap pages | ✅ All HTTP 200 · absolute canonical · valid JSON-LD · exactly one H1 |
| 10 old duplicate URLs | ✅ All redirect to their topic page |
| `/criminal-lawyer-bahawalpur` (no slash) | ✅ GitHub 301 → `/criminal-lawyer-bahawalpur/` |
| Images | ✅ 13 of 13 load (incl. the share image and the restored About portrait) |
| Review count | ✅ "475+" in all 5 places; no 400+, 424+ or 47 left |
| Diary | ✅ `/diary/` returns 404; no page links to it |
| robots.txt / sitemap.xml / llms.txt / IndexNow key | ✅ All live |
| Mobile | ✅ Live 360 px screenshot of Family Law fits the screen; locally, all 25 pages fit 390 px with 0 JS errors |
| Metadata | ✅ Unique titles and descriptions; Open Graph and Twitter cards on every page |
| IndexNow (Bing, Copilot, DuckDuckGo, Yahoo, Yandex) | ✅ Submission accepted (HTTP 202) |
| Google Rich Results Test, PageSpeed | ❌ Not run (needs Google's tools; to do) |
| http → https redirect | 🟡 Not testable from this environment; confirm "Enforce HTTPS" in GitHub Settings → Pages |

## 3. Nine practice-area pages (live, each with its own URL)
| # | Practice area | Live URL | Content |
|---|---|---|---|
| 1 | Civil Law | https://mlabwp.com.pk/civil-lawyer-bahawalpur/ | Rebuilt |
| 2 | Criminal Law & Bail | https://mlabwp.com.pk/criminal-lawyer-bahawalpur/ | Rebuilt |
| 3 | Family Law & Khula | https://mlabwp.com.pk/family-lawyer-bahawalpur/ | Rebuilt |
| 4 | Property & Revenue | https://mlabwp.com.pk/property-lawyer-bahawalpur/ | Rebuilt |
| 5 | Inheritance & Succession | https://mlabwp.com.pk/inheritance-lawyer-bahawalpur/ | New |
| 6 | Service Matters | https://mlabwp.com.pk/service-matters-lawyer-bahawalpur/ | Optimised |
| 7 | Constitutional Petitions | https://mlabwp.com.pk/constitutional-lawyer-bahawalpur/ | Optimised |
| 8 | FIA & Cybercrime | https://mlabwp.com.pk/cyber-crime-lawyer-bahawalpur/ | Optimised |
| 9 | Anti-Corruption & NAB | https://mlabwp.com.pk/nab-lawyer-bahawalpur/ | Rebuilt |

Other live pages: Home, About, Contact, Lawyer / Advocate / Lawyer-near-me in Bahawalpur, and 10 legal guides.

## 4. What was changed (all live)
- **Duplicate pages:** 15 URLs were copies of the homepage. 5 were rebuilt with original Pakistani and Punjab law content, 1 page is new, and 10 now redirect.
- **Identity:** Mian Aqil Nawaz is stated as Owner and Principal Advocate, and Mian Aumer Nawaz as Founder Member, on the Home and About pages and in the schema. Fixed the wrong schema phone number (+923000000000).
- **Structured data:** LegalService, Person (both advocates), WebSite, WebPage, BreadcrumbList, Service, Article and FAQPage. Removed the inconsistent AggregateRating (47 / 424).
- **Reviews:** "475+ Google Reviews", kept in `<span class="mla-review-count">` so it can be updated easily. The 4.9-star text stays (owner-confirmed).
- **Legal guides:** byline (publisher, principal advocate, jurisdiction, disclaimer) and a link to the practice page.
- **Performance:** removed a 711 KB embedded logo from every page (~740 KB → ~40 KB of HTML). Descriptive image names and alt text, and lazy loading.
- **Mobile:** inner pages no longer overflow on phones; the desktop look is unchanged.
- **Security:** the `/diary/` app was removed from the website. A private archive with export instructions was given to the owner.
- **Crawlers:** Google, Bing, ChatGPT search, Claude search, Perplexity, DuckDuckGo and Apple are allowed. GPTBot and ClaudeBot (AI training) are blocked. Google-Extended is allowed (owner decision).
- **Cleanup:** removed the 2.9 MB backup file and old scripts; added a 404 page.
- **Project memory:** `CLAUDE.md` plus `docs/MLA-*.md`, so future Claude sessions follow the same rules.

## 5. Owner decisions recorded
Legal text approved at deployment · 475+ reviews · 4.9-star text confirmed · Google-Extended allowed · guides stay "Published by Mian Law Associates" until each is personally reviewed.

## 6. Baseline (before results)
| Metric | Value |
|---|---|
| Web search (third-party index, not Google) for "Mian Aqil Nawaz" advocate, "Mian Law Associates" Bahawalpur, criminal lawyer Bahawalpur | mlabwp.com.pk **did not appear** (verified 10 Nov 2026) |
| Google impressions, clicks, positions | No data yet; Search Console not connected here |
| AI answer mentions | Not yet tested; monthly prompts are listed in `docs/MLA-AI-DISCOVERABILITY.md` |

Rankings are not guaranteed. Improvement will be measured against this baseline.

## 7. Still needs the owner (⏳)
1. **Google Search Console:** the homepage already has a verification code, so the site may already be verified. Submit `https://mlabwp.com.pk/sitemap.xml` and request indexing of Home, About and the 9 practice pages.
2. **Bing Webmaster Tools:** import from Search Console and submit the sitemap.
3. **Google Business Profile:** link each service to its practice page; check hours and the map pin; keep the name, category and phone unchanged.
4. **Social profiles and directories:** identical name, address and phone; link to the website and the About page.
5. **GitHub Settings → Pages:** confirm "Enforce HTTPS" is ticked.
6. **Optional:** Cloudflare for true 301 redirects and security headers.
7. **Diary data:** if real cases were ever stored in a browser, they can still be recovered from that browser's storage. See `RESTORE-AND-EXPORT.txt` in the archive.

## 8. Known minor items (logged, not urgent)
- Two guides (bail, civil suit) show text edge to edge on desktop. This layout was there before; it was left unchanged under the design freeze.
- The homepage still carries the full text of all practice panels (221 KB). It could be trimmed to summaries later.
- The homepage has an old "keywords" meta tag (Google ignores it; harmless).

## 9. Next 90 days (summary — full plan in `docs/MLA-90-DAY-SEO-ROADMAP.md`)
- **Days 0–7:** Search Console and Bing submission; Rich Results Test; PageSpeed baseline.
- **Days 7–30:** make Business Profile, Bing Places, social profiles and directories consistent; first monthly AI-answer test.
- **Days 30–60:** two owner-reviewed legal guides per month; genuine client reviews.
- **Days 60–90:** Search Console report per practice page; fix keyword overlap; Core Web Vitals; day-90 report against the baseline.
