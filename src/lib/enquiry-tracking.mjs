export const MEASUREMENT_ID = 'G-JDGJB534KV';
export const ENQUIRY_EVENT = 'enquiry_click';

const CANONICAL_ORIGIN = 'https://www.delhitattooshop.com';
const PRODUCTION_ORIGINS = new Set([CANONICAL_ORIGIN, 'https://delhitattooshop.com']);
const SOURCE_PATHS = new Set([
  '/', '/artists', '/pricing-calculator', '/visit-studio', '/tattoo-pain-guide-delhi',
]);
const PLACEMENTS = new Set([
  'hero', 'pricing', 'contact', 'footer', 'artist_card', 'artist_dialog',
  'calculator', 'visit_details', 'consultation',
]);
const INITIALIZED = Symbol.for('delhitattooshop.analytics');

export function sourcePath(pathname) {
  if (typeof pathname !== 'string') return null;
  if (pathname.includes('//')) return null;
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return SOURCE_PATHS.has(path) ? path : null;
}

export function isProductionLocation(location) {
  try {
    return PRODUCTION_ORIGINS.has(new URL(location.href).origin);
  } catch {
    return false;
  }
}

export function referrerOrigin(referrer) {
  try {
    const url = new URL(referrer);
    return ['https:', 'http:'].includes(url.protocol) ? url.origin : '';
  } catch {
    return '';
  }
}

export function contactMethod(href) {
  if (typeof href !== 'string' || !href.trim()) return null;
  try {
    const url = new URL(href);
    if (url.username || url.password) return null;
    if (url.origin === 'https://wa.me' && url.pathname === '/917217665761') {
      return 'whatsapp';
    }
    if (url.protocol === 'tel:' && url.pathname === '+917217665761' && !url.search && !url.hash) {
      return 'phone';
    }
    if (url.protocol === 'mailto:' && url.pathname === 'contact@apextattooz.com' && !url.hash &&
        [...url.searchParams.keys()].every((name) => ['subject', 'body'].includes(name.toLowerCase()))) {
      return 'email';
    }
  } catch {
    // Malformed or unrelated destinations are not enquiry interactions.
  }
  return null;
}

export function enquiryPayload(anchor, pathname) {
  if (!anchor || anchor.closest('[inert], [aria-disabled="true"], [disabled]')) return null;
  const method = contactMethod(anchor.getAttribute('href'));
  const placement = anchor.getAttribute('data-enquiry-placement');
  const path = sourcePath(pathname);
  if (!method || !PLACEMENTS.has(placement) || !path) return null;

  // Keep the payload categorical: no link URL, message, price, form value or personal details.
  return { contact_method: method, contact_placement: placement, source_path: path };
}

/** Tracks contact intent only. A click does not establish that an enquiry was received. */
export function initializeSiteAnalytics(win = window, doc = win.document) {
  if (!isProductionLocation(win.location)) return { enabled: false, reason: 'non-production' };
  const path = sourcePath(win.location.pathname);
  if (!path) return { enabled: false, reason: 'unknown-page' };
  if (win[`ga-disable-${MEASUREMENT_ID}`] === true) return { enabled: false, reason: 'opt-out' };
  if (win[INITIALIZED]) return win[INITIALIZED];

  const state = { enabled: false, reason: 'unavailable' };
  try {
    win.dataLayer = win.dataLayer || [];
    if (typeof win.gtag !== 'function') {
      win.gtag = function () { win.dataLayer.push(arguments); };
    }
    win.gtag('js', new Date());
    win.gtag('config', MEASUREMENT_ID, {
      page_location: `${CANONICAL_ORIGIN}${path}`,
      page_referrer: referrerOrigin(doc.referrer),
      send_page_view: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = doc.createElement('script');
    script.async = true;
    script.referrerPolicy = 'origin';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    doc.head.appendChild(script);

    const handledEvents = new WeakSet();
    doc.addEventListener('click', (event) => {
      try {
        if (event.defaultPrevented || (event.button !== undefined && event.button !== 0) ||
            win[`ga-disable-${MEASUREMENT_ID}`] === true || handledEvents.has(event)) return;
        // Native keyboard activation also emits click. Do not add a separate keydown event.
        const target = event.target?.closest ? event.target : event.target?.parentElement;
        const anchor = target?.closest('a[href]');
        const payload = enquiryPayload(anchor, win.location.pathname);
        if (!payload) return;
        handledEvents.add(event);
        win.gtag('event', ENQUIRY_EVENT, { ...payload, send_to: MEASUREMENT_ID });
      } catch {
        // Analytics may be blocked or fail. Never delay or prevent the contact link's navigation.
      }
    }, { passive: true });

    state.enabled = true;
    state.reason = null;
  } catch {
    // The page and its contact links remain usable if the analytics setup fails.
  }
  win[INITIALIZED] = state;
  return state;
}
