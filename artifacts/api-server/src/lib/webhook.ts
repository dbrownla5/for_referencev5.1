/**
 * Outbound webhook — fire-and-forget POST of a submission to an external CRM
 * (Google AppSheet, a Cloud Function, Manus, etc.). Configured via WEBHOOK_URL.
 *
 * This is the portable seam: the website does not care who receives the data.
 * Point WEBHOOK_URL anywhere and the same JSON shows up there. If WEBHOOK_URL
 * is unset, this is a no-op (the DB row remains the system of record).
 */
import { logger } from "./logger";

export async function dispatchWebhook(payload: Record<string, unknown>): Promise<{ sent: boolean; reason: string }> {
  const url = process.env.WEBHOOK_URL;
  if (!url) return { sent: false, reason: "WEBHOOK_URL not set — skipped." };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      logger.error({ status: res.status }, "Webhook non-OK");
      return { sent: false, reason: `Webhook responded ${res.status}` };
    }
    return { sent: true, reason: "sent" };
  } catch (err) {
    logger.error({ err }, "Webhook threw");
    return { sent: false, reason: "webhook threw" };
  }
}
