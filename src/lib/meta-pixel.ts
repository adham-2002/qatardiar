type FbqCommand = "track" | "trackCustom";

declare global {
  interface Window {
    fbq?: (
      command: FbqCommand,
      event: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, params);
  }
}
