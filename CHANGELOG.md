# Changelog

This file documents Kudicall waitlist website changes so future chats can quickly recover project context.

## 2026-08-18

### Frontend Optimization & Performance
- Removed render-blocking `@import` font-face directives from `assets/css/main.css`.
- Added Google Fonts (Nunito, Pacifico, and Manrope) as parallel-loading `<link rel="stylesheet">` elements in `nuxt.config.ts` to improve page load speed.
- Preloaded optimized local hero desktop image `/images/hero-desktop.webp` instead of Firebase Storage image to reduce LCP resource load delay.
- Removed preconnect resource hint for `firebasestorage.googleapis.com` in `nuxt.config.ts` as Firebase asset dependencies were removed.

### SVG & Icon Optimization
- Replaced font-based icons (Material Design Icons & Font Awesome) with inline SVG elements to reduce bundle size and layout shifts across:
  - `WaitlistModal.vue` and `Header.vue` (navigation drawer close buttons).
  - `Header.vue` (navigation toggle menu button).
  - `Contact.vue` (email, phone, and address cards).
  - `FAQ.vue` (expansion panel action toggle icons).
  - `Footer.vue` (social media icons for Instagram, Twitter, and Facebook).
  - `pages/privacy.vue`, `pages/security.vue`, and `pages/terms.vue` (back button icons).
- Optimized Vuetify plugin (`plugins/vuetify.ts`) to defer loading of heavy Material Design Icons and Font Awesome icon stylesheets, only importing them client-side for admin pages (paths starting with `/admin`).

### Accessibility (A11y) Improvements
- Added descriptive `alt` tags to multiple `<v-img>` elements in `AboutUs.vue`, `Contact.vue`, `FAQ.vue`, `Features.vue`, `Hero.vue`, and `Testimonials.vue`.
- Added `aria-label` tags to icon-only buttons (`WaitlistModal.vue` close, `Header.vue` menu toggle, `Footer.vue` social links, and navigation close drawer) for screen reader support.

### Asset Localisation
- Replaced third-party Firebase Storage image dependencies with optimized local WebP assets under `public/images/`:
  - Hero desktop (`hero-desktop.webp`) and mobile (`hero-mobile.webp`) images.
  - Background pattern (`bg-pattern.webp`).
  - Footer background (`footer-bg.webp`).

### Dependency & Build Enhancements
- Added `sharp` as a devDependency in `package.json` for local WebP image optimization.
- Added a build-time Vite plugin patch (`vuetify-vimg-patch`) in `nuxt.config.ts` targeting Vuetify's `VImg.mjs` component to safety check `img` in `pollForSize(img)` and prevent runtime undefined errors.

## 2026-08-13

### Image Performance (Lighthouse Optimization)
- Removed `eager` from all below-the-fold `<v-img>` components across `Features.vue`, `AboutUs.vue`, and `Testimonials.vue`. Vuetify now lazy-loads these via its built-in `IntersectionObserver`.
- Added colored `#placeholder` slots to the 5 phone mockup images in `Features.vue` so section backgrounds remain solid while images load.
- Kept `eager` only on above-the-fold images in `Hero.vue` (the LCP elements).
- Added `fetchpriority="high"` to both desktop and mobile hero images in `Hero.vue` — Lighthouse flagged this as missing on the LCP element.
- Added `loading="lazy"` to testimonial avatar `<img>` tags in `Testimonials.vue`.
- Added `<link rel="preconnect">` hints in `nuxt.config.ts` for `firebasestorage.googleapis.com`, `fonts.googleapis.com`, and `fonts.gstatic.com` (Lighthouse flagged these as saving ~490–510ms each).
- Added `<link rel="preload">` for the desktop hero image in `nuxt.config.ts` to directly reduce the 4.2s Resource Load Delay flagged by Lighthouse.
- Added `lang="en"` to the `<html>` element via `nuxt.config.ts` `htmlAttrs` to fix the Accessibility issue flagged by Lighthouse (score impact: Accessibility 82 → 100).
- Confirmed `display=swap` is already set on Google Fonts `@import` URLs in `main.css`.

### Legal Pages
- Created three new Nuxt pages with dummy content: `pages/terms.vue` (Terms of Use), `pages/privacy.vue` (Privacy Policy), and `pages/security.vue` (Security).
- Each page uses the site's dark theme (`#0c0d0d` background), a sticky topbar with logo and back-to-home link, and organized content sections.
- Fixed `Footer.vue` links — replaced broken `<p :href="...">` elements (which don't navigate) with proper `<NuxtLink :to="...">` components pointing to `/terms`, `/privacy`, and `/security`.
- Added `.footer-link` CSS class with hover underline and opacity transition for better UX.

## 2026-08-05


- Updated `WaitlistModal.vue` input fields to use the Nunito font (weight 500, size 16) and applied rounded styling to fix the one-sided border radius issue.
- Removed the functional HTML slider dots from `Features.vue` to avoid duplication with the dots already present in the static product card images.

## 2026-06-30
- Added a new read-only endpoint `GET /api/waitlist` to retrieve all stored waitlist entries sorted by the newest first.
- Enhanced `waitlistService.js` and `waitlistController.js` with database queries and development logging for this new route.

## 2026-06-29

- Integrated real MySQL database using `mysql2/promise` in the Express backend.
- Created `server/.env` to store database connection details securely.
- Configured `server/src/database/connection.js` to automatically create the `waitlists` table upon backend startup.
- Updated `server/src/services/waitlistService.js` to execute actual SQL queries (checking for unique emails and inserting new entries).
- Updated `server/src/controllers/waitlistController.js` to properly return HTTP status `409 Conflict` when an email already exists.
- Refined the frontend `waitlistService.js` and `WaitlistModal.vue` to extract and display specific error messages returned by the backend database layer.

## 2026-06-27

- Replaced the mocked frontend waitlist service with a real HTTP `fetch` request connecting to the new Express backend.
- Configured environment variables (`.env.development`) to manage the API URL dynamically.
- Added comprehensive logging to both the frontend service and the backend controller/service for development transparency.
- Updated the Express health check route to return `{"status":"OK"}`.
- Refined the frontend error messaging when the backend is unavailable.
- Improved `WaitlistModal.vue` by adding Business Type dropdown and enhanced validation (name, email format, required fields).
- Added loading states, success/error feedback, and trust-building messages to `WaitlistModal.vue`.
- Created frontend `waitlistService.js` to manage mock API submissions.
- Scaffolded Express backend in `/server` directory with MVC architecture (routes, controllers, services, database setup).
- Created mock API endpoints (`/api/health`, `/api/waitlist`) using `express-validator`.

## 2026-06-26

- Fixed the close icon in `WaitlistModal.vue` to properly render the "x" icon using `mdi mdi-close`.
- Integrated `WaitlistModal.vue` into `components/Hero.vue` so its "Join Waitlist" button also opens the modal.
- Created a new `WaitlistModal.vue` reusable component with Name and Email validation.
- Integrated `WaitlistModal.vue` into `components/Header.vue` and connected it to the "Join Waitlist" button.
## 2026-06-24

- Improved the Direct Calls product-card slider in `components/Features.vue`.
- Added a CSS-backed card shell behind the transparent product-card images so the card no longer appears to float over the white feature background.
- Corrected the card shell to use a horizontal side-by-side blur split and a tighter Figma-like card aspect ratio instead of a vertical dark panel.
- Adjusted mobile slider width and positioning so the product card has more room and the buttons/text do not feel squeezed.

## 2026-06-22

- Converted the Direct Calls product-card overlay from one static `v-img` into a 3-image Vue slider in `components/Features.vue`.
- Added automatic slide rotation every 3 seconds.
- Added clickable dot indicators for manually selecting product-card slides.
- Added cleanup for the slider interval with `beforeUnmount`.
