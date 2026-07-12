import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the FAQ section
faq_pattern = r'<section class="section faq-section" id="faq" style="background:var\(--bg\);">.*?</section>'
faq_match = re.search(faq_pattern, content, re.DOTALL)

if faq_match:
    faq_content = faq_match.group(0)
    # Remove the FAQ section from its current location
    content = content.replace(faq_content, '')
    
    # We also want to remove any extra newlines left behind where it was
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    
    # Now find the footer and insert the FAQ right before it
    # Look for <!-- CONTACT --> or <!-- FOOTER -->
    if '<!-- CONTACT -->' in content:
        content = content.replace('<!-- CONTACT -->', faq_content + '\n\n<!-- CONTACT -->')
    elif '<footer' in content:
        content = content.replace('<footer', faq_content + '\n\n<footer')
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Successfully moved FAQ to the end of the page.')
else:
    print('FAQ section not found.')
