import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const audit=JSON.parse(fs.readFileSync("docs/source-audit-manifest.json","utf8"));
const frontendActions=new Set();
for(const page of Object.values(audit.frontend)){
  for(const call of page.calls)if(call.function!=="withSuccessHandler")frontendActions.add(call.function);
}
const actionTs=fs.readFileSync("lib/actions.ts","utf8");
const gasActions=fs.readFileSync("gas/ApiActions.gs","utf8");

test("every discovered frontend action is allowlisted twice",()=>{
  for(const action of frontendActions){
    assert.match(actionTs,new RegExp(`"${action}"`),`${action} missing from Vercel allowlist`);
    assert.match(gasActions,new RegExp(`\\b${action}\\s*:`),`${action} missing from GAS allowlist`);
  }
});

test("every discovered action exists in production GAS source",()=>{
  const names=new Set(audit.gas.functions.map(fn=>fn.name));
  for(const action of frontendActions)assert.ok(names.has(action),`${action} missing from code.gs.txt`);
});

test("generated production HTML has no GAS HTML bindings",()=>{
  for(const portal of ["index","admin","reviewer","scanner"]){
    const html=fs.readFileSync(`public/legacy/${portal}.html`,"utf8");
    assert.doesNotMatch(html,/google\.script\.run/);
    assert.doesNotMatch(html,/<\?/);
    assert.match(html,/fetch\('\/api\/gas'/);
  }
});

test("production HTML does not persist passwords or raw tokens",()=>{
  for(const portal of ["admin","reviewer","scanner"]){
    const html=fs.readFileSync(`public/legacy/${portal}.html`,"utf8");
    assert.doesNotMatch(html,/(?:localStorage|sessionStorage)\.setItem\([^)]*(?:password|Password)/i);
    assert.doesNotMatch(html,/(?:localStorage|sessionStorage)\.setItem\(\s*['"]tuh(?:Admin|Reviewer|Scanner)Token/i);
  }
});

test("server secret is never public",()=>{
  assert.doesNotMatch(fs.readFileSync(".env.example","utf8"),/NEXT_PUBLIC_GAS_API_SECRET/);
  assert.doesNotMatch(actionTs,/GAS_API_SECRET/);
  for(const portal of ["index","admin","reviewer","scanner"]){
    assert.doesNotMatch(fs.readFileSync(`public/legacy/${portal}.html`,"utf8"),/GAS_API_SECRET/);
  }
});
