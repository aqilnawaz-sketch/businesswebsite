# MLA FAQ & Legal-Procedure Protocol (permanent; owner-approved 10 Nov 2026)

FAQs and step-by-step Pakistani legal procedures are a **mandatory** part of the MLA search strategy.
This file is the standing rule set. The working plan and the current gaps are in `docs/MLA-PHASE1-AUDIT-2026-11-10.md`.

## 1. Workflow (always in this order)
1. **Audit:** live site, repository, search results, owner-supplied Search Console and Business Profile data.
2. **Recommend:** a written proposal per change (what, why, page, benefit, risk, permission needed).
3. **Discuss:** the owner approves, rejects or modifies each item. A recommendation is **not** an approval.
4. **Implement:** on the working branch only, after approval.
5. **Legal review:** every substantive FAQ answer or guide is approved by Mian Aqil Nawaz before merge.
6. **Deploy:** only with explicit production approval; then verify the live site.

## 2. Content architecture (repeat for each of the nine practice areas)
```
Practice page  /<area>-lawyer-bahawalpur/     ← commercial intent ("criminal lawyer Bahawalpur")
 ├─ 5–10 visible FAQs (short answers, 60–120 words, statute named, link to the guide)
 ├─ links to 2–4 procedural guides           ← informational intent ("how to get pre-arrest bail")
 └─ contact / consultation block
Guide          /legal-guides/<topic>/         ← one topic per guide; links back up to its practice page
```
- Do **not** publish all candidate questions at once. Choose the 5–10 strongest per area from real search intent.
- A question becomes a **guide** when the answer needs steps, documents, a forum or a limitation period; otherwise it stays a **FAQ**.
- One question has one home (see the keyword map). No duplicate answers across pages.
- No thin pages for keyword variants or towns.

## 3. Procedural-guide template (all 16 headings; mark "not applicable" rather than omit)
1 Legal issue · 2 Jurisdiction (federal / Punjab) · 3 Pakistani statute · 4 Punjab legislation/rules · 5 Forum · 6 Eligibility & maintainability ·
7 Documents · 8 Limitation · 9 Filing procedure · 10 Court process · 11 Evidence · 12 Interim relief · 13 Remedies · 14 Appeal/review ·
15 Common mistakes · 16 When to get a lawyer. Footer: author/reviewer, "last legal review" date, not-legal-advice notice, link to the practice page.

## 4. Legal-accuracy rules (mandatory)
- Source order: Constitution → federal Acts → Punjab Acts → rules and notifications → **verified** Supreme Court / High Court judgments.
- Check amendments and current applicability on the day of writing. Known 2026 traps:
  - PECA cases are investigated by the **NCCIA** (2025 amendment), not the FIA Cybercrime Wing.
  - NAB has a Rs 500m threshold (2022 amendments, restored by the Supreme Court in Sept 2024).
  - Khula in Punjab is under the Family Courts Act 1964 as amended in 2015.
  - Talaq notice is "as soon as may be" under MFLO s.7.
- Cite a judgment only when its existence **and** the proposition have been verified from the judgment text. Never invent citations.
- State limitation periods only when verified for Punjab; otherwise say "short statutory period — take advice immediately".
- Separate mandatory requirements from discretionary relief. No success rates, outcome promises or superlatives.
- Each guide and FAQ records `Last legal review: <date> by <reviewer>`. Until the owner reviews it, the byline is "Published by Mian Law Associates".

## 5. Structured data
- `FAQPage` only for Q&A that is visible on the same page. **Do not promise FAQ rich results**: Google shows them mainly for government and
  health sites. FAQs are kept for users and AI answer engines.
- Guides: `Article` (+ `about` → the practice page's `Service`). Consider `HowTo`-style steps in visible HTML only; `HowTo` rich results are discontinued.

## 6. Languages
English is primary. Urdu (وکیل بہاولپور, ایڈووکیٹ بہاولپور) and Roman Urdu ("wakeel Bahawalpur") may be added only as owner-approved,
properly written text, such as a short Urdu summary per practice page. Never as hidden keyword lists.

## 7. Business Profile (GBP) synchronisation (needs owner access)
Compare name, categories, services, description, address, pin, phone, hours (Mon–Sat 07:30–23:30, Sun 11:30–23:30), website, reviews (475+),
rating (4.9), photos and posts. Link each of the nine services to its page. Never change the name, primary category, address or phone without approval.
