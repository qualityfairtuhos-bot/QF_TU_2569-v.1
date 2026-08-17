function doPost(e) {
  let body = null;
  let requestId = '';
  let claimKey = '';
  try {
    if (!e || !e.postData || !e.postData.contents) throw apiError_('INVALID_JSON','ไม่พบข้อมูลคำขอ');
    if (e.postData.contents.length > 28 * 1024 * 1024) throw apiError_('PAYLOAD_TOO_LARGE','ข้อมูลมีขนาดใหญ่เกินกำหนด');
    body = JSON.parse(e.postData.contents);
    requestId = String(body.requestId || '');
    apiValidateEnvelope_(body);
    apiValidateSecret_(body.secret);
    const action = String(body.action);
    const fn = API_ACTIONS[action];
    if (!fn) throw apiError_('ACTION_NOT_ALLOWED','ไม่อนุญาตให้เรียกคำสั่งนี้');
    apiAuthorize_(action, body.args);
    if (API_WRITE_ACTIONS[action]) claimKey = apiClaimRequest_(requestId);
    const legacyResult = fn.apply(null, body.args);
    if (!legacyResult || legacyResult.success !== true) {
      const message = legacyResult && legacyResult.message ? legacyResult.message : 'ไม่สามารถดำเนินการได้';
      throw apiError_(legacyResult && legacyResult.errorCode || 'ACTION_FAILED', message);
    }
    apiCompleteRequest_(claimKey);
    return apiJson_(apiSuccess_(legacyResult.data, requestId));
  } catch (error) {
    apiReleaseRequest_(claimKey);
    try { logSystem_('doPost:' + (body && body.action || 'unknown'), error); } catch (ignore) {}
    return apiJson_(apiFailure_(error, requestId));
  }
}
