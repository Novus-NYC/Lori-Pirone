# Lori Pirone

Initial website draft for Lori Pirone and _Cute Little Caterpillar_, built from the Novus/Volta starter for the October 24 assignment.

The approved direction, **The Unfolding Wish**, presents the book in an accordion picture-book garden. Parents and caregivers are the primary audience; ordering the book is the primary action. All caterpillar characters are Lori’s original orange-and-teal book artwork, sourced from her current site.

## Stack and local development

- Next.js 16.4.2, App Router
- React 19.2.4 and TypeScript
- Tailwind CSS 3 with shared CSS design tokens
- Locally hosted Chewy and Nunito Sans fonts
- No additional runtime dependencies, account services, or environment variables

With Node.js 20.9 or newer and npm installed:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. In this Codex workspace the draft runs at http://127.0.0.1:3000 using the bundled Node runtime, since Node/npm were not available on the shell’s default PATH.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

The starter did not include an ESLint configuration. `lint` runs TypeScript’s no-emit validation rather than the removed `next lint` command. `next build --webpack` was also checked as the production compiler.

## Pages

| Route      | Purpose                                                                        |
| ---------- | ------------------------------------------------------------------------------ |
| `/`        | Overview: fold-out book introduction, reading benefits, Lori preview, ordering |
| `/book`    | Synopsis, book facts, parent FAQs, ordering                                    |
| `/about`   | Lori’s background, children’s writing, poetry and oracle work                  |
| `/contact` | Direct email, book questions, bulk-order and event inquiries                   |

Legacy starter routes redirect to the corresponding new pages. Existing `/about-the-author` and `/about-the-book` URLs also redirect. Unknown pages receive a branded 404 with a path home.

## Verified content and assets

- Existing website: https://storybooklori.world/
- Order destination: https://a.co/d/eOhOdzI
- Contact: lori@storybooklori.world
- Book facts: 42 pages, English, ages 3–7 (existing site FAQ)
- Source brief: Google Drive, “Onboarding + First Assignment (Sujith)”

Original cover, orange-and-teal caterpillars, Lori portrait, logo, and favicon were sourced from the existing site. See `public/images/SOURCES.md`. The decorative garden background was generated from the approved concept and contains no substitute characters or UI text. Fonts include their licenses in `public/fonts`.

The October 23 feedback supplies the four homepage figures (25+ books, 4K readers, 12+ awards, 78+ library events) and requests reader reviews. The figures and five review texts also appear on the original website; they are source-provided claims, not independently audited totals or verified-purchase reviews. Confirm them with Lori before final publication. No guessed social accounts, prices, or publication dates are included. The original social anchors only point to platform homepages; searches did not establish an official profile. Blog content and additional book interiors were not supplied.

The contact form validates name, email, subject, and message, then opens a prefilled email addressed to Lori. The visitor must press Send in their email app. It does not claim delivery or clear the entered message. Direct server-side delivery still requires an email provider and credentials; no backend email service is configured. Development notes and original-site provenance are kept in repository documentation, not visitor-facing copy.

This checkout originated from `https://github.com/Volta-NYC/Lori-Pirone.git`, which GitHub now resolves to `Novus-NYC/Lori-Pirone`. Development is on `codex/unfolding-wish`, not a separate repository. No repository transfer or Novus hosting migration was performed by this work.

## Design and accessibility

`DESIGN.md` documents the approved world. `src/app/globals.css` owns runtime tokens; `tailwind.config.ts` references those variables. Business details and navigation live in `src/lib/site.ts`.

Shared primitives include ordering links, text links, book facts, closing invitation, sticky navigation, footer, and progressive scroll reveals. The mobile menu supports Escape and focus return. FAQs use native disclosures. Images reserve their layout space, meaningful images have alt text, controls have focus styles, and reduced motion disables animation and smooth scrolling.

Overview is available in desktop/mobile navigation and the footer, and the logo also returns to its opening hero. Caterpillars gently wiggle on hover and briefly change to another original illustrated expression on click. The hero book retains its hover tilt and flips on click/tap or keyboard activation to the supplied Amazon back-cover image. These interactions retain their state feedback with reduced motion enabled.

## Customization checklist

- [x] Replace Business Name in navbar and footer
- [x] Update metadata in `src/app/layout.tsx`
- [x] Replace homepage content
- [x] Update About and Contact pages
- [x] Replace favicon and assets
- [x] Add page-specific SEO titles, descriptions, canonicals, Open Graph, sitemap, and robots
- [x] Preserve the exact `Made by Novus` credit linked to https://novusnyc.org

## Delivery notes

The development branch is `codex/unfolding-wish`; `main` is unchanged. A separate temporary Vercel demonstration was created for sharing, with no changes to Lori’s existing website. Anonymous Vercel links expire unless claimed in a Vercel account. Production build and TypeScript validation pass. Local-only browser evidence covers all four routes at desktop and mobile widths, navigation, book/caterpillar interactions, contact email handoff, clouds, scroll reveals, and reduced motion. Design-board caches and browser captures are not part of the application source.

The draft was visually reviewed against the selected composition with the requested original artwork substitutions. A measured comp-spec/comp-diff comparison has not been completed, so exact pixel fidelity to the generated concept is not claimed. The existing design-workflow phase record remains pending for that comparison.

- [ ] Replace Business Name in navbar + footer
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Replace homepage content (`src/app/page.tsx`)
- [ ] Update About + Contact pages (`src/app/pages/*`)
- [ ] Replace favicon + assets in `public/`
- [ ] Update SEO metadata
- [ ] (Optional) Update Novus credit link text / URL in the footer
