export const DEFAULT_CONFERENCE_ID=process.env.NEXT_PUBLIC_DEFAULT_CONFERENCE_ID??"CONF-TUH-QF-2569";
export const SESSION_COOKIE=process.env.SESSION_COOKIE_NAME??"tuh_session";
export const MAX_REQUEST_BYTES=Number(process.env.GAS_MAX_REQUEST_BYTES??4_000_000);
export const GAS_TIMEOUT_MS=Number(process.env.GAS_REQUEST_TIMEOUT_MS??25_000);
