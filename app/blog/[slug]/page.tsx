import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PostCard from '@/components/PostCard';
import { getAllPosts, getPostBySlug } from '@/lib/content';

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
      <div className="container article-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span>{' '}
          <span>{p.title}</span>
        </nav>
        <div className="article-head">
          <span className="category-pill static">{p.category}</span>
          <h1>{p.title}</h1>
          <p>{p.excerpt}</p>
          <div className="post-meta">
            <span>{p.date}</span>
            <span>{p.readTime}</span>
            {p.author && <span>{p.author}</span>}
          </div>
        </div>
        <div className="article-cover">
          <Image src={p.image} alt={p.title} fill sizes="(max-width:900px) 100vw, 900px" />
        </div>
        <article className="article-content">
          {p.contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: p.contentHtml }} />
          ) : (
            <>
              {p.content?.map((x, i) => <p key={i}>{x}</p>)}
              <h2>Gợi ý triển khai</h2>
              <p>
                Bắt đầu bằng một mục tiêu nhỏ, xác định chỉ số cần theo dõi và ghi nhận dữ liệu trước khi mở rộng.
                Khi quy trình đã ổn định, mới tăng mức tự động hóa hoặc mở rộng sang nhiều kênh hơn.
              </p>
            </>
          )}
        </article>

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
            <h3>Cần tư vấn giải pháp Marketing & AI Automation?</h3>
            <p>Tìm hiểu các nhóm dịch vụ phù hợp với mục tiêu tăng trưởng của doanh nghiệp bạn.</p>
          </div>
          <Link className="btn btn-primary btn-lg" href="/dich-vu">
            Xem dịch vụ <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
