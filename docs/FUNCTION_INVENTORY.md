# GAS Function Inventory

Source: `code.gs.txt` (2,837 lines, 228,525 bytes).

Total declarations: **216**. Duplicate declarations are retained below because the source contains later compatibility/override implementations.

1. `getSpreadsheet_()` — line 120
2. `setRuntimeConfig(spreadsheetId, rootFolderId)` — line 129
3. `setupDatabase()` — line 137
4. `ensureHeaders_(sheet, headers)` — line 153
5. `styleSheet_(sheet, headers)` — line 165
6. `seedInitialData()` — line 177
7. `defaultSettings_()` — line 209
8. `seedRegistrationTypes_(cid)` — line 237
9. `seedOrganizationUnits_(cid)` — line 250
10. `seedWorkCategories_(cid)` — line 256
11. `seedPresentationTypes_(cid)` — line 267
12. `seedReviewRounds_(cid)` — line 271
13. `seedScoringCriteria_(cid)` — line 274
14. `seedEmailTemplates_(cid)` — line 286
15. `setupDriveFolders()` — line 295
16. `runSafely_(name, fn)` — line 313
17. `now_()` — line 317
18. `clean_(v)` — line 318
19. `updateScoreSummaries_(cid)` — line 319
20. `migrateReadableWorksColumns()` — line 320
21. `upper_(v)` — line 358
22. `bool_(v)` — line 359
23. `num_(v, d)` — line 360
24. `jsonParse_(v, d)` — line 361
25. `safeJson_(v)` — line 362
26. `pad2_(n)` — line 363
27. `uuid_()` — line 364
28. `normalizeCid_(v)` — line 365
29. `normalizePhone_(v)` — line 366
30. `normalizeEmail_(v)` — line 367
31. `formatDateTime_(v)` — line 368
32. `normalizeConferenceDateTime_(value)` — line 374
33. `normalizeEventDate_(value)` — line 402
34. `normalizeEventDatesJson_(value)` — line 418
35. `withLock_(fn)` — line 429
36. `getSheet_(name)` — line 430
37. `headerMap_(name)` — line 431
38. `getRecords_(name)` — line 437
39. `clearRequestCache_()` — line 444
40. `findOne_(name, criteria)` — line 445
41. `findMany_(name, criteria)` — line 446
42. `appendRecord_(name, obj)` — line 447
43. `updateRecord_(name, rowNumber, patch)` — line 451
44. `applyPlainTextToRow_(sh, hm, row, obj)` — line 454
45. `nextId_(prefix)` — line 456
46. `upsertSetting_(conferenceId, key, value, type, group, th, en)` — line 469
47. `getSetting_(conferenceId, key, def)` — line 473
48. `settingsMap_(conferenceId)` — line 474
49. `invalidateCache_(conferenceId)` — line 475
50. `getAuthSecret_()` — line 476
51. `bytesHex_(bytes)` — line 478
52. `hashText_(text)` — line 479
53. `hashPassword_(password, salt)` — line 480
54. `createDefaultAdmin_()` — line 481
55. `canonicalRole_(role)` — line 486
56. `sessionCacheKey_(tokenHash)` — line 496
57. `cacheSessionContext_(tokenHash, ctx)` — line 497
58. `clearSessionCache_(tokenHash)` — line 500
59. `loginUser(username, password, conferenceId, clientInfo)` — line 501
60. `requireSession_(token, roles, conferenceId)` — line 517
61. `logoutUser(token)` — line 536
62. `changePassword(token, currentPassword, newPassword)` — line 537
63. `logAudit_(conferenceId, user, role, action, targetType, targetId, details)` — line 538
64. `logSystem_(name, e)` — line 540
65. `sendEmailLogged_(conferenceId, to, subject, html, relatedType, relatedId, user)` — line 541
66. `validateThaiCid_(cid)` — line 544
67. `splitName_(full)` — line 546
68. `fingerprint_(obj)` — line 547
69. `uploadBase64File_(file, folderName, prefix)` — line 548
70. `getPublicBootstrap(conferenceId)` — line 556
71. `serialize_(v)` — line 573
72. `normalizeImportHeader_(value)` — line 577
73. `buildImportRawRow_(headers, values)` — line 586
74. `importValue_(row, aliases)` — line 603
75. `isBlankImportRow_(values)` — line 627
76. `uniqueImportValues_(values)` — line 633
77. `isExternalParticipant_(participantText)` — line 643
78. `normalizeImportedName_(fullName, prefix)` — line 650
79. `uploadExcelForImport(token, conferenceId, file)` — line 659
80. `mapTuhGoogleFormRow_(row, conferenceId)` — line 838
81. `validateImportedRegistration_(mapped, conferenceId)` — line 954
82. `add(type, field, th, en, severity)` — line 957
83. `commitImportBatch(token, conferenceId, batchId)` — line 1058
84. `listImportBatches(token, conferenceId)` — line 1184
85. `repairImportedRegistrationNames(conferenceId, batchId)` — line 1207
86. `fillIfBlank(field, value)` — line 1249
87. `testTuhImportMappingV12()` — line 1301
88. `assertConferenceWindow_(conferenceId, openField, closeField, label)` — line 1360
89. `requireRegistrationAccess_(conferenceId, regId, emailOrPhone, editCode)` — line 1367
90. `submitRegistration(conferenceId, payload)` — line 1373
91. `validateNewRegistration_(m, cid, excludeRegId)` — line 1393
92. `duplicateWarnings_(m, cid, exclude)` — line 1394
93. `createRegistrationRecord_(m, userEmail, isImport, validationStatus)` — line 1395
94. `incrementTypeQuota_(cid, typeCode, delta)` — line 1402
95. `lookupRegistrationForEdit(conferenceId, regId, emailOrPhone, editCode)` — line 1403
96. `saveRegistrationEdit(conferenceId, regId, emailOrPhone, editCode, payload)` — line 1414
97. `getRegistrationStatus(conferenceId, regId, emailOrPhone)` — line 1429
98. `publicRegistration_(r)` — line 1430
99. `sendRegistrationEmail_(reg)` — line 1431
100. `uploadPaymentSlip(conferenceId, regId, emailOrPhone, file)` — line 1435
101. `adminListPayments(token, conferenceId, filters)` — line 1438
102. `adminVerifyPayment(token, conferenceId, paymentId, decision, note, receipt)` — line 1454
103. `requireWorkAccess_(conferenceId, regId, emailOrPhone)` — line 1477
104. `canSubmitWork_(reg)` — line 1481
105. `verifyWorkAccess(conferenceId, regId, emailOrPhone)` — line 1488
106. `submitWork(conferenceId, regId, emailOrPhone, payload, files)` — line 1489
107. `saveWorkFile_(cid, workId, regId, category, file, folder)` — line 1508
108. `getAuthorPortal(conferenceId, regId, emailOrPhone)` — line 1509
109. `replaceWorkFile(conferenceId, regId, emailOrPhone, workId, category, file)` — line 1510
110. `adminAddReviewer(token, conferenceId, payload)` — line 1514
111. `sendReviewerCredentials_(cid, email, password, reviewerId)` — line 1521
112. `adminListReviewers(token, conferenceId)` — line 1522
113. `adminAssignReviewers(token, conferenceId, workId, reviewRoundId, reviewerIds)` — line 1523
114. `sendReviewAssignmentEmail_(cid, w, rev, assignmentId)` — line 1526
115. `reviewerBootstrap(token, conferenceId)` — line 1527
116. `reviewerGetAssignment(token, conferenceId, assignmentId)` — line 1528
117. `reviewerSaveReview(token, conferenceId, assignmentId, payload, submit)` — line 1529
118. `ensureMealEntitlements_(conferenceId, regId)` — line 1530
119. `signMealToken_(cid, regId, date, meal)` — line 1559
120. `parseMealToken_(token)` — line 1560
121. `getMealPass(conferenceId, regId, emailOrPhone)` — line 1561
122. `scanMealToken(token, scannerToken, conferenceId, scannerPoint, eventDate, mealCode)` — line 1570
123. `adminBootstrap(token, conferenceId)` — line 1585
124. `adminDashboard(token, conferenceId, force)` — line 1587
125. `adminListRegistrations(token, conferenceId, filters)` — line 1588
126. `adminGetRegistrationSignSheet(token, conferenceId, filters)` — line 1589
127. `adminUpdateRegistrationStatus(token, conferenceId, regId, status, note)` — line 1606
128. `adminListWorks(token, conferenceId, filters)` — line 1622
129. `adminScreenWork(token, conferenceId, workId, decision, note, deadline)` — line 1623
130. `getAdminSettings(token, conferenceId)` — line 1624
131. `saveAdminSettings(token, conferenceId, payload)` — line 1630
132. `applyTuhDateLogoSettingsV13()` — line 1651
133. `adminSaveRegistrationType(token, conferenceId, p)` — line 1668
134. `adminSaveReviewRound(token, conferenceId, p)` — line 1669
135. `adminSaveScoringCriterion(token, conferenceId, p)` — line 1670
136. `adminGetReviewConfig(token, conferenceId)` — line 1671
137. `adminImportIssues(token, conferenceId, batchId)` — line 1672
138. `getOrganizationUnits(conferenceId, participantGroup)` — line 1673
139. `createFoodStaff(token, conferenceId, payload)` — line 1674
140. `getScannerBootstrap(token, conferenceId)` — line 1675
141. `participantQrUrl(conferenceId, regId, emailOrPhone)` — line 1678
142. `htmlEscape_(v)` — line 1681
143. `uniqueCleanList_(arr)` — line 1682
144. `normalizeOptionJson_(value)` — line 1683
145. `optionListFromSetting_(conferenceId, key, fallback)` — line 1689
146. `getRegistrationOptionMap_(conferenceId)` — line 1694
147. `registrationTypeMap_(conferenceId)` — line 1707
148. `mealPassEligibility_(registration, type)` — line 1708
149. `signMealPassToken_(cid, regId)` — line 1717
150. `parseMealPassToken_(token)` — line 1721
151. `parseAnyMealToken_(token)` — line 1727
152. `mealPassEmailLogs_(conferenceId, regId)` — line 1731
153. `mealPassDispatchInfo_(conferenceId, regId)` — line 1732
154. `buildMealPassEmailHtml_(conferenceId, r, type, passToken)` — line 1737
155. `formatThaiDateServer_(value)` — line 1750
156. `sendMealPassEmail_(conferenceId, regId, user, reason)` — line 1755
157. `emailMyMealPass(conferenceId, regId, emailOrPhone)` — line 1777
158. `maybeAutoIssueMealPass_(conferenceId, regId, trigger)` — line 1785
159. `sendRegistrationStatusEmail_(conferenceId, r, status, note, user)` — line 1794
160. `adminGetRegistration(token, conferenceId, regId)` — line 1801
161. `adminSaveRegistration(token, conferenceId, regId, payload)` — line 1802
162. `adminListMealPasses(token, conferenceId, filters)` — line 1817
163. `adminPreviewMealPass(token, conferenceId, regId)` — line 1830
164. `adminSendMealPasses(token, conferenceId, regIds)` — line 1831
165. `adminGetUserScanHistory(token, conferenceId, regId)` — line 1834
166. `upgradeTuhAdminMealOptionsV17()` — line 1858
167. `upgradeTuhLoginPrintWorkV19()` — line 1861
168. `normalizePublicWebAppUrl_(value)` — line 1880
169. `getCanonicalWebAppUrl_()` — line 1890
170. `setPublicWebAppUrl(url)` — line 1898
171. `buildWebAppRouteUrl_(page, conferenceId, baseUrl, extra)` — line 1906
172. `getExternalAccessLinks(conferenceId)` — line 1918
173. `testExternalBrowserAccessV21()` — line 1925
174. `upgradeTuhExternalBrowserAccessV21(publicExecUrl)` — line 1931
175. `include(filename)` — line 1939
176. `doGet(e)` — line 1941
177. `ensureSheetColumns_(sheetName, columns)` — line 1963
178. `scannerDateKey_(value)` — line 1975
179. `scannerServiceDefinitions_(conferenceId)` — line 1981
180. `scannerServiceDef_(conferenceId, serviceCode)` — line 1993
181. `scannerResolveRegId_(identifier, conferenceId)` — line 1998
182. `scannerSelectedDay_(conferenceId, registration, eventDate)` — line 2014
183. `scannerRegistrationType_(conferenceId, registration)` — line 2019
184. `scannerPaymentOkay_(registration, type)` — line 2022
185. `scannerRegistrationApproved_(registration)` — line 2025
186. `scannerCheckInRecord_(conferenceId, regId, eventDate, sessionCode)` — line 2028
187. `scannerMealEntitlement_(conferenceId, regId, eventDate, mealCode)` — line 2034
188. `scannerInspectInternal_(ctx, conferenceId, identifier, eventDate, serviceCode)` — line 2039
189. `getEventScannerBootstrap(token, conferenceId)` — line 2076
190. `inspectEventScanner(token, conferenceId, identifier, eventDate, serviceCode)` — line 2082
191. `confirmEventScanner(token, conferenceId, identifier, eventDate, serviceCode, scannerPoint)` — line 2085
192. `getEventScannerRecent(token, conferenceId, eventDate, serviceCode, limit)` — line 2105
193. `upgradeTuhEventScannerV18()` — line 2119
194. `adminAssignReviewersBulk(token, conferenceId, workIds, roundId, reviewerIds)` — line 2127
195. `adminGetReviewer(token, conferenceId, reviewerId)` — line 2149
196. `adminUpdateReviewer(token, conferenceId, reviewerId, data)` — line 2157
197. `adminResendReviewerCreds(token, conferenceId, reviewerId)` — line 2167
198. `adminSendDirectEmail(token, conferenceId, to, subj, msg)` — line 2188
199. `adminListUsers(token, conferenceId)` — line 2195
200. `adminAddUser(token, conferenceId, email, role)` — line 2204
201. `adminUpdateUserStatus(token, conferenceId, userId, status)` — line 2218
202. `exportWorksToExcel(token, conferenceId)` — line 2226
203. `ensureRegFolder_(conferenceId, regId, subFolderType)` — line 2266
204. `adminSearchDriveFiles(token, conferenceId, query)` — line 2304
205. `adminUploadWorkFiles(token, conferenceId, workId, regId, payload)` — line 2335
206. `adminBootstrap(token, conferenceId)` — line 2389
207. `adminDashboard(token, conferenceId, forceRefresh, filters)` — line 2412
208. `adminListRegistrations(token, conferenceId, filters)` — line 2542
209. `adminUpdateRegistrationStatus(token, conferenceId, regId, newStatus, note)` — line 2566
210. `adminListWorks(token, conferenceId, filters)` — line 2600
211. `getAdminSettings(token, conferenceId)` — line 2680
212. `adminGetRegistrationSignSheet(token, conferenceId, options)` — line 2696
213. `adminGetWorkScoreSummary(token, conferenceId, workId)` — line 2741
214. `adminUpdateWorkStatus(token, conferenceId, workId, newStatus)` — line 2763
215. `requestPasswordReset(email, conferenceId)` — line 2773
216. `registerNewUser(payload, conferenceId)` — line 2791
