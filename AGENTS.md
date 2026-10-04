# Delhi Tattoo Shop project instructions

## Scope and audience

- This is Apex Tattooz's second website, delhitattooshop.com. The acquisition target is the **entire city of Delhi**, not only the neighbourhood containing the studio.
- Serving an area does not imply having a physical branch there. Keep physical addresses, directions and business schema factual.
- The owner has instructed us to obtain current business details from Apex's official website. **Do not visit or operate the Google Business Profile / Google Maps listing.** A subsequent explicit owner instruction can change this restriction.
- Do not modify the main Apex website as an incidental part of work here.
- The owner explicitly requires the existing colours, styling and layout to stay the same. **Do not redesign, recolour, or enhance the UI without a subsequent explicit instruction.** Limit this work to accurate content, SEO and functional repairs; reuse the original visual language for necessary new content.

## Content and page ownership

- Before writing a page, record its client decision, intended audience, evidence, nearest overlapping page on this site and Apex, and reason a separate page is useful.
- Preserve useful existing URLs. Do not create pages by swapping Delhi neighbourhood names, copying Apex service pages or targeting a publishing quota.
- Do not invent branches, artist credentials, review quotes, review counts, awards, completed work, prices or safety claims. Keep source URLs and the date checked for material business facts.
- Explain Apex ownership openly. Ownership disclosure is not a substitute for useful content or compliance with Google's doorway and scaled-content policies.
- Do not promise rankings, traffic share, AI citations or leads. Measure qualified enquiries and completed bookings as well as search traffic.
- Crawler instructions and structured data must describe the same useful content customers see. No hidden bot-only ranking instructions or fabricated schema.

## Implementation and release

- Production currently uses the `main` branch. Use a working branch, retain a recoverable source snapshot, and test before any production change.
- Canonical host: `https://www.delhitattooshop.com`. Use `/` for the homepage and no trailing slash for content pages. Keep canonicals, links, sitemap and redirect configuration consistent.
- Run `npm run build` followed by `node scripts/verify-site.mjs`. Test changed customer interactions in a browser. Schema syntax validation does not verify the truth or eligibility of claims.
- Preserve existing photographs and contact journeys. Do not submit enquiry forms or send messages just to test a link.
- This repository already tracks `.vercel/output`; if committing generated files, regenerate from the same reviewed source. Do not edit generated HTML as the source of truth.
- The Vercel account was observed on Hobby on 4 October 2026. Vercel restricts that plan to personal, non-commercial use. Resolve the hosting arrangement before releasing this business-site update; do not purchase a plan or change billing without the owner's specific authorization.
- The `codex/delhi-foundation` branch intentionally disables automatic Vercel deployments while current business facts and hosting are being reconciled. Main deployment behaviour is unchanged.

## Evidence and remaining work

- The research package is in the parent workspace at `output/delhi-tattoo-growth-2026-10-04/`; it contains dated Search Console exports, official policy sources, URL inventory and architecture/backlog files.
- Published legacy content contains claims requiring review. A successful build, no manual action, or canonical repair is not a certificate that all content complies with Google policies.
- Avoid broad dependency upgrades within a content change. The saved dependency audit needs a controlled follow-up with exposure review and regression tests.
