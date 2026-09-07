function hash(key: string): number {
  let h = 0;
  for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

// Lượt xem giả (demo only) — sinh ổn định theo slug nên không đổi số giữa các lần render.
export function pseudoViews(slug: string): number {
  return 800 + (hash(slug) % 14200); // ~800 – 15.000
}

export function formatViews(n: number): string {
  if (n >= 1000) {
    const v = n / 1000;
    return `${Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1)}K lượt xem`;
  }
  return `${n} lượt xem`;
}
