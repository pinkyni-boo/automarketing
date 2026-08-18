import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.SANITY_API_VERSION || '2024-08-01';

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;
export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

export type SanityPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author?: string;
  publishedAt: string;
  cover: SanityImageSource | null;
  body: any[] | null;
  metaTitle?: string;
  metaDescription?: string;
};

const POST_PROJECTION = `{
  "slug": slug.current,
  title,
  excerpt,
  category,
  author,
  publishedAt,
  cover,
  body,
  metaTitle,
  metaDescription
}`;

export async function sanityListPosts(): Promise<SanityPost[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${POST_PROJECTION}`
    );
  } catch {
    return [];
  }
}

export async function sanityGetPost(slug: string): Promise<SanityPost | null> {
  if (!sanityClient) return null;
  try {
    const result = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] ${POST_PROJECTION}`,
      { slug }
    );
    return result || null;
  } catch {
    return null;
  }
}

export function estimateReadTime(body: any[] | null): string {
  if (!body || !body.length) return '5 phút đọc';
  const words = body
    .filter((b) => b._type === 'block')
    .map((b) => (b.children || []).map((c: any) => c.text || '').join(' '))
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} phút đọc`;
}

export function formatVietnameseDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
}
