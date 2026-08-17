import { Suspense } from "react";
import { LegacyPortal } from "./legacy-portal";

export type PortalName = "index" | "admin" | "reviewer" | "scanner";

export function PortalPage({ portal }: { portal: PortalName }) {
  return <Suspense fallback={<div style={{padding:24}}>กำลังโหลดระบบ…</div>}><LegacyPortal portal={portal} /></Suspense>;
}
