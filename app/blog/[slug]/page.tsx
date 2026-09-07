import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';
import PostCard from '@/components/PostCard';
import BlogSidebar from '@/components/BlogSidebar';
import PostNav from '@/components/PostNav';
import ArticleBody from '@/components/ArticleBody';
import SafeImage from '@/components/SafeImage';
import { fallbackFor } from '@/lib/fallback';
import { formatViews } from '@/lib/format';
import { getAllPosts, getPostBySlug, getAdjacentPosts } from '@/lib/content';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = await getPostBySlug(params.slug);
  if (!p) return { title: 'Bài viết' };
  const title = p.metaTitle || p.title;
  const description = p.metaDescription || p.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title, description, type: 'article', images: p.image ? [p.image] : undefined },
    twitter: { card: 'summary_large_image', title, description, images: p.image ? [p.image] : undefined },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const p = await getPostBySlug(params.slug);
  if (!p) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const relatedFallback = related.length ? related : allPosts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const { prev, next } = await getAdjacentPosts(p.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    image: p.image,
    datePublished: p.publishedAtISO,
    author: p.author ? { '@type': 'Person', name: p.author } : undefined,
  };

  return (
    <main className="article-page">
      <div className="container article-layout">
        <div className="article-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Trang chủ</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span>{' '}
            <Link href={`/blog?category=${encodeURIComponent(p.category)}`}>{p.category}</Link> <span>/</span>{' '}
            <span>{p.title}</span>
          </nav>
          <div className="article-head">
            <span className="category-pill static">{p.category}</span>
            <h1>{p.title}</h1>
            <p>{p.excerpt}</p>
            <div className="post-meta">
              <span>{p.date}</span>
              <span>{p.readTime}</span>
              <span>
                <Eye size={14} /> {formatViews(p.views)}
              </span>
              {p.author && <span>{p.author}{p.authorRole ? ` · ${p.authorRole}` : ''}</span>}
            </div>
          </div>
          <div className="article-cover">
            <SafeImage src={p.image} fallback={fallbackFor(p.slug)} alt={p.title} fill sizes="(max-width:900px) 100vw, 700px" priority />
          </div>
          <article className="article-content">
            {p.contentHtml ? <div dangerouslySetInnerHTML={{ __html: p.contentHtml }} /> : <ArticleBody content={p.content || []} />}
          </article>

          <PostNav prev={prev} next={next} />

          {relatedFallback.length > 0 && (
            <section className="related-posts">
              <div className="section-head">
                <h2>Bài viết liên quan</h2>
              </div>
              <div className="post-grid">
                {relatedFallback.map((rp) => (
                  <PostCard key={rp.slug} post={rp} />
                ))}
              </div>
            </section>
          )}

          <div className="article-cta">
            <div>
              <h3>Cần tư vấn giải pháp Công nghệ & Marketing?</h3>
              <p>Tìm hiểu các nhóm dịch vụ phù hợp với mục tiêu tăng trưởng của doanh nghiệp bạn.</p>
            </div>
            <Link className="btn btn-primary btn-lg" href="/dich-vu">
              Xem dịch vụ <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <BlogSidebar excludeSlug={p.slug} activeCategory={p.category} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
