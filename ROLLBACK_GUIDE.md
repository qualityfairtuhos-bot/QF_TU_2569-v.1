# Rollback Guide

The migration is additive. The existing GAS HTML Service remains the rollback path.

## Trigger conditions

Rollback if registration writes fail, files land in the wrong folder, role checks expose unauthorized data, duplicate meal/attendance records occur, or any existing workflow cannot complete.

## Immediate rollback

1. Replace public/Admin/Reviewer/Scanner links with the previous GAS `/exec` links.
2. Leave the Vercel deployment available only to the migration team or remove its custom-domain routing.
3. Do not delete or rename Sheets, rows or Drive files.
4. Preserve Vercel and GAS request IDs, timestamps and sanitized logs for diagnosis.
5. Compare `AuditLogs`, `SystemLogs`, affected business tables and Drive folders from the start of the incident.

## Data handling

- Do not restore the whole workbook over production until duplicate/new records are reconciled.
- Use `requestId`, `RegID`, `PaymentID`, `WorkID`, `AssignmentID`, `ScanID` and timestamps to identify candidate duplicates.
- Move suspect Drive files to `99_Archive` only after confirming references; do not permanently delete them.

## Backend rollback

Because the API files are additive, the old `doGet` and HTML templates remain functional. If necessary, deploy the recorded prior Apps Script version as a new deployment and point old links to its `/exec` URL. Keep the new API files disabled only after Vercel traffic is stopped.

## Return to migration

Fix and retest against a copied spreadsheet or test conference, rerun the entire regression checklist, deploy a new immutable Vercel version, and repeat the parallel acceptance period.
