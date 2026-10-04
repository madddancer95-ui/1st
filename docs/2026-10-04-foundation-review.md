# Delhi Tattoo Shop foundation review — 4 October 2026

This is a draft for review, not a production release. It serves clients across Delhi from the current Apex Tattooz studio. The main Apex website is outside this change.

The owner requires the original colours, styling and layout. This change preserves the production visual language; it does not authorize a redesign or future UI enhancements. Any earlier local design experiment was withdrawn. New content uses existing page patterns, and functional repairs reuse existing controls and styles.

## Scope

Five substantive pages: `/`, `/artists`, `/pricing-calculator`, `/visit-studio`, and `/tattoo-pain-guide-delhi`. They replace unsupported claims with published studio facts, make ownership clear, and provide a practical consultation and visit journey. The four featured artists are a selection from Apex's homepage, not a claim about its complete roster.

The estimate follows the dedicated Apex pricing page: width × height in inches, ₹699 for the first square inch, then ₹299 / ₹399 / ₹499 for additional area according to complexity. The minimum is ₹699; the artist confirms the quote. Unsupported package discounts and removal-price calculations were removed.

## Business facts

The owner designated these sources; checked 4 October 2026:

- [Apex homepage and published portfolio](https://apextattooz.com/)
- [Apex contact page](https://apextattooz.com/contact/)
- [Dedicated Apex pricing policy](https://apextattooz.com/tattoo-price-in-delhi/)

Address: Shop No. 52, Basement, Mall Road, Kingsway Camp, GTB Nagar, Near Metro Gate No. 3, Delhi - 110009. Phone/WhatsApp: +91-721-766-5761. Email: contact@apextattooz.com.

Sunday hours conflict within the official website, so the draft asks visitors to confirm hours. Coordinates were not established and are omitted. Current details were verified using the official website, without opening a Google listing, Maps or Business Profile for the fact check.

## URL preservation

These exact legacy paths receive permanent 301 redirects in the compiled Vercel routes:

| Legacy path | Destination |
| --- | --- |
| `/connaught-place-tattoo-studio` | `/visit-studio` |
| `/karol-bagh-tattoo-shop` | `/visit-studio` |
| `/khan-market-tattoo-studio` | `/visit-studio` |
| `/greater-kailash-tattoo` | `/visit-studio` |
| `/nehru-place-tattoo-services` | `/visit-studio` |
| `/artist/maddy-realism-tattoo-artist-delhi` | `/artists` |
| `/artist/guru-color-tattoo-specialist-delhi` | `/artists` |
| `/artist/ram-blackwork-mythology-tattoo-delhi` | `/artists` |
| `/artist/sharan-japanese-tattoo-master-delhi` | `/artists` |
| `/artists/ravi-mehta` | `/artists` |

Trailing-slash variants first normalize with 308, then use the mapped redirect. Verify actual HTTP responses after an eligible hosting deployment; Astro's local static preview does not exercise Vercel routing. Five canonical destinations appear in the sitemap. Preferred host is `https://www.delhitattooshop.com`.

## Validation

Run `npm run build`, `node scripts/verify-site.mjs`, `node --test scripts/tattoo-pricing.test.mjs`, and `git diff --check`.

The checks cover five canonical pages and JSON schemas, sitemap routes, internal fragment targets, official artist image sources, ten compiled permanent redirects, and calculator rates, dimensions, decimals, minimums and invalid input. Browser review confirms all twelve retained homepage images and four artist photos load, calculator interaction and estimate links work, and native artist dialogs close with Escape and return focus. No WhatsApp messages were sent.

The restored original homepage has existing mobile defects: its menu button has no opening behavior, content extends beyond a 390-pixel viewport, and the fixed-height hero clips its heading. These remain unresolved under the owner's instruction to preserve the original UI. They require a separate narrowly scoped repair before describing the site as ready for release. Calculator, artists, visit and consultation pages had no horizontal overflow at 390 pixels in this review. There is no claim of a complete accessibility audit or full browser pass.

Existing analytics tags remain. Event receipt, deduplication, enquiry attribution and completed-booking tracking have not been verified. A successful build or valid JSON is not Google policy approval.

## Release and recovery

Production remains on `main`. The `codex/delhi-foundation` branch has automatic Vercel deployment disabled. Do not merge or deploy until the commercial hosting arrangement is resolved: [Vercel Hobby is restricted to personal, non-commercial use](https://vercel.com/docs/plans/hobby). No paid plan is authorized by this document.

Original production source commit: `ca34a888ac74d1c7d8de9b2e6e0bccbcfb2cc0dc`. A full Git bundle was saved outside the repository before edits. The repository already tracks `.vercel/output`; regenerated files accompany their reviewed source. If a release needs recovery, revert the change and rebuild, or restore the previously verified production deployment after checking the hosting arrangement. Do not reset unrelated work.

Before release, verify the hosting runtime, redirects, canonical headers/HTML, images, contact links, and mobile interactions. After release, check Search Console indexing and enquiry delivery. No rankings, traffic share or booking outcomes are guaranteed.

The saved dependency audit reports existing advisories. This static-output content change does not upgrade dependencies or prove those issues exploitable. Review and update them in a separate controlled change before broad expansion.

## Growth boundary

Owning two websites is not itself prohibited. [Google's spam policy](https://developers.google.com/search/docs/essentials/spam-policies) prohibits doorway and scaled low-value content. Disclosure alone is insufficient. This foundation does not establish independent search demand: develop a genuinely useful planning experience and evaluate incremental enquiries and completed bookings before expanding. Do not mass-produce locality variants, copy Apex's entire service catalogue, or promise a specific traffic share.
