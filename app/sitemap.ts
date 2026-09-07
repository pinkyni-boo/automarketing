import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const posts = await getAllPosts();
  const fixed = ['', '/blog', '/dich-vu', '/gioi-thieu', '/lien-he', '/cong-nghe', '/marketing'].map((u) => ({
    url: base + u,
    lastModified: new Date(),
  }));
  return [
    ...fixed,
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.publishedAtISO ? new Date(p.publishedAtISO) : new Date(),
    })),
  ];
}
