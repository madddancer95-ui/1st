import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import assert from 'node:assert/strict';
import { contactMethod, enquiryPayload } from '../src/lib/enquiry-tracking.mjs';

const root = 'dist';
const origin = 'https://www.delhitattooshop.com';
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
const pages = walk('src/pages').filter(file => file.endsWith('.astro')).map(file => {
  const route = '/' + relative('src/pages', file).replace(/(?:^|\/)index\.astro$/, '').replace(/\.astro$/, '');
  return { route: route.replace(/\/$/, '') || '/', file: join(root, route, 'index.html') };
});
const documents = new Map(pages.map(page => [page.route, readFileSync(page.file, 'utf8')]));
let schemas = 0;
let trackedContacts = 0;
for (const [route, html] of documents) {
  const canonicals = [...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"[^>]*>/g)].map(match => match[1]);
  assert.deepEqual(canonicals, [origin + route], `Canonical mismatch: ${route}`);
  // The analytics origin allowlist legitimately accepts the redirecting host.
  // Public links, metadata and JSON-LD must still use the canonical www host.
  const markup = html.replace(/<script\b(?![^>]*type="application\/ld\+json")[^>]*>[\s\S]*?<\/script>/g, '');
  assert(!markup.includes('https://delhitattooshop.com'), `Old host remains in public markup: ${route}`);
  assert.equal([...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].filter(([script]) => script.includes('G-JDGJB534KV')).length, 1, `Expected one shared analytics bootstrap: ${route}`);
  if (route === '/') {
    assert(html.includes('src="/gtm.js"'), 'Homepage Search Console GTM verification script missing');
    assert(html.includes('https://www.googletagmanager.com/ns.html?id=GTM-K4DMPN4P'), 'Homepage Search Console GTM verification iframe missing');
  } else {
    assert(!html.includes('GTM-K4DMPN4P') && !html.includes('src="/gtm.js"'), `Unneeded GTM installation remains: ${route}`);
  }
  for (const [tag] of html.matchAll(/<a\b[^>]*>/g)) {
    const attrs = Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value.replaceAll('&amp;', '&')]));
    if (!contactMethod(attrs.href)) continue;
    const anchor = { getAttribute: key => attrs[key] ?? null, closest: () => null };
    assert(enquiryPayload(anchor, route), `Untracked contact link on ${route}: ${attrs.href}`);
    trackedContacts++;
  }
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    JSON.parse(match[1]);
    schemas++;
  }
  for (const match of html.matchAll(/\bhref="([^"\s]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), origin + route);
    if (url.origin !== origin) continue;
    const targetRoute = url.pathname.replace(/\/$/, '') || '/';
    if (url.hash && documents.has(targetRoute)) {
      assert(documents.get(targetRoute).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor ${match[1]} on ${route}`);
    }
  }
}
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
for (const url of urls) {
  assert.equal(new URL(url).origin, origin);
  assert(documents.has(new URL(url).pathname), `Sitemap route not built: ${url}`);
}
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const artists = documents.get('/artists');
const imagePaths = [...artists.matchAll(/<img\b[^>]*src="([^"]*)"/g)].map(match => match[1]);
assert.equal(imagePaths.length, 4, 'Expected four selected official artist portraits');
for (const path of imagePaths) {
  assert(path, 'Empty artist image source');
  if (path.startsWith('https://')) assert.equal(new URL(path).hostname, 'apextattooz.com', 'Unexpected artist photo source');
  else assert(existsSync(join(root, path)), `Missing artist image: ${path}`);
}
assert.equal([...artists.matchAll(/<dialog\b/g)].length, 4, 'Expected four profile dialogs');
assert(!artists.includes('onclick='), 'Inline artist event handlers remain');
assert(!artists.includes('₹/inch'), 'Empty artist prices remain');
const config = JSON.parse(readFileSync('.vercel/output/config.json', 'utf8'));
const legacyDestinations = {
  '/connaught-place-tattoo-studio': '/visit-studio',
  '/karol-bagh-tattoo-shop': '/visit-studio',
  '/khan-market-tattoo-studio': '/visit-studio',
  '/greater-kailash-tattoo': '/visit-studio',
  '/nehru-place-tattoo-services': '/visit-studio',
  '/artist/maddy-realism-tattoo-artist-delhi': '/artists',
  '/artist/guru-color-tattoo-specialist-delhi': '/artists',
  '/artist/ram-blackwork-mythology-tattoo-delhi': '/artists',
  '/artist/sharan-japanese-tattoo-master-delhi': '/artists',
  '/artists/ravi-mehta': '/artists',
};
for (const [from, to] of Object.entries(legacyDestinations)) {
  const redirect = config.routes.find(rule => rule.status === 301 && new RegExp(rule.src).test(from));
  assert.equal(redirect?.headers?.Location, to, `Legacy URL not preserved: ${from}`);
  assert(documents.has(to), `Redirect destination not built: ${to}`);
}
const slashRule = config.routes.find(rule => rule.status === 308 && rule.headers?.Location === '/$1');
assert(slashRule, 'Built slash redirect missing');
assert(!new RegExp(slashRule.src).test('/'), 'Slash redirect must preserve homepage');
assert(new RegExp(slashRule.src).test('/artists/'), 'Slash redirect must accept duplicate page path');
assert(readFileSync(join(root, 'robots.txt'), 'utf8').includes(`Sitemap: ${origin}/sitemap.xml`));
console.log(JSON.stringify({ status: 'passed', pages: pages.length, sitemapURLs: urls.length, parsedSchemas: schemas, artistImages: imagePaths.length, trackedContacts, checks: ['canonical targets', 'schema JSON syntax', 'internal fragment targets', 'sitemap routes', 'official artist photo sources', '10 permanent legacy redirects', 'built slash redirect', 'robots sitemap host', 'one analytics bootstrap per page', 'all contact links carry approved tracking fields'] }, null, 2));
