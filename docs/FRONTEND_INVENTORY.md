# Frontend Inventory

## Public / Applicant — `index.html.txt`

- Size: 428,781 bytes; 354 lines.
- DOM IDs (65): `directAccessBar`, `directAccessNewTab`, `brandDate`, `nav`, `homeHero`, `heroCarousel`, `heroLeftLogo`, `confName`, `confDesc`, `confMeta`, `heroRightLogo`, `announceRegistrationClose`, `announcePaymentClose`, `announceFees`, `announceResultDate`, `page-home`, `page-register`, `regForm`, `participantType`, `prefixSelect`, `positionList`, `professionList`, `groupList`, `unitList`, `foodTypeSelect`, `attendanceDates`, `consentLabel`, `consentAccepted`, `consentHint`, `page-status`, `statusRegId`, `statusKey`, `statusCode`, `statusResult`, `page-payment`, `payRegId`, `payKey`, `paymentSlipPreview`, `payFile`, `page-work`, `workRegId`, `workKey`, `workFormHost`, `page-author-status`, `authorWorkRegId`, `authorWorkKey`, `authorWorkResult`, `page-pass`, `passRegId`, `passKey`, `passResult`, `pdpaNoticeTemplate`, `loading`, `loadingText`, `${id}`, `editForm`, `workForm`, `workCategory`, `ethicsRule`, `ethicsRequired`, `region4IntentBox`, `workOriginal`, `workEthics`, `ethicsFileHint`, `workBio`
- JavaScript functions (43): `installDirectAccessGuard`, `canonicalRoute`, `rpc`, `load`, `done`, `alertErr`, `go`, `formObj`, `fileObj`, `esc`, `setHeroSlide`, `nextHeroSlide`, `startHeroCarousel`, `showScheduleNotice`, `openPdpaNotice`, `resetConsentState`, `renderAnnouncement`, `dateObject`, `formatThaiDate`, `formatEnglishDate`, `getEventDates`, `renderCurrentDate`, `renderConferenceTitle`, `eventRangeHtml`, `renderAttendanceDates`, `settingOptions`, `optionTags`, `fillSelect`, `renderConfiguredRegistrationOptions`, `init`, `lookupStatus`, `renderStatus`, `renderPaymentSlip`, `sendPayment`, `verifyWork`, `renderWorkForm`, `lookupAuthorWorks`, `renderAuthorWorks`, `promptReplaceWorkFile`, `updateWorkRules`, `updateRegion4Intent`, `emailMyPass`, `loadPass`
- Storage keys: none
- Libraries: SweetAlert=true; Chart.js=false; QR scanner=false; Font Awesome=false; Google Fonts=true.
- RPC calls (11): `getPublicBootstrap` (L287), `submitRegistration` (L304), `lookupRegistrationForEdit` (L305), `saveRegistrationEdit` (L324), `uploadPaymentSlip` (L327), `verifyWorkAccess` (L328), `submitWork` (L334), `verifyWorkAccess` (L336), `replaceWorkFile` (L338), `emailMyMealPass` (L341), `getMealPass` (L342).

## Admin — `admin.html.txt`

- Size: 110,627 bytes; 808 lines.
- DOM IDs (123): `directAccessBar`, `directAccessNewTab`, `login`, `loginForm`, `loginUser`, `loginPassword`, `rememberLogin`, `app`, `sidebarOverlay`, `sidebar`, `userName`, `userRole`, `menu`, `topTitle`, `topSub`, `page-dashboard`, `dashFilterType`, `kpis`, `dashChartsContainer`, `chartRegByTypeCanvas`, `chartWorksIntentCanvas`, `chartWorksByCategoryCanvas`, `chartWorksByStatusCanvas`, `page-settings`, `settingsForm`, `page-import`, `importFile`, `importResult`, `page-registrations`, `regSearch`, `regStatus`, `regRows`, `page-payments`, `paySearch`, `payStatus`, `payRows`, `page-works`, `workSearch`, `workStatus`, `workRows`, `page-reviewers`, `revSearch`, `reviewerRows`, `reviewConfig`, `page-users`, `userRows`, `page-food`, `scannerLink`, `foodSearch`, `foodEligibility`, `foodPayment`, `foodSent`, `sendSelectedBtn`, `foodSelectedCount`, `foodAll`, `foodRows`, `loading`, `loadText`, `${id}`, `su_user`, `su_email`, `su_pass`, `su_prefix`, `su_fname`, `su_lname`, `su_phone`, `su_org`, `su_role`, `erType`, `erPrefix`, `erFirst`, `erLast`, `erCid`, `erPosition`, `erProfession`, `erGroup`, `erOrg`, `erLicense`, `erPhone`, `erEmail`, `erLine`, `erFood`, `erAllergy`, `erDay${i+1}`, `erWork`, `psType`, `psDay`, `psOrg`, `psIncomplete`, `assignRound`, `emTo`, `emSubj`, `emMsg`, `newWorkStatus`, `rvPrefix`, `rvFirst`, `rvLast`, `rvPos`, `rvInst`, `rvDept`, `rvProv`, `rvReg`, `rvEmail`, `rvPhone`, `rvExpCat`, `rvExpType`, `rvMax`, `rvNotif`, `rvLine`, `rvTel`, `rvPass`, `rvNote`, `tbLocal`, `tbDrive`, `tpLocal`, `localFile`, `localType`, `tpDrive`, `driveSearch`, `driveRes`, `driveType`, `nuEmail`, `nuRole`
- JavaScript functions (69): `installDirectAccessGuard`, `canonicalRoute`, `rpc`, `show`, `err`, `toast`, `fileObj`, `formObj`, `pad2`, `formatBeDateTime`, `validateRealDate`, `parseBeDateTime`, `parseBeEventDate`, `convertEventDatesJsonToCe`, `listTextToJson`, `optionHtml`, `dataList`, `statusBadge`, `togglePassword`, `loadRememberedLogin`, `saveRememberedLogin`, `currentAdminToken`, `storeAdminToken`, `menuForRole`, `boot`, `nav`, `toggleSidebar`, `forgotPassword`, `signUp`, `refreshPage`, `loadDashboard`, `loadSettings`, `previewImport`, `commitImport`, `loadRegistrations`, `setRegStatus`, `openRegistrationEdit`, `beDateOnly`, `openRegistrationSignSheet`, `renderSignSheetWindow`, `loadPayments`, `verifyPay`, `loadWorks`, `num`, `openAssignReviewerModal`, `exportWorks`, `openEmail`, `openScoreSummary`, `openUpdateWorkStatus`, `loadReviewers`, `resendReviewerCreds`, `openReviewerForm`, `loadReviewConfig`, `switchUploadTab`, `uploadLocalFile`, `searchDriveFiles`, `selectDriveFile`, `promptReplaceWorkFile`, `loadUsers`, `openUserForm`, `adminApproveUser`, `adminRevokeUser`, `foodFilters`, `loadFood`, `toggleAllFood`, `previewFood`, `sendFood`, `sendSelectedFood`, `viewUserScanHistory`
- Storage keys: `tuhAdminToken`
- Libraries: SweetAlert=true; Chart.js=true; QR scanner=false; Font Awesome=true; Google Fonts=true.
- RPC calls (45): `loginUser` (L260), `adminBootstrap` (L262), `requestPasswordReset` (L265), `registerNewUser` (L266), `logoutUser` (L267), `adminDashboard` (L271), `getAdminSettings` (L285), `saveAdminSettings` (L286), `uploadExcelForImport` (L288), `commitImportBatch` (L289), `adminListRegistrations` (L290), `adminUpdateRegistrationStatus` (L291), `adminGetRegistration` (L292), `adminSaveRegistration` (L292), `adminGetRegistrationSignSheet` (L301), `adminListPayments` (L310), `adminVerifyPayment` (L311), `adminListWorks` (L316), `adminGetReviewConfig` (L354), `adminListReviewers` (L355), `adminGetWorkScoreSummary` (L359), `adminAssignReviewersBulk` (L381), `exportWorksToExcel` (L391), `adminSendDirectEmail` (L404), `adminGetWorkScoreSummary` (L413), `adminUpdateWorkStatus` (L504), `adminListReviewers` (L514), `adminResendReviewerCreds` (L544), `adminGetReviewer` (L554), `getAdminSettings` (L556), `adminUpdateReviewer` (L583), `adminAddReviewer` (L587), `adminGetReviewConfig` (L594), `adminUploadWorkFiles` (L622), `adminSearchDriveFiles` (L640), `adminUploadWorkFiles` (L659), `adminListUsers` (L725), `adminAddUser` (L746), `adminUpdateUserStatus` (L755), `adminUpdateUserStatus` (L760), `adminListMealPasses` (L764), `adminPreviewMealPass` (L766), `adminSendMealPasses` (L767), `adminSendMealPasses` (L768), `adminGetUserScanHistory` (L773).

## Reviewer — `reviewer.html.txt`

- Size: 42,100 bytes; 208 lines.
- DOM IDs (44): `directAccessBar`, `directAccessNewTab`, `loginView`, `loginForm`, `loginUser`, `loginPassword`, `rememberLogin`, `appView`, `confName`, `nav-dashboard`, `nav-assignments`, `nav-report`, `pageTitle`, `reviewerName`, `page-dashboard`, `dashboard-kpis`, `page-assignments`, `assignments-kpis`, `filterTabs`, `count-all`, `count-pending`, `count-completed`, `searchAssignment`, `assignmentGrid`, `reviewHost`, `page-report`, `report-reviewer-name`, `rep-tot`, `rep-com`, `rep-pen`, `rep-prog`, `reportRows`, `loading`, `loadText`, `reviewForm`, `su_user`, `su_email`, `su_pass`, `su_prefix`, `su_fname`, `su_lname`, `su_phone`, `su_org`, `su_role`
- JavaScript functions (20): `installDirectAccessGuard`, `canonicalRoute`, `loadCreds`, `boot`, `renderAll`, `statusBadge`, `renderAssignments`, `renderAssignmentsGrid`, `openAssignment`, `renderReview`, `saveReview`, `refreshData`, `renderDashboard`, `renderReportPage`, `printMyReport`, `nav`, `refreshPage`, `forgotPassword`, `signUp`, `logout`
- Storage keys: `tuhReviewerToken`
- Libraries: SweetAlert=true; Chart.js=false; QR scanner=false; Font Awesome=false; Google Fonts=true.
- RPC calls (9): `loginUser` (L178), `reviewerBootstrap` (L179), `reviewerGetAssignment` (L186), `reviewerSaveReview` (L188), `reviewerBootstrap` (L188), `reviewerBootstrap` (L189), `requestPasswordReset` (L195), `registerNewUser` (L196), `logoutUser` (L197).

## Scanner — `scanner.html.txt`

- Size: 37,673 bytes; 221 lines.
- DOM IDs (39): `directAccessBar`, `directAccessNewTab`, `loginView`, `loginForm`, `loginUser`, `loginPass`, `rememberLogin`, `appView`, `userName`, `userRole`, `systemStatus`, `eventDate`, `scannerPoint`, `checkinButtons`, `mealButtons`, `consoleState`, `openCameraBtn`, `scanFileBtn`, `qrFileInput`, `closeCameraBtn`, `readerWrap`, `reader`, `identifier`, `inspectBtn`, `checkResult`, `recentCount`, `recentList`, `su_user`, `su_email`, `su_pass`, `su_prefix`, `su_fname`, `su_lname`, `su_phone`, `su_org`, `su_role`, `REG-2026-`, `loading`, `loadText`
- JavaScript functions (33): `installDirectAccessGuard`, `canonicalRoute`, `rpc`, `esc`, `parseDate`, `thDate`, `timeText`, `show`, `setBusy`, `togglePassword`, `loadRememberedLogin`, `saveRememberedLogin`, `scannerStoredToken`, `adminStoredToken`, `storeScannerToken`, `sessionError`, `bootScanner`, `selectService`, `autoBoot`, `forgotPassword`, `signUp`, `logoutScanner`, `handleFileScan`, `openCamera`, `closeCamera`, `onQrDecoded`, `clearScan`, `renderEmpty`, `checkBadge`, `inspectRegistration`, `renderInspection`, `confirmRecord`, `loadRecent`
- Storage keys: `tuhScannerToken`, `tuhAdminToken`
- Libraries: SweetAlert=true; Chart.js=false; QR scanner=true; Font Awesome=false; Google Fonts=true.
- RPC calls (8): `loginUser` (L120), `getEventScannerBootstrap` (L123), `requestPasswordReset` (L141), `registerNewUser` (L142), `logoutUser` (L143), `inspectEventScanner` (L210), `confirmEventScanner` (L213), `getEventScannerRecent` (L214).

## Launcher — `launcher.html.txt`

- Size: 2,779 bytes; 2 lines.
- DOM IDs (0): 
- JavaScript functions (0): 
- Storage keys: none
- Libraries: SweetAlert=false; Chart.js=false; QR scanner=false; Font Awesome=false; Google Fonts=true.
- RPC calls (0): none.


## GAS HTML bindings

- Each of the four operational portals used one generic `google.script.run` wrapper.
- Template variables found: `appName`, `conferenceId`, `appUrl`, `directUrl`; launcher also used `encodeURIComponent(conferenceId)`.
- `doGet` selected index/admin/reviewer/scanner/launcher and populated the template variables.
- Production output under `public/legacy` contains neither `google.script.run` nor `<? ... ?>`.
