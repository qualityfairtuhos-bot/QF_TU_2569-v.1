# TUH Quality Fair Conference Management — Vercel Migration

Production-oriented frontend migration from Google Apps Script HTML Service to Next.js/Vercel. Google Apps Script, Google Sheets and Google Drive remain the backend and data stores.

## Routes

- `/` — Public / Applicant Portal
- `/admin` — Admin Portal
- `/reviewer` — Reviewer Portal
- `/scanner` — Check-in / Scanner
- `/launcher` — Route launcher

All routes accept `?conferenceId=...`; otherwise `NEXT_PUBLIC_DEFAULT_CONFERENCE_ID` is used.

## Local setup

1. Install Node.js 20.9 or newer.
2. Copy `.env.example` to `.env.local` and set the real GAS `/exec` URL and matching secret.
3. Run `npm install`.
4. Run `npm run prepare:legacy`.
5. Run `npm test`, `npm run typecheck`, and `npm run build`.
6. Run `npm run dev`.

Never commit `.env.local` or a real secret.

## Repository layout

- `app/` — Next.js routes and Vercel server API.
- `components/` and `lib/` — route shell, API client, auth/config/action policy.
- `public/legacy/` — mechanically migrated production portals with the original UI and workflows.
- `gas/Code.gs` — unchanged original backend.
- `gas/Api*.gs` — additive API gateway, allowlist, security, response and setup/test functions.
- `docs/` — full function, frontend and database inventories.
- `API_MATRIX.md` — frontend-to-backend mapping and permissions.
- `MIGRATION_REPORT.md` — Phase 1–6 report.
- `DEPLOYMENT_GUIDE.md`, `ROLLBACK_GUIDE.md`, `TEST_CHECKLIST.md` — operator runbooks.

## Important operational limit

The current browser pages preserve the original Base64 upload contract. GAS allows 25 MB, while Vercel request limits can be smaller. Verify every required file category with the real Vercel plan. For files above the platform limit, introduce a resumable/chunked Drive upload endpoint before enabling that size in production.
