import Link from 'next/link';
import PostCard from '@/components/PostCard';
import BlogSidebar from '@/components/BlogSidebar';
import { filterPosts } from '@/lib/content';
import { ALL_CATEGORIES } from '@/lib/posts';

export const metadata = {
  title: 'Blog',
  description: 'Tin tức công nghệ và kiến thức marketing thực tiễn, dễ áp dụng cho đội ngũ và doanh nghiệp.',
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

export const revalidate = 60;

export default async function Blog({ searchParams }: { searchParams: { category?: string; q?: string } }) {
  const category = searchParams?.category;
  const q = searchParams?.q;
  const posts = await filterPosts({ category, q });

  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <span className="kicker">BLOG</span>
          <h1>Công nghệ & Marketing, cập nhật mỗi ngày</h1>
          <p>Tin tức công nghệ và kiến thức marketing thực tiễn, dễ áp dụng cho đội ngũ và doanh nghiệp.</p>
        </div>
      </section>

      <section className="section">
        <div className="container blog-layout">
          <div className="blog-main">
            <div className="filter-pills">
              <Link href="/blog" className={!category ? 'pill active' : 'pill'}>
                Tất cả
              </Link>
              {ALL_CATEGORIES.map((c) => (
                <Link key={c} href={`/blog?category=${encodeURIComponent(c)}`} className={category === c ? 'pill active' : 'pill'}>
                  {c}
                </Link>
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
