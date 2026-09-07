import { posts as mockPosts, getPost as getMockPost, type Post as MockPost } from '@/lib/posts';
import { getStoredPosts, getStoredPost, type StoredPost } from '@/lib/postStore';

export type UIPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  publishedAtISO?: string;
  readTime: string;
  image: string;
  author?: string;
  authorRole?: string;
  content?: string[];
  contentHtml?: string;
  images?: string[];
  videoUrl?: string | null;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

const FALLBACK_COVER = '/hero-ai.svg';

function fromMock(p: MockPost): UIPost {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    publishedAtISO: p.publishedAtISO,
    readTime: p.readTime,
    image: p.image,
    author: p.author,
    authorRole: p.authorRole,
    tags: p.tags,
    content: p.content,
  };
}

function fromStored(p: StoredPost): UIPost {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: formatVietnameseDate(p.publishedAtISO),
    publishedAtISO: p.publishedAtISO,
    readTime: p.readTime,
    image: p.featuredImageUrl || FALLBACK_COVER,
    author: p.author,
    contentHtml: p.contentHtml,
    images: p.images,
    videoUrl: p.videoUrl,
    tags: p.tags,
  };
}

function formatVietnameseDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
}

export async function getAllPosts(): Promise<UIPost[]> {
  const stored = getStoredPosts().map(fromStored);
  const mock = mockPosts.map(fromMock).filter((p) => !stored.some((s) => s.slug === p.slug));
  return [...stored, ...mock];
}

export async function getPostBySlug(slug: string): Promise<UIPost | null> {
  const stored = getStoredPost(slug);
  if (stored) return fromStored(stored);
  const local = getMockPost(slug);
  return local ? fromMock(local) : null;
}

export { CATEGORY_GROUPS, ALL_CATEGORIES, AUTHORS } from '@/lib/posts';

export async function getCategoryCounts(): Promise<Record<string, number>> {
  const posts = await getAllPosts();
  return posts.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

export async function filterPosts(opts: { category?: string; q?: string } = {}): Promise<UIPost[]> {
  const posts = await getAllPosts();
  const q = opts.q?.trim().toLowerCase();
  return posts.filter((p) => {
    const matchCategory = !opts.category || p.category === opts.category;
    const matchQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      (p.tags || []).some((t) => t.toLowerCase().includes(q));
    return matchCategory && matchQuery;
  });
}

export async function getAdjacentPosts(slug: string): Promise<{ prev: UIPost | null; next: UIPost | null }> {
  const posts = await getAllPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx < posts.length - 1 ? posts[idx + 1] : null,
    next: idx > 0 ? posts[idx - 1] : null,
  };
}
