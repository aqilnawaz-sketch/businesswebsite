/* MLA enquiry tracking — Google Analytics 4 (owner-approved measurement).
   Counts clicks on Call, WhatsApp, Directions, Email and "Write a review" links.
   No personal data is sent: only the type of click, the page, and the page section.
   To switch on: put the GA4 Measurement ID (looks like G-XXXXXXXXXX) between the quotes below. */
(function () {
  var GA4_ID = 'G-8V11PZG188';
  if (!GA4_ID) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', GA4_ID, { anonymize_ip: true });

  function kind(href) {
    if (/^tel:/i.test(href)) return 'click_call';
    if (/wa\.me|whatsapp/i.test(href)) return 'click_whatsapp';
    if (/maps\.app\.goo\.gl|google\.[a-z.]+\/maps/i.test(href)) return 'click_directions';
    if (/^mailto:/i.test(href)) return 'click_email';
    if (/g\.page\/r\/.+\/review/i.test(href)) return 'click_review';
    return null;
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var ev = kind(a.getAttribute('href') || '');
    if (!ev) return;
    var sec = a.closest('section[id], [id^="mlap"], header, footer, nav');
    gtag('event', ev, {
      link_location: sec ? (sec.id || sec.tagName.toLowerCase()) : 'page',
      page_path: location.pathname,
      transport_type: 'beacon'
    });
  }, true);
})();
