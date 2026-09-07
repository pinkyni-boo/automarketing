import Link from 'next/link';
import { Search } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import { fallbackFor } from '@/lib/fallback';
import { getAllPosts, getCategoryCounts } from '@/lib/content';

export default async function BlogSidebar({
  excludeSlug,
  activeCategory,
}: {
  excludeSlug?: string;
  activeCategory?: string;
}) {
  const [posts, counts] = await Promise.all([getAllPosts(), getCategoryCounts()]);
  const recent = posts.filter((p) => p.slug !== excludeSlug).slice(0, 4);

  return (
    <aside className="blog-sidebar">
      <div className="widget widget-search">
        <h3>Tìm kiếm</h3>
        <form action="/blog" method="get" className="search-form">
          <input type="text" name="q" placeholder="Search Here..." />
          <button className="btn btn-primary" type="submit">
            <Search size={15} /> Tìm kiếm
          </button>
        </form>
      </div>

      <div className="widget widget-recent">
        <h3>Bài viết gần đây</h3>
        <div className="recent-list">
          {recent.map((p) => (
            <Link href={`/blog/${p.slug}`} key={p.slug} className="recent-item">
              <span className="recent-thumb">
                <SafeImage src={p.image} fallback={fallbackFor(p.slug)} alt={p.title} fill sizes="64px" />
              </span>
              <span className="recent-text">
                <b>{p.title}</b>
                <small>{p.date}</small>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="widget widget-categories">
        <h3>Danh mục</h3>
        <ul className="category-list">
          {Object.entries(counts).map(([cat, count]) => (
            <li key={cat}>
              <Link href={`/blog?category=${encodeURIComponent(cat)}`} className={activeCategory === cat ? 'active' : ''}>
                {cat}
                <span>{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget widget-banner">
        <a href="/lien-he" className="banner-ad">
          <span className="banner-eyebrow">QUẢNG CÁO</span>
          <b>Đặt banner thương hiệu tại đây</b>
          <p>Tiếp cận hàng nghìn độc giả quan tâm Công nghệ &amp; Marketing mỗi tháng cùng MarTech.</p>
          <span className="banner-cta">Liên hệ đặt quảng cáo →</span>
        </a>
      </div>
    </aside>
  );
}
