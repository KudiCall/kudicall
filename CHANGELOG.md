# Changelog

This file documents Kudicall waitlist website changes so future chats can quickly recover project context.

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
