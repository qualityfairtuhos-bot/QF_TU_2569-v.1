function apiJson_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function apiSuccess_(data,requestId) {
  return {success:true,data:data,message:'',requestId:requestId};
}

function apiFailure_(error,requestId) {
  const known = error && error.apiCode;
  return {
    success:false,
    message: known ? error.message : 'ไม่สามารถดำเนินการได้ กรุณาติดต่อผู้ดูแลระบบ',
    errorCode: known || 'INTERNAL_ERROR',
    requestId:requestId || ''
  };
}
