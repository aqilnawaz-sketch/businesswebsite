#!/usr/bin/env bash
# Notify IndexNow search engines (Bing -> Copilot/DuckDuckGo/Yahoo, Yandex, Seznam, Naver)
# that the URLs in sitemap.xml changed. Run ONLY after the change is live on https://mlabwp.com.pk.
# The key below is public by design (it is published at https://mlabwp.com.pk/59a0deec3c4c77f7bd698dabbb00dd09.txt).
set -euo pipefail
cd "$(dirname "$0")/.."
KEY="59a0deec3c4c77f7bd698dabbb00dd09"
URLS=$(grep -o '<loc>[^<]*</loc>' sitemap.xml | sed 's/<[^>]*>//g' | python3 -c 'import sys,json;print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')
curl -sS -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json; charset=utf-8' \
  -d "{\"host\":\"mlabwp.com.pk\",\"key\":\"$KEY\",\"keyLocation\":\"https://mlabwp.com.pk/$KEY.txt\",\"urlList\":$URLS}" -w '\nHTTP %{http_code}\n'
# 200/202 = accepted. 403 = key file not reachable yet (deploy first).
