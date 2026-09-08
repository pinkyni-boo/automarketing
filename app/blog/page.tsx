import Link from 'next/link';
import PostCard from '@/components/PostCard';
import BlogSidebar from '@/components/BlogSidebar';
import { filterPosts, getCategoryAccent } from '@/lib/content';
import { CATEGORY_GROUPS } from '@/lib/posts';

export const metadata = {
  title: 'Blog',
  description: 'Tin tức công nghệ và kiến thức marketing thực tiễn, dễ áp dụng cho đội ngũ marketing và doanh nghiệp.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | MarTech',
    description: 'Tin tức công nghệ và kiến thức marketing thực tiễn, dễ áp dụng cho đội ngũ và doanh nghiệp.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | MarTech',
    description: 'Tin tức công nghệ và kiến thức marketing thực tiễn, dễ áp dụng cho đội ngũ và doanh nghiệp.',
  },
};

// Trang này lọc theo searchParams (category/q/sort) — không dùng revalidate ISR ở đây vì
// kết hợp với searchParams từng khiến Next.js cache nhầm, bấm đổi danh mục nhưng nội dung
// không đổi. Ép render động để mỗi lượt bấm luôn trả đúng nội dung theo query.
export const dynamic = 'force-dynamic';

const HERO_COPY: Record<'tech' | 'mkt' | 'all', { kicker: string; title: string; subtitle: string }> = {
  all: {
    kicker: 'BLOG',
    title: 'Công nghệ & Marketing, cập nhật mỗi ngày',
    subtitle: 'Tin tức công nghệ và kiến thức marketing thực tiễn, dễ áp dụng cho đội ngũ và doanh nghiệp.',
  },
  tech: {
    kicker: 'CÔNG NGHỆ',
    title: 'Tin tức Công nghệ',
    subtitle: 'AI, phần mềm, Internet và xu hướng công nghệ ứng dụng cho doanh nghiệp — cập nhật dễ hiểu, có ví dụ thực tế.',
  },
  mkt: {
    kicker: 'MARKETING',
    title: 'Kiến thức Marketing',
    subtitle: 'Chiến lược marketing, SEO, content và automation cho tăng trưởng bền vững.',
  },
};

export default async function Blog({ searchParams }: { searchParams: { category?: string; q?: string; sort?: string } }) {
  const category = searchParams?.category;
  const q = searchParams?.q;
  const sort = searchParams?.sort === 'popular' ? 'popular' : 'latest';
  const posts = await filterPosts({ category, q, sort });
  const accent = getCategoryAccent(category);
  const hero = HERO_COPY[accent ?? 'all'];

  const base = new URLSearchParams();
  if (category) base.set('category', category);
  if (q) base.set('q', q);
  const latestQS = base.toString();
  const popularParams = new URLSearchParams(base);
  popularParams.set('sort', 'popular');
  const popularQS = popularParams.toString();

  return (
    <main className="page">
      <section className={accent ? `page-hero ${accent}` : 'page-hero'}>
        <div className="container">
          <span className="kicker">{hero.kicker}</span>
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container blog-layout">
          <div className="blog-main">
            <div className="blog-toolbar">
              <div className="sort-tabs">
                <Link href={`/blog${latestQS ? `?${latestQS}` : ''}`} className={sort === 'latest' ? 'active' : ''}>
                  Mới nhất
                </Link>
                <Link href={`/blog?${popularQS}`} className={sort === 'popular' ? 'active' : ''}>
                  Phổ biến
                </Link>
              </div>
            </div>

            {/* Nhóm bộ lọc theo Công nghệ / Marketing riêng biệt — tránh trộn lẫn hai
                mảng nội dung khi người dùng vừa đến từ một trang chuyên mục cụ thể. */}
            <div className="filter-groups">
              <Link href="/blog" className={!category ? 'pill all active' : 'pill all'}>
                Tất cả
              </Link>
              {CATEGORY_GROUPS.map((g) => (
                <div className={`filter-group ${g.accent}`} key={g.group}>
                  <span className="filter-group-label">{g.group}</span>
                  <div className="filter-group-pills">
                    {g.categories.map((c) => (
                      <Link key={c} href={`/blog?category=${encodeURIComponent(c)}`} className={category === c ? 'pill active' : 'pill'}>
                        {c}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {q && (
              <p className="search-result-info">
                Kết quả tìm kiếm cho “{q}” — {posts.length} bài viết
              </p>
            )}

            {posts.length === 0 ? (
              <div className="empty-state">
                <p>Không tìm thấy bài viết phù hợp. Thử một từ khoá khác hoặc xem tất cả bài viết.</p>
                <Link className="btn btn-primary" href="/blog">
                  Xem tất cả bài viết
                </Link>
              </div>
            ) : (
              <div className="post-grid blog-grid">
                {posts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            )}
          </div>

          <BlogSidebar activeCategory={category} />
        </div>
      </section>
    </main>
  );
}
