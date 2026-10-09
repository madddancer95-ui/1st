# Mobile and enquiry tracking repair — 9 October 2026

The owner authorized mobile repairs and enquiry tracking, preserving the existing colours and design and serving clients across all Delhi. This update is prepared on `codex/delhi-foundation` in draft PR #1. The website changes are not deployed. The separate Delhi Tattoo Shop Analytics settings described below were saved in the live Analytics account.

## Mobile changes

- The homepage menu opens from its existing button, supports keyboard activation, Escape with focus return, outside-click, navigation selection and breakpoint changes. The collapsed menu is removed from keyboard navigation.
- The homepage hero grows with its content. Removing its negative mobile offset and fixed height prevents the heading from being clipped.
- Existing two-column sections stack on narrow screens, and grid minimums fit their available space. Decorative backgrounds remain clipped within their existing containers.
- On phones up to 480px, the calculator header wraps without compressing the Back link into individual words. It occupies space in the page flow and stays at the top while scrolling, so it cannot cover the page title.

No page text, Delhi-wide targeting, contact destination, photograph, colour, font or shadow declaration changed. The palette includes the original page-specific colours; it was not standardized or redesigned. `scripts/verify-appearance.mjs` compares those source inventories with pre-repair commit `ed1d4d9e80ecc2edd56825cefadf995b1c13c215`. Source preservation is not a full visual/accessibility audit; existing contrast choices remain.

## Enquiry measurement

All five pages use one shared Google tag bootstrap for the site's existing measurement ID `G-JDGJB534KV`. The published GTM container `GTM-K4DMPN4P` had zero tags and zero rules when fetched on 9 October. **Its homepage script/noscript installation is retained for Search Console ownership verification**: the authenticated ownership page reported both Google Analytics and Google Tag Manager as successfully verified. GTM was removed only from other pages, and the unused generic component was removed. The homepage bootstrap also skips local/preview hosts. Do not add a second GA4 configuration or enquiry tag through this retained container; establish another verified ownership method before removing it.

`enquiry_click` is sent for approved WhatsApp, phone and email link activations. It contains only:

| Parameter | Meaning |
| --- | --- |
| `contact_method` | `whatsapp`, `phone`, or `email` |
| `contact_placement` | A fixed placement such as `hero`, `pricing`, `artist_dialog`, or `calculator` |
| `source_path` | One of the five known page paths |
| `send_to` | The verified Delhi Tattoo Shop measurement ID |

No WhatsApp draft, email subject/body, form field, price, customer identifier or full destination URL is added to this custom event. Known page locations omit query strings and fragments, and referrers retain only their origin. **This intentionally limits UTM/query-level campaign attribution.** No Google Ads conversion tag, campaign integration or advertising account was changed. Approve and test a specific attribution design before sending paid traffic to this site.

The script runs only on the HTTPS production domains and known routes. Local and Vercel preview hosts load no Google measurement script. It respects the standard property opt-out flag, initializes once, handles nested icons and native keyboard clicks, ignores disabled/cancelled/secondary-button activations, and never delays or prevents contact navigation. The existing consent settings are not overridden.

These are contact-intent counts. They cannot establish that WhatsApp was sent, a phone call connected, an email arrived, or a client booked. No `generate_lead`, purchase, revenue or booking event is fabricated. No real test enquiry was sent. Ad blockers, consent choices, early clicks and page navigation can reduce measured counts.

## Verified Analytics account and changes

Verified in the authenticated Analytics UI:

- Account `DelhiTattooShop` / `367874107`.
- Property `DelhiTattooShop.com` / `504423781`.
- Web stream `12142234797`, URL `https://www.delhitattooshop.com`, measurement ID `G-JDGJB534KV`.
- The stream reported recent collection, but this is not evidence of receipt of the new, undeployed event.

Three event-scoped custom dimensions were created and verified: **Enquiry contact method**, **Enquiry button location**, and **Enquiry source page**, mapped to the parameters above. They have not been marked as confirmed leads or imported into Ads.

Automatic form interactions and site search were turned off: there is no enquiry form or on-site search; the calculator's form is only a local estimate. Page views, scrolls, video engagement and downloads remain enabled. **Generic outbound-click measurement remains enabled for continuity while the new code awaits release.** Do not add generic `click` counts to `enquiry_click` counts as if both were distinct enquiries. Outbound measurement was briefly disabled during setup and restored within this session before completion.

Email redaction remains enabled. URL-query redaction was enabled for `text`, `subject`, and `body`; Google's preview confirmed those values become `(redacted)`, including in a sample WhatsApp URL. This protects automatic `link_url` reporting as well as the strict custom payload. It is not a claim that all possible personal information is automatically detected. See [Google's data redaction documentation](https://support.google.com/analytics/answer/13544947?hl=en).

Implementation references: [Google event setup](https://developers.google.com/analytics/devguides/collection/ga4/events), [explicit event routing](https://developers.google.com/tag-platform/gtagjs/routing), and [GA4 configuration](https://developers.google.com/analytics/devguides/collection/ga4/reference/config).

## Validation and release status

Passed: production build, five-page site verifier, ten pricing/tracking test groups, source appearance preservation, and whitespace checks. The site verifier checks 33 marked contact anchors including the JavaScript-disabled fallback; there are 32 active contact links with JavaScript. Independent execution of each compiled tracker confirmed one bootstrap per page and approved event payloads for every active contact link.

The built site was checked at actual 320, 390, 768 and 1280px viewports: all five pages fit without horizontal scrolling, and the homepage/calculator headings are below their headers. Mobile menu open, keyboard/Escape, outside-click, anchor selection and resize behaviour were checked. The calculator returned ₹2,196 for 2×2 inches at the intricate rate, and zero width disabled its WhatsApp link. An isolated browser fixture verified nested WhatsApp clicks, keyboard phone activation, email subjects, ignored unrelated/disabled links, and duplicate initialization without contacting the studio or Google.

Evidence is outside the public repository in `output/delhi-mobile-tracking-2026-10-09/` in the parent workspace. Existing `.vercel/output` files are rebuilt from these sources.

Production `main` remains unchanged; draft-branch automatic deployment remains disabled. The previous commercial-hosting eligibility item remains open, and the owner's preference for the current free plan is preserved. No hosting purchase or billing change was made. At release, verify actual Vercel redirects, one page view per load, and `enquiry_click` receipt and parameters in the correct GA4 property. Until then, the website repair and new event delivery must be described as tested in preview, not live. Received enquiries and completed bookings still need a separate outcome record.

Recovery: revert the repair commit and rebuild rather than resetting unrelated work. Analytics changes are separately reversible: archive only these three custom definitions if necessary, restore the previously enabled form/search switches, and remove the three added query-redaction keys. Avoid deleting historical event data.
