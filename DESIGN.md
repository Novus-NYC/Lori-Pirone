---
version: alpha
name: "Lori Pirone: The Unfolding Wish"
description: "An accordion picture-book garden built around Lori’s authentic book and caterpillar artwork."
colors:
  primary: "#183c2b"
  background: "#fff8e9"
  sky: "#a9d8f1"
  sky-pale: "#e1f1f7"
  leaf: "#527a3a"
  ink: "#243127"
  muted: "#526451"
  action: "#bd452e"
  action-hover: "#9f3622"
  accent: "#f4b842"
  border: "#d7ddcb"
  white: "#fffdf6"
typography:
  display:
    fontFamily: "Chewy, sans-serif"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Chewy, sans-serif"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  DEFAULT: "8px"
spacing:
  content-max: "1240px"
  mobile-gutter: "24px"
components:
  button:
    backgroundColor: "{colors.action}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: "15px 26px"
  button-hover:
    backgroundColor: "{colors.action-hover}"
  nav-order:
    backgroundColor: "{colors.action}"
    textColor: "{colors.white}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 21px"
  text-link:
    textColor: "{colors.ink}"
    padding: "6px 0"
  text-link-hover:
    textColor: "{colors.leaf}"
  navigation:
    backgroundColor: "{colors.background}"
    padding: "15px clamp(24px, 5vw, 80px)"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
---

# Lori Pirone design system

## Overview

**Creative North Star: "The Unfolding Wish"**

An accordion picture book opens onto a garden, with a readable paper panel on the left and Lori’s real book and orange-and-teal caterpillar on the right. Parents and caregivers should understand the book and find the ordering action immediately. English brand/content site, with ages 3–7 drawn from the current website FAQ.

The user explicitly requested authentic characters. All character and cover images come directly from Lori’s existing website. The generated garden is scenery only, with no substitute characters, book, or baked-in interface text. Preserve original image proportions and do not recolor the characters. The small green butterfly image found on the original site is not used because its identity differs from the orange-and-teal cover character.

The garden fold is the homepage’s one large visual gesture. Interior pages retain the palette and lettering with quieter, distinct compositions. Avoid generic feature-card grids, fabricated social proof, decorative labels, and nursery styling.

Runtime CSS is canonical: `src/app/globals.css` → semantic custom properties → component classes. This file mirrors accepted values. `next/font/local` supplies font variables; Tailwind adapters reference CSS variables rather than redefining them.

**Key Characteristics:**

- Original book characters
- Folded paper and garden scenery
- Readable parent-facing copy
- Clear ordering path

## Colors

Warm paper is the reading surface, forest is the anchor, sky is the story space, and leaf green marks supportive emphasis. Marigold is decorative, never small text. The dark coral action token supports readable white button text. Focus uses the same action color. Selection uses marigold with forest text. The site has one intentional light theme; forced colors preserves native affordances.

## Typography

Chewy provides the expressive storybook display voice. Nunito Sans provides readable prose and practical labels. Both are self-hosted with their licenses. Base display size is `clamp(58px, 6.2vw, 88px)` and section heading size is `clamp(36px, 4vw, 58px)`; the homepage hero uses its own display scale (`clamp(62px, 6vw, 86px)`). These fluid sizes remain in prose because the current DESIGN.md validator accepts only fixed dimensions in typography tokens. Body becomes 17px on phones, section headings become 39px, and paragraph measure is capped at 65ch. Essential copy is never placed in the artwork. Use warm, plain copy, the verified book title, and no em dashes.

## Layout

The content container uses the frontmatter content maximum, with fluid gutters (`clamp(24px, 5vw, 80px)`) and the fixed mobile gutter. Section spacing is `clamp(64px, 7.5vw, 112px)`. Main compositions use complementary two-column layouts. Breakpoints are 1100, 800, and 600px, with an additional 1600px wide-screen hero adjustment. On phones the hero becomes a short cream reading panel followed by the illustrated book stage. The mobile menu is a nonmodal disclosure, stays in natural keyboard order, closes on Escape, navigation, or return to desktop width, and returns focus to the trigger on Escape. Header minimum height is 90px on desktop, 80px at the menu breakpoint, and 76px on phones; the compact order button is hidden on phones. Every image reserves geometry.

## Elevation & Depth

Paper folds come from the scenic plate, not imitation SVG illustrations. The book has a restrained perspective and shadow; Lori’s portrait uses a physical photo print treatment. Other content stays flat. A quiet shadow appears under the sticky header after scrolling.

## Shapes

Buttons use 8px corners, with open text links as secondary actions. Organic edges belong to the illustrated scenery. Photo edges are simple; small facts use a soft paper strip. Avoid nested cards and indiscriminate pills.

Cloud dividers appear on both sides of the major colored sections, at the hero exit, and above the footer. Their desktop depth is roughly 82–96px, scaled to 48–56px on phones; the hero exit is shallower to preserve the book-facts strip. The shared `public/images/cloud-edge.svg` combines three broad contours with translucent overlaps. Their leading edges blend into the solid section color. Supporting browsers tie upper-cloud drift to section scroll progress; other edges use a 24-second alternating drift. Neither moves content or creates horizontal overflow. Reduced motion leaves the softened contours static. Quiet paper speckles extend across the body and colored reading surfaces.

## Components

`OrderButton`, `TextLink`, `BookFacts`, `ClosingInvitation`, `Navbar`, and `Footer` are shared across routes. Ordering always opens the verified Amazon destination in a new tab with a descriptive accessible name. Contact validates the fields and opens a prefilled email in the visitor’s email app, where the visitor must press Send. Never claim delivery or clear the message on handoff. Server-side email delivery requires a configured provider. Keep development and source-provenance notes out of visitor-facing copy. FAQs use native details/summary and keyboard behavior.

October 23 feedback refinement preserves the garden identity. The homepage header is transparent at the top and becomes opaque on scroll or menu opening. A paper-colored reading wash protects hero lettering from the scenery; the author byline is unboxed. Small paper speckles and cloud-shaped geometric section edges provide restrained texture. The footer repeats the original logo on a paper surface for contrast and adds an explicit ordering invitation. Source-provided milestones sit on a marigold strip; the five original reader quotes use staggered paper notes on pale sky, without star ratings or verified-purchase claims.

The opening page is labeled Overview. `OverviewLink` is shared by the logo and overview links: cross-route navigation returns to the hero anchor, and a repeated click from the same page explicitly scrolls to the top. Modified clicks retain native link behavior.

`InteractiveCaterpillar` preserves the original artwork and reserves the same image box for both poses. Hover plays one restrained 450ms wiggle; click, Enter, or Space briefly switches to another original smiling expression with a short text response, then restores the original after 1.8 seconds. Repeated clicks restart the reaction timer; reduced motion retains the visible expression change without wiggle.

`FlippableBook` keeps the existing hover tilt. Click, tap, Enter, or Space turns the book through 180 degrees over 700ms to reveal the supplied back-cover photograph. The control exposes its state with `aria-pressed` and a changing action label; the inactive face is hidden from assistive technology. Reduced motion swaps covers immediately.

Primary buttons have a 54px minimum height; the navigation version has a 46px minimum height. Hover darkens coral, lifts the button 2px, and adds a quiet shadow; active removes the lift and shadow. Text links retain an underline and shift their arrow 4px on hover. Focus uses a 3px action-color outline with a 5px offset.

Icons use small authored outline SVGs, 1.6–1.7px strokes. Native FAQ summaries change to leaf green on hover and rotate the plus 45 degrees when open. The book tilts slightly on hover over 600ms; the original caterpillar arrives once over 900ms. Scroll reveals use an 800ms fade and short lift, with alternating 14px lateral entry for interior content groups. Intersection Observer covers all main sections, including About prose and book FAQs; explicit targets remain authoritative. No persistent clip-path may cut off cloud edges. Content is visible by default; JavaScript marks only below-fold content as pending at 15% opacity, so unavailable JavaScript never hides copy. Reduced motion disables animations, transitions, and smooth scrolling.

## Do's and Don'ts

- Use the original orange-and-teal caterpillar assets, book cover, logo, and portrait.
- Preserve the real title, email, page count, language, audience, and author background.
- Keep the ordering path prominent on every page.
- Do not invent testimonials, awards, prices, publication dates, social accounts, or reader counts.
- Do not regenerate the book characters or crop their defining features away.
