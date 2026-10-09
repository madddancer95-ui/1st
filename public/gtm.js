// Retain the homepage container used for Search Console ownership verification.
// Its published version 1 had no measurement tags/rules on 9 October 2026.
// Do not add a second GA4 config or enquiry tag here; SiteAnalytics owns those.
if (window.location.protocol === 'https:' &&
    ['www.delhitattooshop.com', 'delhitattooshop.com'].includes(window.location.hostname)) {
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-K4DMPN4P');
}
