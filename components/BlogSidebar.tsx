import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import { fallbackFor } from '@/lib/fallback';
import { getAllPosts, getCategoryCounts } from '@/lib/content';
import { CATEGORY_GROUPS } from '@/lib/posts';

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
      {/* Thanh tìm kiếm — cùng khung thẻ (viền/bóng/bo góc) với các widget khác cho đồng bộ,
          nhưng ô nhập gọn, icon lồng sẵn thay vì nút chữ to như trước. */}
      <div className="widget widget-search">
        <form action="/blog" method="get" className="sidebar-search">
          <Search size={16} className="sidebar-search-icon" />
          <input type="text" name="q" placeholder="Tìm bài viết..." aria-label="Tìm bài viết" />
          <button type="submit" aria-label="Tìm kiếm">
            <ArrowRight size={15} />
          </button>
        </form>
      </div>

      <div className="widget widget-recent">
        <h3 className="sr-only">Bài viết gần đây</h3>
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
        <h3 className="sr-only">Danh mục</h3>
        {/* Tách riêng theo nhóm Công nghệ / Marketing thay vì liệt kê lẫn lộn một danh sách phẳng. */}
        {CATEGORY_GROUPS.map((g) => (
          <div className={`category-group ${g.accent}`} key={g.group}>
            <span className="category-group-label">{g.group}</span>
            <ul className="category-list">
              {g.categories.map((cat) => (
                <li key={cat}>
                  <Link href={`/blog?category=${encodeURIComponent(cat)}`} className={activeCategory === cat ? 'active' : ''}>
                    {cat}
                    <span>{counts[cat] || 0}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
