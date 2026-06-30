# Changelog

This file documents Kudicall waitlist website changes so future chats can quickly recover project context.

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
