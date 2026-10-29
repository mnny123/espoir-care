# Espoir Care website

The website for Espoir Care (formerly Being Human Care), a registered NDIS provider and DVA community nursing provider based in the Redlands, Brisbane.

Built with [Astro](https://astro.build) as a static site with plain CSS. It deploys to GitHub Pages with GitHub Actions.

- Live (for now): https://mnny123.github.io/espoir-care/
- Final domain (placeholder): https://espoircare.com.au

---

## Run it on your computer

You need Node.js 22 or later.

```sh
npm install
npm run dev
```

Then open http://localhost:4321/espoir-care/ in your browser. Pages reload as you edit.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local preview |
| `npm run build` | Builds the finished site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder |
| `npm run check:copy` | Checks the built site: title and description lengths, unique titles, one h1 per page, breadcrumbs, canonical tags, broken internal links, em dashes, curly quotes, emoji, banned words, "Submit" buttons, pre-ticked boxes and gradients. It also lists possible Oxford commas and claims for a person to check. |
| `npm run test:a11y` | Runs axe and HTML_CodeSniffer (through Pa11y) on every page and every enquiry tab, and checks for sideways scrolling and small tap targets at 320px wide, with JavaScript on and off. The first run downloads a headless Chrome. |
| `npm test` | Build, then both checks |
| `npm run brand` | Rebuilds every logo, favicon and the social share image from `public/brand/logo.png` |
| `npm run redirects` | Prints 301 redirect rules for the old URLs (see [Redirects](#redirects-from-the-old-site)) |

---

## Deploy

The site deploys itself every time you push to the `main` branch.

**One-time setup**

1. Push this repository to GitHub as `mnny123/espoir-care`.
2. In GitHub, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` installs, builds, runs the copy checks and the accessibility tests, then publishes. If any check fails, the site is not published, and the failure shows in the **Actions** tab.

Pull requests run the same build and tests but do not publish.

### Moving to the custom domain later

1. Buy the domain. If it is not `espoircare.com.au`, change `customDomain` in `src/config/site.ts`.
2. In your domain's DNS settings, point it at GitHub Pages ([GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. In GitHub, go to **Settings > Pages > Custom domain**, enter the domain and tick **Enforce HTTPS** once it is available.
4. In `src/config/site.ts` set `customDomainLive: true`. This removes the `/espoir-care` path from every link, canonical tag and the sitemap.
5. In `.github/workflows/deploy.yml`, uncomment the **Add CNAME** step and check the domain in it.
6. When you are ready for Google to index the new site, set `noindex: false` in `src/config/site.ts`.
7. Set up 301 redirects from the old domain (see below).

`robots.txt` only works at the root of a domain, so it starts working once the custom domain is live. Until then, the `noindex` meta tag on every page keeps the site out of search results.

---

## Placeholders to fill in

Almost everything lives in **`src/config/site.ts`**. Each `[TODO ...]` shows on the site as a highlighted apricot marker, so you can spot what is missing. Search the project for `TODO` to find them all.

### Settings and business details (`src/config/site.ts`)

| Placeholder | What to put |
| --- | --- |
| `WEB3FORMS_ACCESS_KEY` | Done. Linked to info@beinghumancare.com.au. |
| `GA_MEASUREMENT_ID` | Your Google Analytics 4 ID (looks like `G-XXXXXXX`). Analytics never loads while this is the placeholder. |
| `abn` | Done (40 703 074 275) |
| `ndisRegNumber` | `[TODO NDIS REG NUMBER]` |
| `dvaProviderNumber` | `[TODO DVA PROVIDER NUMBER]`, shown on the About page |
| `hours` | Done (open 24 hours, 7 days) |
| `openingHoursSchema` | Done (24/7) |
| `googleProfileUrl` | `[TODO GOOGLE PROFILE URL]`. Once set, the note under the reviews becomes a link. |
| `customDomain`, `customDomainLive`, `noindex` | See [Moving to the custom domain later](#moving-to-the-custom-domain-later) |
| `SHOW_STORIES` | Set to `true` once the first real story is in `src/data/stories.ts` |

### Content to confirm

**Services (`src/data/services.ts`)**
- NDIS registration for every service except SIL (you are registered for SIL under group 0115). Until you confirm, no other service claims registration.
- Important: NDIA (agency) managed participants can only use registered providers. Check which services you can offer them. The enquiry forms still let people choose "NDIS agency managed" so they can ask.
- Private rates, or how quotes work, for each service
- SIL: where your homes are, how many people live in each, vacancies
- STA: where stays happen, what the home is like, private stays
- Community nursing: the nursing tasks your team does
- In-home nursing: palliative care scope (for example after hours), whether you offer 24 hour nursing
- Cleaning: whether you bring products and equipment
- Gardening: jobs you do not do
- Travel: staff cars, insurance, how travel is charged
- Children: age groups, that you do not provide therapy, Blue Card requirements, early childhood registration
- DVA: Veterans' Home Care co-payment rules and DVA respite rules

**Locations (`src/data/locations.ts`)**
- Suburb lists for all four areas (these are best guesses)
- Bay Islands and North Stradbroke Island coverage
- Your northern boundary (Moreton Bay) and whether you cover parts of Logan
- How you schedule visits and any travel charges for each area
- The "services people often ask about" list for each area
- South side: whether extra or short notice visits really are easier there

**About (`src/pages/about.astro`)**
- How and why the business started, and the reason for the name change, in your own words
- Team names, roles and photos (the owner is not named yet, as you asked)
- Any other NDIS registration groups, and which Veterans' Home Care services you deliver

**Careers (`src/pages/careers.astro`)**
- Pay rates, award, employment type, training and perks
- Whether experience or a Certificate III or IV is needed
- Any other checks (for example a Blue Card)

**Legal pages** (all marked "Draft, please have this reviewed")
- "Last updated" date on every legal page (`src/layouts/Legal.astro`)
- Privacy policy: client record system, email provider, security measures, retention periods, privacy officer, Web3Forms data handling
- Refund and cancellation policy: NDIS short notice period and percentage (from the current NDIS Pricing Arrangements), STA rules, DVA contract terms, private notice period, fee and refund timeframe, how to cancel out of hours, notice to end services
- Complaints: acknowledgement and resolution timeframes, checked against your complaints procedure
- Accessibility statement: results of manual screen reader testing

### Photos and logos

- **Team photos:** every lavender block saying "Team photo coming soon" or "Photo coming soon" has a TODO comment beside it (home page and About page). Swap in an `<img>` with a description in `alt`.
- **NDIS registered provider logo:** a commented-out slot is in `src/components/Footer.astro`. Only add it once you have confirmed you are allowed to use it.
- **Office address:** none is shown, at your request. If you open an office for visitors, add it on the Contact page (a TODO comment marks the spot) and in `src/lib/schema.ts`.

### Logo files to replace when you get a proper export

`public/brand/logo.png` is a 768x508 screenshot, so the heart is only about 140px wide. Everything below is cut from it by `npm run brand`. When you have a larger PNG (2000px wide or more) or an SVG, replace `public/brand/logo.png` and run `npm run brand`. This rebuilds:

| File | Used for | Current quality |
| --- | --- | --- |
| `public/brand/logo-horizontal.png` (579x125) | Header logo | Sharp at its current size. Soft if made larger or zoomed in a lot. |
| `public/brand/logo-horizontal-white.png` | Footer logo (all white) | Same |
| `public/brand/logo-trimmed.png` (448x307) | Structured data logo | Fine |
| `public/brand/mark.png` (137x167) | Heart on its own | Small |
| `public/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png` | Browser tab icons | Fine |
| `public/apple-touch-icon.png` (180px) | iPhone home screen | Fine, but no room to spare |
| `public/icon-192.png`, `public/icon-512.png` | Android home screen | The 512px icon is upscaled and soft |
| `public/og-image.png` (1200x630) | Social share image | The logo is shown at its original size (small) to avoid upscaling |

If you get an SVG, the script needs a small change to read it. Ask for that when the time comes.

---

## Colour contrast (WCAG 2.2 AA)

Every text and background pair used on the site, checked with the WCAG formula. AA needs 4.5:1 for normal text, 3:1 for large text and 3:1 for interface parts such as input borders and focus rings.

**Text**

| Text | Background | Ratio | Result |
| --- | --- | --- | --- |
| Charcoal #2E2A2B (body) | White #FFFFFF | 14.17:1 | Pass |
| Charcoal | Pale lilac #F7F4FA | 13.00:1 | Pass |
| Charcoal | Lavender mist #EDE4F2 | 11.46:1 | Pass |
| Charcoal | Apricot #F2A65A | 7.00:1 | Pass |
| Plum #4A2C5E (headings) | White | 11.58:1 | Pass |
| Plum | Pale lilac | 10.63:1 | Pass |
| Plum | Lavender mist | 9.37:1 | Pass |
| Plum (badges, TODO markers, error text) | Apricot | 5.72:1 | Pass |
| Warm purple #7B4B94 (links) | White | 6.41:1 | Pass |
| Warm purple | Pale lilac | 5.88:1 | Pass |
| Warm purple | Lavender mist | 5.18:1 | Pass |
| Slate grey #6B6670 (hints, captions) | White | 5.59:1 | Pass |
| Slate grey (top bar) | Pale lilac | 5.13:1 | Pass |
| Slate grey (photo placeholders) | Lavender mist | 4.52:1 | Pass |
| White (buttons, footer) | Plum | 11.58:1 | Pass |
| White (button hover) | Warm purple | 6.41:1 | Pass |
| Lavender mist (footer link hover) | Plum | 9.37:1 | Pass |

**Interface parts**

| Part | Against | Ratio | Result |
| --- | --- | --- | --- |
| Input borders, slate grey | White | 5.59:1 | Pass |
| Input borders, slate grey | Lavender mist (form panels) | 4.52:1 | Pass |
| Focus ring, warm purple | White / lilac / lavender | 6.41 / 5.88 / 5.18:1 | Pass |
| Focus ring in the footer, white | Plum | 11.58:1 | Pass |
| Footer icons, apricot | Plum | 5.72:1 | Pass |

**Pairs the site deliberately never uses** (they fail): slate grey on apricot (2.76:1), warm purple on apricot (3.17:1), white on apricot, warm purple focus ring on plum (1.81:1) and the soft border #E2DCE8 for input fields (1.34:1 on white). The soft border is only used for card outlines and dividers, which are decorative. The apricot quote marks and error bars sit beside text that carries the meaning, so they do not need 3:1.

---

## Third parties the site talks to

| Service | When | Why |
| --- | --- | --- |
| **Web3Forms** (api.web3forms.com) | Only when someone sends a form | Emails form submissions to info@beinghumancare.com.au |
| **Google Analytics 4** (www.googletagmanager.com, www.google-analytics.com) | Only after someone clicks "Accept analytics", and only once a real measurement ID is set | Visitor statistics. Consent Mode v2 starts with everything denied, and advertising signals stay denied even after acceptance. |
| **Outbound links** | Only when clicked | Facebook, Instagram, LinkedIn, Google Business profile, NDIS Commission, NDIS, DVA, OAIC, Health Ombudsman, Carer Gateway, Disability Advocacy Finder, Human Rights Commission, National Relay Service |

There are no other scripts, pixels, maps or embeds. Fonts (Figtree, through Fontsource) and icons (Lucide, inline SVG) are bundled into the site, so no requests go to Google Fonts or any CDN. GitHub Pages hosts the site.

---

## Redirects from the old site

Every URL from the old site's sitemap is listed in **`src/data/redirects.json`**, with its new URL. Paths that still exist (all the service and location pages, About, Contact, Privacy policy, Thank you, Stories) were kept as they were.

GitHub Pages cannot send real 301 redirects. Until the domain moves, each changed URL gets a small page that forwards visitors and points search engines at the new page. When the domain moves to a host that supports redirects, generate the rules with:

```sh
npm run redirects            # Netlify or Cloudflare Pages "_redirects"
npm run redirects -- apache  # .htaccess
npm run redirects -- nginx
```

| Old URL | New URL |
| --- | --- |
| /getting-started/ | /enquire/ |
| /referral/ | /contact/#referral |
| /why-choose-us/ | /about/ |
| /gallery/ | /about/ |
| /blog/ | /services/ |
| /category/uncategorized/, /category/health/ | /services/ |
| /home-nursing-service-brisbane-compassionate-and-professional-care-at-home/ | /services/nursing-care-services-brisbane/ |
| /how-to-choose-the-best-ndis-service-provider-in-redland-bay/ | /services/ndis-service-provider-redland-bay/ |
| /navigating-disability-home-care-services-in-brisbane-a-comprehensive-guide/ | /services/home-care-for-disabled-adults-brisbane/ |
| /the-ultimate-guide-to-accessible-travel-with-disability-in-brisbane/ | /services/disability-travel-support-services-brisbane/ |
| /ndis-service-provider-brisbane-west-compassionate-support-for-independent-living/ | /services/ndis-service-provider-brisbane-west/ |
| /ndis-service-provider-in-brisbane-east-beinghumancare/ | /services/ndis-service-provider-redland-bay/ |
| /best-ndis-service-provider-brisbane-west/ | /services/ndis-service-provider-brisbane-west/ |

If the domain changes from beinghumancare.com.au to a new one, also redirect every old page to the same path on the new domain.

---

## Where things live

```
src/config/site.ts        Business details, placeholders and switches
src/data/services.ts      All 15 service pages (text, FAQs, funding)
src/data/locations.ts     The 4 location pages
src/data/reviews.ts       The two real reviews, word for word
src/data/stories.ts       Client stories (empty until real ones are added)
src/data/redirects.json   Old URL to new URL list
src/pages/                One file per page
src/components/           Header, footer, forms, tabs, cookie banner and so on
src/styles/global.css     Design tokens and shared styles
scripts/                  Logo builder, copy checker, accessibility tests, redirects
public/brand/             Logo files
```

### Adding a story

1. Add it to `src/data/stories.ts`, following the commented example (situation, what we did, what changed, quote). Only use real stories, shared with written permission.
2. Set `SHOW_STORIES = true` in `src/config/site.ts`. Stories then appears in the main menu and the sitemap, and the story pages are built.

### How the forms work

- Every form posts to Web3Forms. After a successful send, Web3Forms takes the person to `/thank-you/`.
- A hidden `botcheck` honeypot field catches spam bots.
- With JavaScript on, errors show beside each field in plain words, and focus moves to an error summary at the top. With JavaScript off, the browser's built-in checks run and the form still sends.
- Without JavaScript, the enquiry tabs and the Contact page toggle show every section stacked, and the DVA file number field is always shown with a "Only needed if the funding type is DVA" hint.
