import { posts as mockPosts, getPost as getMockPost, type Post as MockPost } from '@/lib/posts';
import {
  sanityListPosts,
  sanityGetPost,
  urlFor,
  estimateReadTime,
  formatVietnameseDate,
  type SanityPost,
} from '@/lib/sanity';

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
  body?: any[] | null;
  content?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

const FALLBACK_COVER = '/hero-ai.svg';

function fromSanity(p: SanityPost): UIPost {
  const imageUrl = p.cover ? urlFor(p.cover)?.width(900).height(600).fit('crop').url() : null;
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || '',
    category: p.category || 'Marketing',
    date: p.publishedAt ? formatVietnameseDate(p.publishedAt) : '',
    publishedAtISO: p.publishedAt,
    readTime: estimateReadTime(p.body),
    image: imageUrl || FALLBACK_COVER,
    author: p.author,
    body: p.body || null,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
  };
}

function fromMock(p: MockPost): UIPost {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    image: p.image,
    content: p.content,
  };
}

export async function getAllPosts(): Promise<UIPost[]> {
  const remote = await sanityListPosts();
  if (remote.length) return remote.map(fromSanity);
  return mockPosts.map(fromMock);
}

export async function getPostBySlug(slug: string): Promise<UIPost | null> {
  const remote = await sanityGetPost(slug);
  if (remote) return fromSanity(remote);
  const local = getMockPost(slug);
  return local ? fromMock(local) : null;
}
