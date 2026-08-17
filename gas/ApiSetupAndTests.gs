function setupVercelIntegration(frontendUrl, apiSecret) {
  if (!/^https:\/\//i.test(String(frontendUrl || ''))) throw new Error('Frontend URL ต้องเป็น HTTPS');
  if (String(apiSecret || '').length < 32) throw new Error('API Secret ต้องยาวอย่างน้อย 32 ตัวอักษร');
  PropertiesService.getScriptProperties().setProperties({
    TUH_FRONTEND_URL: String(frontendUrl).replace(/\/+$/,''),
    TUH_API_SECRET: String(apiSecret)
  });
  return {success:true,frontendUrl:String(frontendUrl).replace(/\/+$/,'')};
}

function testApiConfiguration() {
  const p = PropertiesService.getScriptProperties();
  return {
    success: !!p.getProperty('TUH_API_SECRET') && !!p.getProperty('TUH_FRONTEND_URL'),
    frontendConfigured: !!p.getProperty('TUH_FRONTEND_URL'),
    secretConfigured: !!p.getProperty('TUH_API_SECRET')
  };
}

function testDatabaseConnection() {
  const ss = getSpreadsheet_();
  return {success:true,spreadsheetName:ss.getName(),sheetCount:ss.getSheets().length};
}

function testDriveConnection() {
  const folders = jsonParse_(getSetting_(APP.DEFAULT_CONFERENCE_ID,'DRIVE_FOLDERS_JSON','{}'),{});
  const checked = Object.keys(folders).map(function(name){
    const folder = DriveApp.getFolderById(folders[name]);
    return {name:name,id:folder.getId(),accessible:true};
  });
  return {success:true,folders:checked};
}

function validateDatabaseSchema() {
  const ss = getSpreadsheet_();
  const issues = [];
  Object.keys(DB_SCHEMA).forEach(function(name){
    const sheet = ss.getSheetByName(name);
    if (!sheet) { issues.push({sheet:name,error:'MISSING_SHEET'}); return; }
    const actual = sheet.getRange(1,1,1,Math.max(sheet.getLastColumn(),1)).getDisplayValues()[0];
    DB_SCHEMA[name].forEach(function(header,index){
      if (actual[index] !== header) issues.push({sheet:name,column:index+1,expected:header,actual:actual[index]||''});
    });
  });
  return {success:issues.length===0,issues:issues,sheetCount:Object.keys(DB_SCHEMA).length};
}

function testPublicApi() {
  return getPublicBootstrap(APP.DEFAULT_CONFERENCE_ID);
}

function testAuthenticatedApi(token) {
  const context = requireSession_(token, null, APP.DEFAULT_CONFERENCE_ID);
  return {success:true,data:{userId:context.user.UserID,role:context.role}};
}
