# API Matrix

Generated from every literal `rpc("action", ...)` call in the five production HTML sources. All 55 unique actions exist in `code.gs.txt`.

| Frontend page | Action / GAS function | Call sites and arguments | Declared GAS parameters | Authentication / allowed roles | Endpoint | Writes | Idempotent |
|---|---|---|---|---|---|---|---|
| Admin | adminAddReviewer | L587: TOKEN,CID,x.value | token, conferenceId, payload | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminAddUser | L746: TOKEN,CID,x.value.email,x.value.role | token, conferenceId, email, role | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminAssignReviewersBulk | L381: TOKEN,CID, wid?[wid]:null, x.value.roundId, x.value.reviewerIds | token, conferenceId, workIds, roundId, reviewerIds | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminBootstrap | L262: TOKEN,CID | token, conferenceId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminDashboard | L271: TOKEN,CID,false,{type:filterType} | token, conferenceId, forceRefresh, filters | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminGetRegistration | L292: TOKEN,CID,id | token, conferenceId, regId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminGetRegistrationSignSheet | L301: TOKEN,CID,x.value | token, conferenceId, options | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminGetReviewConfig | L354: TOKEN,CID; L594: TOKEN,CID | token, conferenceId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminGetReviewer | L554: TOKEN,CID,id | token, conferenceId, reviewerId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminGetUserScanHistory | L773: TOKEN, CID, id | token, conferenceId, regId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminGetWorkScoreSummary | L359: TOKEN,CID,wid; L413: TOKEN, CID, wid | token, conferenceId, workId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminListMealPasses | L764: TOKEN,CID,foodFilters( | token, conferenceId, filters | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminListPayments | L310: TOKEN,CID,{q:$('#paySearch' | token, conferenceId, filters | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminListRegistrations | L290: TOKEN,CID,{q:$('#regSearch' | token, conferenceId, filters | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminListReviewers | L355: TOKEN,CID; L514: TOKEN,CID | token, conferenceId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminListUsers | L725: TOKEN,CID | token, conferenceId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminListWorks | L316: TOKEN,CID,{q:$('#workSearch' | token, conferenceId, filters | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminPreviewMealPass | L766: TOKEN,CID,id | token, conferenceId, regId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminResendReviewerCreds | L544: TOKEN,CID,id | token, conferenceId, reviewerId | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminSaveRegistration | L292: TOKEN,CID,id,x.value | token, conferenceId, regId, payload | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminSearchDriveFiles | L640: TOKEN, CID, q | token, conferenceId, query | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | adminSendDirectEmail | L404: TOKEN,CID,x.value.to,x.value.subj,x.value.msg | token, conferenceId, to, subj, msg | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminSendMealPasses | L767: TOKEN,CID,[id]; L768: TOKEN,CID,ids | token, conferenceId, regIds | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminUpdateRegistrationStatus | L291: TOKEN,CID,id,status,x.value\|\|'' | token, conferenceId, regId, newStatus, note | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminUpdateReviewer | L583: TOKEN,CID,id,x.value | token, conferenceId, reviewerId, data | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminUpdateUserStatus | L755: TOKEN,CID,uid,'ACTIVE'; L760: TOKEN,CID,uid,'REVOKED' | token, conferenceId, userId, status | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminUpdateWorkStatus | L504: TOKEN, CID, wid, x.value | token, conferenceId, workId, newStatus | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminUploadWorkFiles | L622: TOKEN, CID, wid, regId, { method: 'LOCAL', fileName: file.name, mimeType: file.type \|\| 'application/octet-stream', base64: b64, fileCategory: type }; L659: TOKEN, CID, wid, regId, { method: 'DRIVE', driveFileId: fileId, fileName: fileName, fileCategory: type } | token, conferenceId, workId, regId, payload | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | adminVerifyPayment | L311: TOKEN,CID,id,decision,x.value\|\|'',{} | token, conferenceId, paymentId, decision, note, receipt | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | commitImportBatch | L289: TOKEN,CID,id | token, conferenceId, batchId | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Scanner | confirmEventScanner | L213: TOKEN,CID,PENDING.RegID,PENDING.EventDate,PENDING.ServiceCode,$('#scannerPoint' | token, conferenceId, identifier, eventDate, serviceCode, scannerPoint | SUPERADMIN, CONFERENCE_ADMIN, REGISTRATION_STAFF, FOOD_STAFF | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | emailMyMealPass | L341: CID,$('#passRegId' | conferenceId, regId, emailOrPhone | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | exportWorksToExcel | L391: TOKEN, CID | token, conferenceId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Admin | getAdminSettings | L285: TOKEN,CID; L556: TOKEN,CID | token, conferenceId | Existing GAS role check + admin roles | `POST /api/gas` | No | Yes |
| Scanner | getEventScannerBootstrap | L123: TOKEN,CID | token, conferenceId | SUPERADMIN, CONFERENCE_ADMIN, REGISTRATION_STAFF, FOOD_STAFF | `POST /api/gas` | No | Yes |
| Scanner | getEventScannerRecent | L214: TOKEN,CID,$('#eventDate' | token, conferenceId, eventDate, serviceCode, limit | SUPERADMIN, CONFERENCE_ADMIN, REGISTRATION_STAFF, FOOD_STAFF | `POST /api/gas` | No | Yes |
| Public / Applicant | getMealPass | L342: CID,$('#passRegId' | conferenceId, regId, emailOrPhone | Public / applicant proof | `POST /api/gas` | No | Yes |
| Public / Applicant | getPublicBootstrap | L287: CID | conferenceId | Public / applicant proof | `POST /api/gas` | No | Yes |
| Scanner | inspectEventScanner | L210: TOKEN,CID,id,$('#eventDate' | token, conferenceId, identifier, eventDate, serviceCode | SUPERADMIN, CONFERENCE_ADMIN, REGISTRATION_STAFF, FOOD_STAFF | `POST /api/gas` | No | Yes |
| Admin, Reviewer, Scanner | loginUser | L260: $('#loginUser'; L178: $('#loginUser'; L120: $('#loginUser' | username, password, conferenceId, clientInfo | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Admin, Reviewer, Scanner | logoutUser | L267: TOKEN; L197: TOKEN; L143: TOKEN | token | Any authenticated role | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | lookupRegistrationForEdit | L305: CID,$('#statusRegId' | conferenceId, regId, emailOrPhone, editCode | Public / applicant proof | `POST /api/gas` | No | Yes |
| Admin, Reviewer, Scanner | registerNewUser | L266: data,CID; L196: data,CID; L142: data,CID | payload, conferenceId | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | replaceWorkFile | L338: CID,$('#authorWorkRegId' | conferenceId, regId, emailOrPhone, workId, category, file | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Admin, Reviewer, Scanner | requestPasswordReset | L265: e,CID; L195: e,CID; L141: e,CID | email, conferenceId | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Reviewer | reviewerBootstrap | L179: TOKEN,CID; L188: TOKEN,CID; L189: TOKEN, CID | token, conferenceId | REVIEWER | `POST /api/gas` | No | Yes |
| Reviewer | reviewerGetAssignment | L186: TOKEN,CID,id | token, conferenceId, assignmentId | REVIEWER | `POST /api/gas` | No | Yes |
| Reviewer | reviewerSaveReview | L188: TOKEN,CID,CURRENT.assignment.AssignmentID,payload,submit | token, conferenceId, assignmentId, payload, submit | REVIEWER | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | saveAdminSettings | L286: TOKEN,CID,{conference:conf,settings} | token, conferenceId, payload | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | saveRegistrationEdit | L324: CID,r.RegID,$('#statusKey' | conferenceId, regId, emailOrPhone, editCode, payload | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | submitRegistration | L304: CID,formObj(e.target | conferenceId, payload | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | submitWork | L334: CID,$('#workRegId' | conferenceId, regId, emailOrPhone, payload, files | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Admin | uploadExcelForImport | L288: TOKEN,CID,f | token, conferenceId, file | Existing GAS role check + admin roles | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | uploadPaymentSlip | L327: CID,$('#payRegId' | conferenceId, regId, emailOrPhone, file | Public / applicant proof | `POST /api/gas` | Yes | No (requestId protected) |
| Public / Applicant | verifyWorkAccess | L328: CID,$('#workRegId'; L336: CID,$('#authorWorkRegId' | conferenceId, regId, emailOrPhone | Public / applicant proof | `POST /api/gas` | No | Yes |

## Transport contract

```json
{"action":"getPublicBootstrap","args":["CONF-TUH-QF-2569"],"requestId":"UUID","timestamp":0}
```

Vercel adds `secret` server-side. GAS validates the secret, request age, allowlist, session and role. Responses are `{success,data,message,errorCode,requestId}`. Write actions claim `requestId` in `CacheService` to reject immediate duplicates.
