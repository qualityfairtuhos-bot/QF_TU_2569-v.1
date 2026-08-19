import fs from "node:fs/promises";
import path from "node:path";

const root=process.cwd();
const portals=["index","admin","reviewer","scanner"];
const defaultCid=process.env.NEXT_PUBLIC_DEFAULT_CONFERENCE_ID||"CONF-TUH-QF-2569";
const appName=process.env.NEXT_PUBLIC_APP_NAME||"TUH Quality Fair Conference Management";
const remoteTuhLogo="https://img2.pic.in.th/logo-020c27d3e8c360c016.png";
const remoteHaccLogo="https://img1.pic.in.th/images/logo-04.png";
const localTuhLogo="/images/tuh-logo.png";
const localHaccLogo="/images/hacc-logo.png";
const rpcCode=`async function rpc(n,...a){const maxRetries=/^(get|lookup|inspect|adminList|adminGet|reviewerGet)/.test(n)?3:1;let lastErr=null;for(let attempt=0;attempt<maxRetries;attempt++){if(attempt>0){await new Promise(r=>setTimeout(r,attempt*700+Math.floor(Math.random()*200)))}try{const response=await fetch('/api/gas',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'include',body:JSON.stringify({action:n,args:a,requestId:crypto.randomUUID(),timestamp:Date.now()})});let result;try{result=await response.json()}catch(e){throw new Error('การตอบกลับจากระบบไม่ถูกต้อง')}if(!response.ok||!result.success){throw new Error(result.message||'เกิดข้อผิดพลาดในการเชื่อมต่อระบบ')}return result.data}catch(err){lastErr=err;if(attempt+1>=maxRetries)throw err}}throw lastErr||new Error('เกิดข้อผิดพลาดในการเชื่อมต่อระบบ')}`;
const canonicalCode=`function canonicalRoute(page){const routes={public:'/',admin:'/admin',reviewer:'/reviewer',scanner:'/scanner',launcher:'/launcher'};const target=routes[page||'public']||'/';return target+'?conferenceId='+encodeURIComponent(CID)}`;

function replaceFunction(text,name,code){
  const start=text.indexOf(`function ${name}(`);
  if(start<0)return text;
  let depth=0,quote="",escaped=false,opened=false;
  for(let i=start;i<text.length;i+=1){
    const c=text[i];
    if(quote){
      if(escaped)escaped=false;
      else if(c==="\\")escaped=true;
      else if(c===quote)quote="";
      continue;
    }
    if(c==="'"||c==='"'||c==="`"){quote=c;continue}
    if(c==="{"){depth+=1;opened=true}
    else if(c==="}"){depth-=1;if(opened&&depth===0)return text.slice(0,start)+code+text.slice(i+1)}
  }
  throw new Error(`Unclosed function ${name}`);
}

for(const portal of portals){
  let text=await fs.readFile(path.join(root,`${portal}.html.txt`),"utf8");
  const route=portal==="index"?"/":`/${portal}`;
  text=text
    .replaceAll("<?= appName ?>",appName)
    .replaceAll("<?= directUrl ?>",`${route}?conferenceId=${encodeURIComponent(defaultCid)}`)
    .replaceAll("<?= appUrl ?>","")
    .replaceAll("<?= conferenceId ?>",`'+(new URLSearchParams(location.search).get('conferenceId')||'${defaultCid}')+'`)
    .replaceAll(remoteTuhLogo,localTuhLogo)
    .replaceAll(remoteHaccLogo,localHaccLogo);
  text=replaceFunction(text,"rpc",rpcCode);
  text=replaceFunction(text,"canonicalRoute",canonicalCode);

  if(portal==="admin"){
    text=replaceFunction(text,"loadRememberedLogin",`function loadRememberedLogin(){try{const username=localStorage.getItem(ADMIN_CRED_KEY)||'';$('#loginUser').value=username;$('#rememberLogin').checked=!!username}catch(e){}}`);
    text=replaceFunction(text,"saveRememberedLogin",`function saveRememberedLogin(){if($('#rememberLogin').checked)localStorage.setItem(ADMIN_CRED_KEY,$('#loginUser').value.trim());else localStorage.removeItem(ADMIN_CRED_KEY)}`);
    text=replaceFunction(text,"currentAdminToken",`function currentAdminToken(){return '__COOKIE__'}`);
    text=replaceFunction(text,"storeAdminToken",`function storeAdminToken(){}`);
  }
  if(portal==="reviewer"){
    text=replaceFunction(text,"loadCreds",`function loadCreds(){try{const username=localStorage.getItem(CRED_KEY)||'';$('#loginUser').value=username;$('#rememberLogin').checked=!!username}catch(e){}}`);
    text=replaceFunction(text,"saveCreds",`function saveCreds(){if($('#rememberLogin').checked)localStorage.setItem(CRED_KEY,$('#loginUser').value.trim());else localStorage.removeItem(CRED_KEY)}`);
    text=replaceFunction(text,"storedToken",`function storedToken(){return '__COOKIE__'}`);
    text=replaceFunction(text,"storeToken",`function storeToken(){}`);
  }
  if(portal==="scanner"){
    text=replaceFunction(text,"loadRememberedLogin",`function loadRememberedLogin(){try{const username=localStorage.getItem(SCANNER_CRED_KEY)||'';$('#loginUser').value=username;$('#rememberLogin').checked=!!username}catch(e){}}`);
    text=replaceFunction(text,"saveRememberedLogin",`function saveRememberedLogin(){if($('#rememberLogin').checked)localStorage.setItem(SCANNER_CRED_KEY,$('#loginUser').value.trim());else localStorage.removeItem(SCANNER_CRED_KEY)}`);
    text=replaceFunction(text,"scannerStoredToken",`function scannerStoredToken(){return '__COOKIE__'}`);
    text=replaceFunction(text,"adminStoredToken",`function adminStoredToken(){return ''}`);
    text=replaceFunction(text,"storeScannerToken",`function storeScannerToken(){}`);
  }
  if(/google\.script\.run|<\?/.test(text))throw new Error(`GAS HTML binding remains in ${portal}`);
  await fs.writeFile(path.join(root,"public","legacy",`${portal}.html`),text,"utf8");
  console.log(`${portal}: ${Buffer.byteLength(text)} bytes`);
}
