# Deployment Guide

## A. Back up before migration

1. Make a timestamped copy of the production Google Sheet.
2. Export the current Apps Script project.
3. Record the current deployment ID and `/exec` URL.
4. Copy or inventory the root Drive folder and all 14 configured subfolders.
5. Record Script Properties securely; never paste them into GitHub.
6. Prefer a test conference or copied spreadsheet for the first end-to-end test.

## B. Upgrade Google Apps Script

1. Open the existing Apps Script project.
2. Keep all current files and HTML templates.
3. Add `ApiActions.gs`, `ApiSecurity.gs`, `ApiResponse.gs`, `ApiGateway.gs`, and `ApiSetupAndTests.gs` from `gas/`.
4. Do not add the repository copy of `gas/Code.gs` on top of the same existing functions; it is a full backup/reference copy.
5. In the editor, run:

   `setupVercelIntegration('https://YOUR-PROJECT.vercel.app', 'A_RANDOM_SECRET_AT_LEAST_32_CHARACTERS')`

6. The secret must exactly match Vercel `GAS_API_SECRET`. Do not save it in source code.
7. Run `testApiConfiguration()`, `testDatabaseConnection()`, `validateDatabaseSchema()`, and `testDriveConnection()`.
8. Select **Deploy → New deployment → Web app**.
9. Set **Execute as: Me** and **Who has access: Anyone**.
10. Deploy and copy the URL ending in `/exec` (never `/dev`).

“Anyone” only exposes the gateway endpoint; gateway requests still require the Vercel secret and protected actions additionally require a database-backed session/role.

## C. Put the source in GitHub

1. Create a private GitHub repository.
2. In this project folder run `git init`, `git add .`, and inspect `git status`.
3. Confirm `.env.local`, `.env`, secrets and personal exports are absent.
4. Commit and push to the repository.

## D. Deploy on Vercel

1. In Vercel choose **Add New → Project** and import the GitHub repository.
2. Framework preset should be Next.js.
3. Add these environment variables for Production and Preview as appropriate:

   - `GAS_WEB_APP_URL` — GAS URL ending `/exec`
   - `GAS_API_SECRET` — exact Script Property secret
   - `NEXT_PUBLIC_DEFAULT_CONFERENCE_ID`
   - `NEXT_PUBLIC_APP_NAME`
   - `NEXT_PUBLIC_APP_URL`
   - `GAS_REQUEST_TIMEOUT_MS=25000`
   - `GAS_MAX_REQUEST_BYTES=4000000`
   - `SESSION_COOKIE_NAME=tuh_session`

4. Deploy. If a custom domain is used, update `TUH_FRONTEND_URL` through `setupVercelIntegration`.
5. Never expose `GAS_API_SECRET` as a `NEXT_PUBLIC_*` variable.

## E. Acceptance test

1. Open all five Vercel routes with the production conference ID.
2. Complete the live checklist in `TEST_CHECKLIST.md`.
3. Confirm writes in the same existing sheets and uploads in the same existing Drive folders.
4. Check browser source/network: no GAS secret, Spreadsheet ID, Drive OAuth credential or raw session token.
5. Test a second browser with no Google login; public registration must work.
6. Keep the old GAS HTML URL active throughout the parallel run.

## F. Promote

Only after acceptance, change public links and Google Sites buttons to the Vercel routes. Do not delete the GAS HTML files or old deployment during the rollback window.
