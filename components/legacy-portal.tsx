"use client";

import { useSearchParams } from "next/navigation";

type PortalName = "index" | "admin" | "reviewer" | "scanner";

export function LegacyPortal({ portal }: { portal: PortalName }) {
  const query = useSearchParams().toString();
  const src = `/legacy/${portal}.html${query ? `?${query}` : ""}`;
  return <iframe src={src} title={`${portal} portal`} allow="camera" style={{width:"100%",height:"100dvh",border:0,display:"block"}} />;
}
