import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MEASUREMENT_ID, ENQUIRY_EVENT, contactMethod, enquiryPayload,
  initializeSiteAnalytics, isProductionLocation, referrerOrigin, sourcePath,
} from '../src/lib/enquiry-tracking.mjs';

function makeAnchor(href = 'https://wa.me/917217665761?text=Private%20design%20details', placement = 'hero', disabled = false) {
  const attributes = { href, 'data-enquiry-placement': placement };
  const link = {
    getAttribute: (name) => attributes[name] ?? null,
    closest: (selector) => selector === 'a[href]' ? (attributes.href ? link : null) : (disabled ? link : null),
    attributes,
  };
  return link;
}

function browser(href = 'https://www.delhitattooshop.com/?email=private%40example.test#private') {
  const scripts = [];
  const listeners = [];
  const doc = {
    referrer: 'https://search.example.test/results?q=private+design#private',
    createElement: (name) => ({ tagName: name }),
    head: { appendChild: (script) => scripts.push(script) },
    addEventListener: (name, listener, options) => listeners.push({ name, listener, options }),
  };
  const win = { location: new URL(href), document: doc };
  function click(link, overrides = {}) {
    const event = { target: link, button: 0, defaultPrevented: false, ...overrides };
    for (const { listener } of listeners) listener(event);
    return event;
  }
  const commands = () => (win.dataLayer || []).map((command) => Array.from(command));
  const events = () => commands().filter(([command]) => command === 'event');
  return { win, doc, scripts, listeners, click, commands, events };
}

test('only verified contact destinations and known site routes are counted', () => {
  assert.equal(contactMethod('https://wa.me/917217665761?text=anything'), 'whatsapp');
  assert.equal(contactMethod('tel:+917217665761'), 'phone');
  assert.equal(contactMethod('mailto:contact@apextattooz.com'), 'email');
  assert.equal(contactMethod('mailto:contact@apextattooz.com?subject=Tattoo%20Inquiry'), 'email');
  for (const href of [null, '', '#contact', 'not a url', 'javascript:void(0)',
    'http://wa.me/917217665761', 'https://wa.me.evil.test/917217665761',
    'https://user@wa.me/917217665761', 'https://wa.me/919999999999',
    'https://wa.me/917217665761/other', 'https://apextattooz.com/contact/',
    'tel:+919999999999', 'tel:+917217665761;ext=1',
    'mailto:someone@example.test', 'mailto:contact@apextattooz.com?cc=someone@example.test']) {
    assert.equal(contactMethod(href), null, String(href));
  }
  for (const path of ['/', '/artists', '/artists/', '/pricing-calculator', '/visit-studio', '/tattoo-pain-guide-delhi']) {
    assert.ok(sourcePath(path), path);
  }
  for (const path of ['/private@example.test', '/artists?name=private', '//', undefined]) {
    assert.equal(sourcePath(path), null);
  }
});

test('payload contains only approved categorical fields, never private message or link text', () => {
  const link = makeAnchor('https://wa.me/917217665761?text=Name%3DPrivate%20Phone%3D9999999999', 'calculator');
  link.textContent = 'A private name';
  link.attributes['data-enquiry-name'] = 'private@example.test';
  assert.deepEqual(enquiryPayload(link, '/pricing-calculator'), {
    contact_method: 'whatsapp', contact_placement: 'calculator', source_path: '/pricing-calculator',
  });
  assert.equal(enquiryPayload(makeAnchor(undefined, 'private@example.test'), '/'), null);
  assert.equal(enquiryPayload(makeAnchor(undefined, undefined, true), '/'), null);
  assert.equal(enquiryPayload(makeAnchor(undefined, 'hero'), '/private-name'), null);
  assert.deepEqual(enquiryPayload(makeAnchor(
    'mailto:contact@apextattooz.com?subject=Tattoo%20Inquiry&body=private%40example.test', 'footer',
  ), '/'), { contact_method: 'email', contact_placement: 'footer', source_path: '/' });
});

test('production bootstrap runs once and strips query, fragment and referring path', () => {
  const fixture = browser();
  const first = initializeSiteAnalytics(fixture.win);
  assert.deepEqual(first, { enabled: true, reason: null });
  assert.equal(initializeSiteAnalytics(fixture.win), first);
  assert.equal(fixture.scripts.length, 1);
  assert.equal(fixture.listeners.length, 1);
  assert.deepEqual(fixture.commands()[1], ['config', MEASUREMENT_ID, {
    page_location: 'https://www.delhitattooshop.com/',
    page_referrer: 'https://search.example.test',
    send_page_view: true, allow_google_signals: false, allow_ad_personalization_signals: false,
  }]);
  assert.equal(fixture.scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`);
  assert.equal(fixture.scripts[0].async, true);
  assert.equal(fixture.scripts[0].referrerPolicy, 'origin');
  assert.equal(referrerOrigin('mailto:private@example.test'), '');
  assert.equal(referrerOrigin('not a URL'), '');
  assert.equal(isProductionLocation(new URL('https://delhitattooshop.com/')), true);
});

test('local previews, other origins, unknown pages and opt-out never load analytics', () => {
  for (const href of ['http://localhost:4322/', 'http://127.0.0.1:4322/',
    'https://1st-draft.vercel.app/', 'https://delhitattooshop.com.evil.test/',
    'http://www.delhitattooshop.com/', 'https://www.delhitattooshop.com:8443/',
    'https://www.delhitattooshop.com/unknown']) {
    const fixture = browser(href);
    assert.equal(initializeSiteAnalytics(fixture.win).enabled, false, href);
    assert.equal(fixture.scripts.length, 0);
    assert.equal(fixture.listeners.length, 0);
    assert.equal(fixture.win.dataLayer, undefined);
  }
  const optedOut = browser();
  optedOut.win[`ga-disable-${MEASUREMENT_ID}`] = true;
  assert.equal(initializeSiteAnalytics(optedOut.win).reason, 'opt-out');
  assert.equal(optedOut.scripts.length, 0);
});

test('nested icon and native keyboard clicks each produce one event without navigation interception', () => {
  const fixture = browser('https://www.delhitattooshop.com/artists');
  initializeSiteAnalytics(fixture.win);
  const link = makeAnchor('tel:+917217665761', 'artist_dialog');
  const icon = { closest: (selector) => link.closest(selector) };
  const event = fixture.click(icon, { preventDefault: () => assert.fail('must preserve navigation') });
  fixture.listeners[0].listener(event);
  assert.equal(fixture.events().length, 1, 'same event must not be counted twice');
  fixture.click(link, { detail: 0, preventDefault: () => assert.fail('must preserve keyboard navigation') });
  assert.equal(fixture.events().length, 2, 'a second real activation must remain countable');
  assert.deepEqual(fixture.events()[0], ['event', ENQUIRY_EVENT, {
    contact_method: 'phone', contact_placement: 'artist_dialog', source_path: '/artists', send_to: MEASUREMENT_ID,
  }]);
  assert.equal(fixture.listeners[0].name, 'click');
  assert.deepEqual(fixture.listeners[0].options, { passive: true });
});

test('disabled calculator, cancelled clicks, secondary buttons and unrelated links do not count', () => {
  const fixture = browser();
  initializeSiteAnalytics(fixture.win);
  fixture.click(makeAnchor(undefined, 'calculator', true));
  fixture.click(makeAnchor(null, 'calculator'));
  fixture.click(makeAnchor(), { defaultPrevented: true });
  fixture.click(makeAnchor(), { button: 1 });
  fixture.click(makeAnchor(), { button: 2 });
  fixture.click(makeAnchor('/artists', 'hero'));
  fixture.click({ closest: () => null });
  assert.equal(fixture.events().length, 0);
  fixture.win[`ga-disable-${MEASUREMENT_ID}`] = true;
  fixture.click(makeAnchor());
  assert.equal(fixture.events().length, 0, 'runtime opt-out must also stop new intent events');
});

test('blocked or failing analytics cannot cancel a contact journey', () => {
  const fixture = browser();
  initializeSiteAnalytics(fixture.win);
  fixture.win.gtag = () => { throw new Error('blocked analytics'); };
  assert.doesNotThrow(() => fixture.click(makeAnchor(), {
    preventDefault: () => assert.fail('must preserve navigation on tracker failure'),
    stopPropagation: () => assert.fail('must preserve other page listeners'),
  }));
  const blockedSetup = browser();
  blockedSetup.doc.head.appendChild = () => { throw new Error('script blocked'); };
  assert.doesNotThrow(() => initializeSiteAnalytics(blockedSetup.win));
  assert.equal(initializeSiteAnalytics(blockedSetup.win).enabled, false);
});
