import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PostCard from '@/components/PostCard';
import BlogSidebar from '@/components/BlogSidebar';
import SafeImage from '@/components/SafeImage';
import { fallbackFor } from '@/lib/fallback';
import { getAllPosts, getCategoryCounts } from '@/lib/content';

export type HubConfig = {
  accent: 'tech' | 'mkt';
  kicker: string;
  title: string;
  subtitle: string;
  categories: string[];
  cta: { title: string; desc: string; href: string; label: string };
};

export default async function CategoryHub({ accent, kicker, title, subtitle, categories, cta }: HubConfig) {
  const [posts, counts] = await Promise.all([getAllPosts(), getCategoryCounts()]);
  const groupPosts = posts.filter((p) => categories.includes(p.category));
  const [featured, ...rest] = groupPosts;
  const gridPosts = rest.slice(0, 6);

  return (
    <main className="page">
      <section className={`hub-hero ${accent}`}>
        <div className="container">
          <span className="kicker light">{kicker}</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hub-subcats">
            {categories.map((c) => (
              <Link key={c} href={`/blog?category=${encodeURIComponent(c)}`} className={`hub-subcat ${accent}`}>
                <b>{c}</b>
                <span>{counts[c] || 0} bài viết</span>
              </Link>
            ))}
          </div>

          {featured && (
            <div className="hub-feature">
              <Link href={`/blog/${featured.slug}`} className="hub-feature-image">
                <SafeImage src={featured.image} fallback={fallbackFor(featured.slug)} alt={featured.title} fill priority sizes="(max-width:900px) 100vw, 520px" />
                <span className="category-pill">{featured.category}</span>
              </Link>
              <div className="hub-feature-body">
                <span className="hub-feature-label">MỚI NHẤT</span>
                <h2>
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p>{featured.excerpt}</p>
                <div className="post-meta">
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                  {featured.author && <span>{featured.author}</span>}
                </div>
                <Link className="btn btn-primary" href={`/blog/${featured.slug}`}>
                  Đọc bài viết <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section soft">
        <div className="container blog-layout">
          <div className="blog-main">
            <div className="section-head">
              <div>
                <span className="kicker">CẬP NHẬT</span>
                <h2>Bài viết {title.toLowerCase()} mới</h2>
              </div>
              <Link href={`/blog?category=${encodeURIComponent(categories[0])}`} className="text-link">
                Xem tất cả <ArrowRight size={16} />
              </Link>
            </div>
            <div className="post-grid blog-grid">
              {gridPosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
          <BlogSidebar excludeSlug={featured?.slug} />
        </div>
      </section>

      <section className="section">
        <div className="container article-cta">
          <div>
            <h3>{cta.title}</h3>
            <p>{cta.desc}</p>
          </div>
          <Link className="btn btn-primary btn-lg" href={cta.href}>
            {cta.label} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
