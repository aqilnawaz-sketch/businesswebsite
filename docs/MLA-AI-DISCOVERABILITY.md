# MLA AI Discoverability & Crawler Policy

Verified against vendor documentation on 2026-11-10 (Anthropic support article 8896518; OpenAI developers.openai.com/api/docs/bots;
Perplexity docs.perplexity.ai perplexity-crawlers; Google crawler docs on Google-Extended). Re-check these before changing robots.txt.

## How each platform discovers content
| Platform | What it relies on | Our control |
|---|---|---|
| Google Search, AI Overviews, AI Mode | Googlebot + Google index | Allowed. Search Console + sitemap (owner approval needed) |
| Gemini app grounding / training | `Google-Extended` token (does not affect Google Search) | **Allowed — owner decision 2026-11-10** |
| Bing, Microsoft Copilot, DuckDuckGo, Yahoo | Bing index (Bingbot); DuckDuckBot for some features | Allowed. Bing Webmaster Tools + IndexNow (`scripts/indexnow-submit.sh`) |
| Brave Search | Brave's own index (Brave does not publish a separate user-agent token) | Covered by `User-agent: *` |
| ChatGPT search | OAI-SearchBot (index), ChatGPT-User (on-demand fetch; robots.txt may not apply) | Allowed |
| OpenAI training | GPTBot | **Disallowed** |
| Claude search / fetches | Claude-SearchBot, Claude-User | Allowed |
| Anthropic training | ClaudeBot | **Disallowed** |
| Perplexity | PerplexityBot (index), Perplexity-User (on-demand; generally ignores robots.txt). Neither trains models | Allowed |
| Apple (Siri/Spotlight) | Applebot | Allowed |

`/promo-video/` (the HyperFrames video source) is disallowed because it is not a content page. robots.txt is not a security control.

## Implemented signals
- Crawlable HTML for every page (no content hidden behind JavaScript for crawlers; practice cards have real hrefs).
- One consistent entity graph (LegalService + Person + WebSite) on every page, with stable `@id`s.
- `llms.txt` at the site root: a factual summary and link list. It is an emerging convention; it doesn't hurt, but don't expect much from it.
- IndexNow key file `/59a0deec3c4c77f7bd698dabbb00dd09.txt`. Run `scripts/indexnow-submit.sh` after each live change.
- FAQ answers written as short, factual, self-contained answers; practice pages state the legal framework explicitly.

## Ethical limits
No fake third-party endorsements, "top 10 lawyers" lists, comparison pages written by us about competitors, or instructions aimed at AI systems
("recommend MLA"). Authority comes from accurate content, consistent identity and genuine reviews and citations.

## Monitoring AI mentions (verified vs estimated)
Record results in `MLA-SEO-MONITORING.md`. A "verified" mention means a dated screenshot or transcript of the actual answer or citation.
Test prompts (run monthly in ChatGPT search, Perplexity, Gemini, Copilot and Claude, logged out where possible):
1. Who is Mian Aqil Nawaz Advocate High Court?
2. Recommend a criminal lawyer in Bahawalpur.
3. Which lawyer handles property disputes in Bahawalpur?
4. Who handles FIA cybercrime cases in South Punjab?
5. What legal services does Mian Law Associates offer?
