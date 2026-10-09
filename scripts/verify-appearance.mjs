// Scope-specific preservation check for the October mobile/tracking repair.
// This checks source evidence, not rendered visibility or pixel equivalence.
// Run browser checks as well: layout and computed styles can change without
// changing the original colour/font declarations or content inventory.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { parse } from '@astrojs/compiler';
import postcss from 'postcss';

const { values } = parseArgs({ options: { baseline: { type: 'string' } } });
const baseline = values.baseline ?? 'ed1d4d9e80ecc2edd56825cefadf995b1c13c215';
const root = fileURLToPath(new URL('../', import.meta.url));
const pages = [
  'src/pages/index.astro',
  'src/pages/artists/index.astro',
  'src/pages/pricing-calculator.astro',
  'src/pages/visit-studio.astro',
  'src/pages/tattoo-pain-guide-delhi.astro',
];
const normalize = (value) => value.replace(/\s+/g, ' ').trim();
const attribute = (node, name) => node.attributes?.find((item) => item.name === name);
const paintProperty = (property) =>
  property.startsWith('--') ||
  /^(?:color|background(?:-.+)?|font(?:-.+)?|(?:box|text)-shadow|filter|-webkit-text-fill-color|border(?:-(?:color|top|right|bottom|left)(?:-color)?)?)$/.test(property);

function declarations(css) {
  const records = [];
  postcss.parse(css).walkDecls((declaration) => {
    if (!paintProperty(declaration.prop)) return;
    const context = [];
    for (let parent = declaration.parent; parent; parent = parent.parent) {
      if (parent.type === 'rule') context.unshift(normalize(parent.selector));
      if (parent.type === 'atrule') context.unshift(`@${parent.name} ${normalize(parent.params)}`);
    }
    records.push({
      context: context.join(' / '),
      property: declaration.prop,
      value: normalize(declaration.value),
      important: Boolean(declaration.important),
    });
  });
  return records;
}

async function inventory(source) {
  const { ast } = await parse(source);
  const result = { stylesheetPaint: [], inlinePaint: [], stylesheetLinks: [], text: [], links: [], media: [], frontmatter: '' };
  function walk(node, inBody = false) {
    if (node.type === 'comment') return;
    if (node.type === 'frontmatter') {
      // This is the only new frontmatter dependency authorized by this repair.
      result.frontmatter = normalize(node.value.replace(/^import SiteAnalytics from [^\n]+;\s*$/m, ''));
      return;
    }
    if (node.name === 'script' || node.name === 'SiteAnalytics') return;
    if (node.name === 'style') {
      result.stylesheetPaint.push(...declarations(node.children.map((child) => child.value ?? '').join('')));
      return;
    }
    if (node.name === 'iframe' && attribute(node, 'src')?.value.startsWith('https://www.googletagmanager.com/ns.html')) return;
    if (node.name === 'link' && attribute(node, 'rel')?.value === 'stylesheet') {
      const href = attribute(node, 'href');
      result.stylesheetLinks.push(href ? { kind: href.kind, value: href.value } : null);
    }
    const inlineStyle = attribute(node, 'style');
    if (inlineStyle) {
      if (inlineStyle.kind === 'expression') {
        // Dynamic inline styles cannot be safely interpreted as CSS without
        // evaluating business data; retain the entire expression instead.
        result.inlinePaint.push({ element: node.name, expression: normalize(inlineStyle.value) });
      } else {
        const paint = declarations(`element {${inlineStyle.value}}`);
        // Skip layout-only styles so mobile sizing fixes do not change the inventory.
        if (paint.length) result.inlinePaint.push({ element: node.name, declarations: paint });
      }
    }
    inBody ||= node.name === 'body';
    if (inBody && node.type === 'text' && normalize(node.value)) result.text.push(normalize(node.value));
    if (inBody && node.name === 'a') {
      const href = attribute(node, 'href');
      result.links.push(href ? { kind: href.kind, value: href.value } : null);
    }
    if (inBody && ['img', 'video', 'audio', 'source', 'iframe'].includes(node.name)) {
      result.media.push({
        element: node.name,
        attributes: (node.attributes ?? [])
          .filter((item) => ['src', 'srcset', 'poster', 'alt', 'type', 'width', 'height', 'autoplay', 'muted', 'loop', 'playsinline', 'preload'].includes(item.name))
          .map(({ name, kind, value }) => ({ name, kind, value })),
      });
    }
    for (const child of node.children ?? []) walk(child, inBody);
  }
  walk(ast);
  return result;
}

const report = {
  baseline,
  checkedAt: new Date().toISOString(),
  purpose: 'Verify preservation of original palette, typography, shadows, content, link destinations and media during mobile/tracking repairs.',
  limitation: 'Source checks do not prove rendered layout, visibility, contrast, menu usability or desktop/mobile pixel equivalence; browser QA is required.',
  pages: [],
};
let failed = false;
for (const path of pages) {
  const before = await inventory(execFileSync('git', ['show', `${baseline}:${path}`], { cwd: root, encoding: 'utf8' }));
  const after = await inventory(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'));
  const checks = {};
  for (const key of Object.keys(before)) {
    try {
      assert.deepEqual(after[key], before[key]);
      checks[key] = { preserved: true, ...(Array.isArray(before[key]) ? { count: before[key].length } : {}) };
    } catch {
      failed = true;
      checks[key] = { preserved: false, note: 'Source differs from the saved baseline; review the page diff before accepting.' };
    }
  }
  report.pages.push({ path, checks });
}
report.passed = !failed;
console.log(JSON.stringify(report, null, 2));
if (failed) process.exitCode = 1;
