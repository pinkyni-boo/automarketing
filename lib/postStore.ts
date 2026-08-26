import fs from 'fs';
import path from 'path';

export type StoredPost = {
  slug: string;
  title: string;
  contentHtml: string;
  excerpt: string;
  category: string;
  author?: string;
  featuredImageUrl?: string | null;
  images?: string[];
  videoUrl?: string | null;
  tags?: string[];
  publishedAtISO: string;
  readTime: string;
};

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'posts.json');

function readAll(): StoredPost[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeAll(posts: StoredPost[]) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
}

export function getStoredPosts(): StoredPost[] {
  return readAll().sort((a, b) => (a.publishedAtISO < b.publishedAtISO ? 1 : -1));
}

export function getStoredPost(slug: string): StoredPost | null {
  return readAll().find((p) => p.slug === slug) || null;
}

function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function uniqueSlug(base: string): string {
  const posts = readAll();
  const existing = new Set(posts.map((p) => p.slug));
  const cleanBase = slugify(base) || 'bai-viet';
  if (!existing.has(cleanBase)) return cleanBase;
  let i = 2;
  while (existing.has(`${cleanBase}-${i}`)) i++;
  return `${cleanBase}-${i}`;
}

export function addStoredPost(post: StoredPost): StoredPost {
  const posts = readAll();
  const idx = posts.findIndex((p) => p.slug === post.slug);
  if (idx >= 0) posts[idx] = post;
  else posts.push(post);
  writeAll(posts);
  return post;
}
