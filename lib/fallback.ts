const FALLBACKS = ['/article-1.svg', '/article-2.svg', '/article-3.svg', '/article-4.svg'];

// Ảnh nội bộ (SVG minh hoạ) dùng khi ảnh thật (Unsplash...) tải lỗi — chọn theo slug để mỗi bài luôn ra cùng 1 ảnh dự phòng.
export function fallbackFor(key: string): string {
  let hash = 0;
  for (const ch of key) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return FALLBACKS[hash % FALLBACKS.length];
}
