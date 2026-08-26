import { posts as mockPosts, getPost as getMockPost, type Post as MockPost } from '@/lib/posts';

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
  content?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

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
  return mockPosts.map(fromMock);
}

export async function getPostBySlug(slug: string): Promise<UIPost | null> {
  const local = getMockPost(slug);
  return local ? fromMock(local) : null;
}
