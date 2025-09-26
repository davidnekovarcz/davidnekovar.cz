# Production Readiness Checklist — DavidNekovar.cz

This document collects gaps and action items to move the CV website from MVP to production quality. It’s split into: content, UX, print/PDF, SEO/analytics, performance, accessibility, QA, and deployment.

## 1) Content & Links ✅ COMPLETED
- Buttons: wire all CTAs to real actions ✅
  - Header: Contact (mailto), CV (print to PDF) ✅
  - Hero: Get in Touch (mailto), Download CV (print) ✅
  - Contact: Email, Phone already link; verify tel/mailto open correctly on mobile ✅
- Social links: verify targets and add ✅
- Project links: add UTM params ✅
  - Smarlify: https://smarlify.co/?utm_source=website&utm_medium=external&utm_campaign=dave ✅
  - Improvee: https://app.improvee.io/onboarding?utm_source=website&utm_medium=external&utm_campaign=dave ✅
  - Koinly: keep affiliate plus utm ✅
  - Designeo, DreamArts, Lovable: all have UTM params ✅
- Skills: optionally add small tech logos (Rails, Vue, React, TS, Tailwind, Postgres, Docker)
- Contact block for print: keep concise single-line variants

## 1.1) Enhanced CTAs & Business Features
- **Download CV Button**: Auto-generate PDF with print styles
  - Implement proper print CSS for single-page CV layout
  - Add "Download CV" button with automatic PDF generation
  - Ensure professional formatting and proper margins
- **"Hire Me" Button**: Advanced business integration
  - Create popup/modal with service offerings and pricing
  - Calendar integration (Calendly/Google Calendar) for consultation booking
  - Auto-invoice generation system for proposals and contracts
  - Project scope questionnaire and automated quote generation
  - Payment integration for deposits and milestone payments

## 2) UX polish
- Smooth-scroll offset: account for fixed header height
- Reduce on-page animations on low-power devices or 
- Add active-state highlighting in nav when a section is in view
- Replace placeholder stats with dynamic/real values or remove

## 3) Print / PDF (goal: 1 A4 page)
Current: 18 A4 pages due to full-website layout being printed. Strategy: provide a condensed print view.

- Introduce a dedicated print layout (single-page CV):
  - Hide: header, footer, hero backgrounds/gradients, floating shapes, animations
  - Collapse spacing: reduce paddings/margins ()
  - Typography: smaller sizes (body 9–10pt; h1 16–18pt; h2 12–14pt)
  - Columns: 2-column layout for skills/languages to save vertical space (CSS  or grid)
  - Experience: compress to role, company, period, 1–2 bullets; drop paragraphs
  - Skills: chip list only; remove progress bars for print
  - Languages/values/hobbies: one-line comma-separated items
  - Projects: show only domain + tagline, or remove entirely for print
  - Links: show URLs as footnotes or remove 
  - Remove all background colors/gradients and drop shadows
- Add a  wrapper with the condensed CV and keep  for app UI
- Provide a "Download 1‑page PDF" button that toggles print-only view before calling 
- Page settings:
  - 
  - Avoid page breaks inside experience items ()

## 4) SEO & Analytics ✅ COMPLETED
- Add canonical + OpenGraph/Twitter tags ✅ DONE
- Verify image asset hosted ✅ DONE (og-image.jpg)
- Add structured data (JSON-LD Person + WebSite) ✅ DONE
- Add meaningful meta descriptions ✅ DONE
- Install analytics (Umami + GA4) with anonymized IP ✅ DONE

## 5) Performance
- Preload fonts; self-host if possible to avoid FOUT
- Compress hero imagery; consider AVIF/WebP
- Use  and  for external origins
- Tree-shake lucide icons: import only used icons

## 6) Accessibility
- Color contrast audit (text over images/gradients)
- Keyboard navigation and focus outlines for buttons/links
- Add s to social icons; meaningful alt text if images added
- Respect 

## 7) QA checklist
- Cross-browser: Chrome, Safari, Firefox, iOS Safari, Android Chrome
- Mobile breakpoints: 320, 375, 414, 768, 1024, 1280+
- Validate all links and anchor scroll targets
- Print to PDF on macOS and Windows; ensure 1 A4 page and crisp typography

## 8) Deployment & Ops
- Heroku runtime: node buildpack on heroku-24 (done)
- Healthcheck route; basic 200 response for root (done via Express static)
- Error page for 404
- Basic monitoring/alerts (Upptime, Heroku metrics)

---

# Action Plan (prioritized)

1. **Enhanced Business Features**
   - Download CV Button: Auto-generate PDF with print styles
   - "Hire Me" Button: Popup with calendar integration and auto-invoice generation
   - Service offerings modal with pricing and project scope questionnaire

2. Print‑only 1‑page layout
   - Add  container with condensed CV content
   - Tighten spacing + type scale for print
   - Hide full site in print
   - Button: "Download 1‑page PDF" → toggles  + 

3. Link hygiene
   - Add UTMs to Smarlify / Improvee / Koinly
   - Ensure all CTAs are wired (mailto/tel/scroll/print)

4. Visual polish
   - Optional tech logos row (monochrome SVGs) in skills header
   - Reduce animation intensity + add reduced-motion support

5. SEO & Meta
   - Add JSON‑LD Person schema (name, sameAs, jobTitle, url)
   - Confirm OG image (1200×630) hosted and referenced

6. Perf & A11y
   - Tree-shake icons, preload fonts, AVIF/WebP for images
   - Keyboard focus styles; aria labels for icon-only buttons

7. QA & Deploy
   - Multi-device manual QA including print to 1 A4
   - Tag release; deploy; set up uptime monitoring

---

# Notes for UTM parameters
- 
- 
- 

Example:
- Smarlify: https://www.smarlify.co/?utm_source=website&utm_medium=external&utm_campaign=dave
- Improvee: https://app.improvee.io/onboarding?utm_source=website&utm_medium=external&utm_campaign=dave
- Koinly: https://koinly.io/?via=B2E92FE3

