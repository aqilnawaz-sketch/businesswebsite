# MLA Deployment Protocol

## Branches
- **Working branch:** `claude/hyperframes-repository-76fmfa`. All Claude work is committed and pushed here.
- **Production:** the branch GitHub Pages publishes from (Settings → Pages; normally `main`). **Merging into it = live deployment = owner approval required.**
- Changes reach production only through a pull request the owner approves and merges.

## Before every push
1. `python3 scripts/seo_check.py` must report `0 issues`.
2. Preview locally (`python3 -m http.server 8000`) and compare before/after screenshots at 1366 px and 390 px. Desktop must look unchanged; no page may scroll sideways at 390 px.
3. If legal text changed: list the changed pages in the PR for the owner's legal review.
4. Update `docs/MLA-CHANGELOG.md`; for technical work, also `docs/MLA-TECHNICAL-SEO-LOG.md`.
5. If URLs were added or removed: update `sitemap.xml`, `llms.txt` and the keyword map.

## After the owner merges (live)
1. Spot-check the live pages; open `/robots.txt`, `/sitemap.xml` and `/diary/` (it must return 404).
2. Run `scripts/indexnow-submit.sh` (expect HTTP 200 or 202).
3. Search Console: submit the sitemap and request indexing of changed pages. Bing Webmaster Tools: the same.
4. Validate structured data on changed pages (Rich Results Test, validator.schema.org).

## GitHub Pages facts that affect SEO
- Folders are served at `/page/`; `/page` 301-redirects to `/page/`. Use trailing slashes everywhere.
- No server-side redirects: retired URLs use canonical + meta-refresh stubs (see the technical log).
- No custom HTTP headers (HSTS, CSP): these need a proxy such as Cloudflare (owner approval).
- `.nojekyll` is present, so **every file is published**, including `.md`, `.py` and `.txt`. Never commit private material.
- "Enforce HTTPS" must stay ticked in Settings → Pages.
