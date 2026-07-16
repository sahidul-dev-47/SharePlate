export function formatPrice(price: number): string {
  return price === 0 ? "Free" : `Tk ${price}`;
}

export function formatTimeUntil(iso: string): string {
  const diffMs = new Date(iso).getTime() - Date.now();
  if (diffMs <= 0) return "now";
  const mins = Math.round(diffMs / 60000);
  if (mins < 60) return `${mins} min`;
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;
  return remMins > 0 ? `${hrs}h ${remMins}m` : `${hrs}h`;
}

export function formatRelativeDate(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

/**
 * Freshness = how much of the pickup window remains, from 0 (expired) to 1 (just posted).
 * Used to drive the freshness-ring signature element.
 */
export function freshnessFraction(postedAt: string, pickupEnd: string): number {
  const total = new Date(pickupEnd).getTime() - new Date(postedAt).getTime();
  const remaining = new Date(pickupEnd).getTime() - Date.now();
  if (total <= 0) return 0;
  return Math.min(1, Math.max(0, remaining / total));
}

export function isExpired(pickupEnd: string): boolean {
  return new Date(pickupEnd).getTime() <= Date.now();
}
