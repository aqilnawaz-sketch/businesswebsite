import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract FAQ section
faq_pattern = r'<section class="section faq-section" id="faq" style="background:var\(--bg\);">.*?</section>'
faq_match = re.search(faq_pattern, content, re.DOTALL)

if faq_match:
    faq_content = faq_match.group(0)
    
    # Remove FAQ from current location
    content = content.replace(faq_content, '')
    
    # 2. Insert FAQ right before <footer (which is definitely after Reviews and before the actual footer)
    footer_idx = content.find('<footer')
    if footer_idx != -1:
        # Insert just before the footer
        content = content[:footer_idx] + faq_content + '\n\n' + content[footer_idx:]
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Moved FAQ successfully.")
    else:
        print("Could not find <footer")
else:
    print("Could not find FAQ section")
