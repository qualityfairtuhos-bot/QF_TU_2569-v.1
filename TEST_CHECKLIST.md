# Test Checklist

## Automated

- [ ] `npm test`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] Production HTML has zero `google.script.run`.
- [ ] Production HTML has zero `<? ... ?>` GAS templates.
- [ ] Every frontend action exists in both Vercel and GAS allowlists.
- [ ] No `.env.local` or real secret is tracked.
- [ ] No plaintext password is written to local/session storage.

## GAS configuration and schema

- [ ] `testApiConfiguration()` passes.
- [ ] `testDatabaseConnection()` passes.
- [ ] `validateDatabaseSchema()` reports zero issues.
- [ ] `testDriveConnection()` passes for all configured folders.
- [ ] `/exec` accepts Vercel secret and rejects wrong/missing secret.
- [ ] Stale timestamp, malformed request ID and non-allowlisted action are rejected.
- [ ] Duplicate write request ID is rejected.

## Public / Applicant

- [ ] Public bootstrap, announcements, deadlines and conference dates render.
- [ ] New registration accepts PDPA and writes the original Sheets.
- [ ] Valid/invalid CID and Passport paths behave as before.
- [ ] Duplicate CID and duplicate email warnings behave as before.
- [ ] Applicant lookup/edit requires the existing ownership proof/edit code.
- [ ] Payment slip uploads to the original folder and updates Payments.
- [ ] Work submission, authors and all original file categories persist.
- [ ] Replacement upload updates WorkFiles without duplicate active files.
- [ ] Status, workflow, downloads, QR/meal pass and email function.

## Admin and permissions

- [ ] Login succeeds and logout invalidates GAS session plus cookie.
- [ ] SUPERADMIN sees all allowed menus and actions.
- [ ] Each role sees only its existing menus and receives API denial outside its role.
- [ ] Dashboard, filters, charts and refresh function.
- [ ] Registration import/commit, incomplete records and edit/status flows function.
- [ ] Payment verify/return/reject and receipt flow function.
- [ ] Work screening/status, reviewers, assignment, rounds and scores function.
- [ ] User, settings, food, attendance, files, email, reports/export/print/audit function.
- [ ] Drive search/upload/replace uses the existing folders.

## Reviewer

- [ ] Login, forgot password and enabled signup function.
- [ ] Reviewer sees only assigned work.
- [ ] Download/open, criteria, weighted score, comments and recommendation function.
- [ ] Save draft, submit, lock, decline and round deadline rules function.
- [ ] Reviewer report and print function.

## Scanner

- [ ] Allowed staff roles can log in; disallowed roles cannot.
- [ ] Camera QR, hardware scanner and manual RegID entry function.
- [ ] Inspect then confirm remains a two-step flow.
- [ ] Morning/afternoon attendance and three meal services function.
- [ ] Duplicate attendance/meal redemption is rejected by GAS.
- [ ] Recent scan list and clear success/error feedback function.

## Cross-cutting

- [ ] Test Chrome/Safari on desktop, tablet and mobile.
- [ ] Test without a Google account logged in.
- [ ] Thai Buddhist Era dates are correct once (no double +543).
- [ ] Asia/Bangkok deadlines are enforced in UI and backend.
- [ ] XSS/HTML, formula injection, filename/path, MIME spoof and oversized upload cases are rejected or escaped.
- [ ] No CID/phone/email leaks into public dashboards or logs.
- [ ] Measure route load, API latency and large-table pagination with production-like data; record actual values.
- [ ] Verify the real Vercel plan's upload body limit for every required file category.
