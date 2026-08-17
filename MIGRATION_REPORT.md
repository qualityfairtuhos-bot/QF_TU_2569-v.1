# TUH Quality Fair Migration Report

## Phase 1 — System audit

The original application is a GAS HTML Service monolith: five HTML templates call 55 unique backend actions through a shared RPC wrapper; GAS contains 216 function declarations and directly reads/writes Google Sheets and Drive. The workbook contains 43 sheets. Detailed evidence is in `docs/FRONTEND_INVENTORY.md`, `docs/FUNCTION_INVENTORY.md`, `docs/DATABASE_INVENTORY.md` and `API_MATRIX.md`.

Drive folders from source configuration: 00_Assets, 01_Import_Temp, 02_Payment_Slips, 03_Receipts, 04_Work_Original, 05_Work_Blind, 06_Work_Ethics, 07_Work_Revisions, 08_Presenter_Bio, 09_Final_Presentation, 10_Reviewer_Annotated, 11_Certificates, 12_Reports, 99_Archive.

Material findings:

- Admin, Reviewer and Scanner stored plaintext passwords in localStorage.
- GAS HTML templates coupled routing and runtime variables to `doGet`.
- Uploads use Base64 and GAS `DriveApp`; configured maximum is 25 MB, but Vercel request limits may be lower.
- Several GAS functions are declared more than once; Apps Script uses the later declaration. The inventory retains all declarations.
- Role enforcement already exists in the backend and is now duplicated at the API gateway boundary.

## Phase 2 — API contract

Browser calls only `POST /api/gas`. The proxy validates action/args/body size, rate limits, injects the server-only secret and HttpOnly session token, applies a timeout, safely parses JSON and retries only allowlisted reads. GAS applies its own action allowlist, secret/timestamp/requestId validation, role/session validation and duplicate-write protection.

## Phase 3 — GAS backend upgrade

`gas/Code.gs` is an unchanged copy of the production source. Add the five `Api*.gs` files to the same Apps Script project. No sheet names, headers, existing functions, setupDatabase or Drive layout are removed.

## Phase 4 — Vercel frontend

Next.js App Router exposes `/`, `/admin`, `/reviewer`, `/scanner`, and `/launcher`. The production legacy pages preserve the current visual/behavioral implementation inside same-origin route shells. The transport was replaced mechanically with fetch to `/api/gas`; runtime template variables are URL/environment based.

Passwords are no longer persisted. The proxy stores the GAS token in a Secure, HttpOnly, SameSite=Lax cookie and returns only the placeholder `__COOKIE__` to browser code.

## Phase 5 — Testing

See `TEST_CHECKLIST.md`. Automated checks cover mapping, generated HTML bindings, security-sensitive storage strings, TypeScript and Next.js build. Live GAS/Sheets/Drive workflows require deployment credentials and are explicitly listed as operator acceptance tests.

## Phase 6 — Deployment and rollback

See `DEPLOYMENT_GUIDE.md` and `ROLLBACK_GUIDE.md`. Parallel migration keeps GAS HTML online until production acceptance passes.
