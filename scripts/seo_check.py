"""SEO regression check: JSON-LD validity, one H1, one canonical, unique titles/descriptions, broken internal links/images,
no AggregateRating, no links to /diary/. Exit code 1 if any issue."""
import re,glob,os,json,html,urllib.parse
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
bad=[];titles={};descs={}
files=[f for f in glob.glob('**/*.html',recursive=True) if not f.startswith(('promo-video','node_modules'))]
for f in files:
    s=open(f,encoding='utf-8').read()
    if 'http-equiv="refresh"' in s or f=='404.html': continue
    vis=re.sub(r'<(script|style)[^>]*>.*?</\1>','',s,flags=re.S)
    for m in re.finditer(r'\b(\d{2,4})\+?(?:\s|<[^>]+>)*(?:verified |five-star |5-star |client )*(?:google )?reviews',re.sub(r'<[^>]+>',' ',vis),re.I):
        if m.group(1)!='475': bad.append((f,'stale review count',m.group(0)[:60]))
    for m in re.finditer(r'class="[^"]*mla-rating[^"]*">([^<]*)<',s):
        if m.group(1).strip()!='4.9': bad.append((f,'stale rating',m.group(1)))
    if 'AggregateRating' in s: bad.append((f,'AggregateRating present'))
    if '/diary/' in s: bad.append((f,'link to removed /diary/'))
    base='/'+os.path.dirname(f)+'/' if os.path.dirname(f) else '/'
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>',s,re.S):
        try: json.loads(m.group(1))
        except Exception as e: bad.append((f,'JSONLD',str(e)))
    n=len(re.findall(r'<h1[\s>]',s)); 
    if n!=1: bad.append((f,'h1 count',n))
    t=re.search(r'<title>(.*?)</title>',s,re.S).group(1); titles.setdefault(t,[]).append(f)
    d=re.search(r'<meta[^>]*name="description"[^>]*>',s); d=d and re.search(r'content="([^"]*)"',d.group(0)).group(1); descs.setdefault(d,[]).append(f)
    cm=re.search(r'rel="canonical" href="([^"]+)"',s)
    if cm and not cm.group(1).startswith('https://mlabwp.com.pk/'): bad.append((f,'canonical not absolute',cm.group(1)))
    if s.count('rel="canonical"')!=1: bad.append((f,'canonical count',s.count('rel="canonical"')))
    for m in re.finditer(r'(?:href|src)="([^"]+)"',s):
        u=html.unescape(m.group(1)).split('#')[0].split('?')[0]
        if not u or u.startswith(('http','mailto:','tel:','javascript:','data:','//','whatsapp:')): continue
        p=urllib.parse.unquote(u if u.startswith('/') else base+u)
        fp='.'+p
        if p.endswith('/'): fp+='index.html'
        if not os.path.exists(fp) and not os.path.exists(fp+'/index.html'): bad.append((f,'broken',u))
for k,v in titles.items():
    if len(v)>1: bad.append(('dup title',k,v))
for k,v in descs.items():
    if len(v)>1 or not k: bad.append(('dup/missing desc',k and k[:50],v))
print(len(files),'files'); [print(b) for b in bad[:60]]; print(len(bad),'issues'); import sys; sys.exit(1 if bad else 0)
