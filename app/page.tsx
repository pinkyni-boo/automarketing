import Link from 'next/link';
import { ArrowRight, Bot, ChartNoAxesCombined, Clock, Cpu, Eye, FileText, Quote, ShieldCheck, Sparkles, Target, Zap } from 'lucide-react';
import PostCard from '@/components/PostCard';
import Reveal from '@/components/Reveal';
import SafeImage from '@/components/SafeImage';
import { fallbackFor } from '@/lib/fallback';
import { formatViews } from '@/lib/format';
import { getAllPosts } from '@/lib/content';
import { CATEGORY_GROUPS } from '@/lib/posts';

export const revalidate = 60;

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: 'MarTech | Công nghệ & Marketing Insights',
    description: 'Tin tức công nghệ, kiến thức marketing và ứng dụng AI thực tiễn cho doanh nghiệp số.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarTech | Công nghệ & Marketing Insights',
    description: 'Tin tức công nghệ, kiến thức marketing và ứng dụng AI thực tiễn cho doanh nghiệp số.',
  },
};

const BENEFITS: [any, string, string][] = [
  [Zap, 'Cập nhật nhanh', 'Tin công nghệ và marketing mới nhất, biên tập mỗi ngày.'],
  [Target, 'Ứng dụng thực tế', 'Nội dung có ví dụ, số liệu và hướng triển khai cụ thể.'],
  [Cpu, 'Song hành Công nghệ & AI', 'Không chỉ marketing — cả xu hướng công nghệ, phần mềm, AI.'],
  [ShieldCheck, 'Nguồn tin đáng tin cậy', 'Đội ngũ biên tập có chuyên môn, tách bạch dữ kiện và quan điểm.'],
];

const SERVICES: [any, string, string][] = [
  [Bot, 'AI Automation', 'Thiết kế workflow tự động hóa marketing và chăm sóc khách hàng bằng AI.'],
  [ChartNoAxesCombined, 'Performance Marketing', 'Tối ưu chiến dịch quảng cáo theo dữ liệu, tập trung ROI thực tế.'],
  [FileText, 'Content & SEO', 'Xây hệ thống nội dung chuẩn SEO giúp tăng traffic tự nhiên bền vững.'],
];

const STATS: [string, string][] = [
  ['120.000+', 'Độc giả mỗi tháng'],
  ['500+', 'Bài viết đã xuất bản'],
  ['35+', 'Chuyên gia cộng tác'],
  ['3 năm', 'Hoạt động liên tục'],
];

const TESTIMONIALS = [
  {
    name: 'Nguyễn Hoàng Anh',
    role: 'Giám đốc Marketing, NovaTech',
    avatar: 'https://i.pravatar.cc/150?img=68',
    quote:
      'MarTech là nguồn tin mình đọc mỗi sáng — vừa cập nhật công nghệ, vừa có góc nhìn marketing thực chiến, dễ áp dụng ngay cho đội ngũ.',
  },
  {
    name: 'Trần Bảo Trâm',
    role: 'Founder, Zentra Studio',
    avatar: 'https://i.pravatar.cc/150?img=44',
    quote:
      'Nội dung không sáo rỗng, có số liệu và ví dụ rõ ràng. Loạt bài về AI Automation giúp team mình tiết kiệm rất nhiều thời gian vận hành.',
  },
  {
    name: 'Lê Minh Quân',
    role: 'CTO, Orbit Digital',
    avatar: 'https://i.pravatar.cc/150?img=15',
    quote:
      'Là dân kỹ thuật nhưng mình vẫn theo dõi MarTech đều vì phần nội dung công nghệ được biên tập cẩn thận, không giật tít quá đà.',
  },
];

const BRANDS = ['NovaTech', 'BlueWave', 'Zentra', 'Growthly', 'Finlab', 'Orbit Digital'];

export default async function Home() {
  const posts = await getAllPosts(); // đã sắp theo ngày mới nhất trước
  const [techGroup, mktGroup] = CATEGORY_GROUPS;
  const techPosts = posts.filter((p) => techGroup.categories.includes(p.category)).slice(0, 3);
  const mktPosts = posts.filter((p) => mktGroup.categories.includes(p.category)).slice(0, 3);

  const [featured, ...others] = posts;
  const heroSide = others.slice(0, 3);
  const latestGrid = others.slice(3, 6);
  const shownSlugs = new Set([featured.slug, ...heroSide.map((p) => p.slug), ...latestGrid.map((p) => p.slug)]);
  const popular = [...posts].filter((p) => !shownSlugs.has(p.slug)).sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <main>
      <h1 className="sr-only">MarTech — Công nghệ &amp; Marketing Insights</h1>

      <section className="home-hero">
        <div className="container">
          <div className="home-hero-grid">
            <Link href={`/blog/${featured.slug}`} className="home-hero-feature">
              <SafeImage src={featured.image} fallback={fallbackFor(featured.slug)} alt={featured.title} fill priority sizes="(max-width:980px) 100vw, 62vw" />
              <div className="home-hero-feature-overlay" />
              <div className="home-hero-feature-body">
                <span className="category-pill">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="post-meta">
                  <span>{featured.date}</span>
                  <span>
                    <Clock size={14} /> {featured.readTime}
                  </span>
                  <span>
                    <Eye size={14} /> {formatViews(featured.views)}
                  </span>
                </div>
              </div>
            </Link>

            <div className="home-hero-side">
              {heroSide.map((p) => (
                <Link href={`/blog/${p.slug}`} key={p.slug} className="home-hero-side-item">
                  <span className="home-hero-side-thumb">
                    <SafeImage src={p.image} fallback={fallbackFor(p.slug)} alt={p.title} fill sizes="96px" />
                  </span>
                  <span className="home-hero-side-text">
                    <span className="home-hero-side-cat">{p.category}</span>
                    <b>{p.title}</b>
                    <small>{p.date}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefits-grid">
          {BENEFITS.map(([I, t, d]) => (
            <div className="benefit" key={t}>
              <span className="benefit-icon">
                <I />
              </span>
              <div>
                <b>{t}</b>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">INSIGHTS</span>
                <h2>Bài viết mới nhất</h2>
              </div>
              <Link href="/blog" className="text-link">
                Xem tất cả <ArrowRight size={16} />
              </Link>
            </div>
            <div className="home-blog">
              <div className="post-grid">
                {latestGrid.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
              <aside className="sidebar">
                <div className="newsletter">
                  <span className="mini-icon">
                    <Bot />
                  </span>
                  <h3>Nhận bản tin MarTech</h3>
                  <p>Tóm tắt xu hướng Công nghệ & Marketing mới nhất, gửi định kỳ vào hộp thư của bạn.</p>
                  <input placeholder="Email của bạn" />
                  <button className="btn btn-primary">Đăng ký ngay</button>
                </div>
                <div className="popular">
                  <h3>Bài đọc nhiều</h3>
                  {popular.map((p, i) => (
                    <Link href={`/blog/${p.slug}`} key={p.slug}>
                      <span>0{i + 1}</span>
                      <b>{p.title}</b>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">2 THỂ LOẠI NỘI DUNG</span>
                <h2>Công nghệ & Marketing — song hành</h2>
              </div>
            </div>
            <div className="pillar-grid">
              <div className="pillar-card">
                <div className="pillar-head">
                  <span className="pillar-icon tech">
                    <Cpu size={20} />
                  </span>
                  <div>
                    <h3>Công nghệ</h3>
                    <p>AI, phần mềm, Internet và xu hướng công nghệ ứng dụng cho doanh nghiệp.</p>
                  </div>
                </div>
                <div className="pillar-posts">
                  {techPosts.map((p) => (
                    <Link href={`/blog/${p.slug}`} key={p.slug} className="pillar-post">
                      <b>{p.title}</b>
                      <span>{p.category}</span>
                    </Link>
                  ))}
                </div>
                <Link href="/cong-nghe" className="text-link">
                  Xem tin công nghệ <ArrowRight size={16} />
                </Link>
              </div>

              <div className="pillar-card">
                <div className="pillar-head">
                  <span className="pillar-icon mkt">
                    <Target size={20} />
                  </span>
                  <div>
                    <h3>Marketing</h3>
                    <p>Chiến lược marketing, SEO, content và automation cho tăng trưởng bền vững.</p>
                  </div>
                </div>
                <div className="pillar-posts">
                  {mktPosts.map((p) => (
                    <Link href={`/blog/${p.slug}`} key={p.slug} className="pillar-post">
                      <b>{p.title}</b>
                      <span>{p.category}</span>
                    </Link>
                  ))}
                </div>
                <Link href="/marketing" className="text-link">
                  Xem tin marketing <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">SERVICES</span>
                <h2>Nhóm giải pháp nổi bật</h2>
              </div>
              <Link href="/dich-vu" className="text-link">
                Xem tất cả dịch vụ <ArrowRight size={16} />
              </Link>
            </div>
            <div className="service-grid">
              {SERVICES.map(([I, t, d]) => (
                <div className="service-card" key={t}>
                  <span>
                    <I />
                  </span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <Link href="/dich-vu">
                    Tìm hiểu <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="trusted">
        <div className="container">
          <p className="trusted-label">ĐƯỢC TIN DÙNG BỞI ĐỘI NGŨ MARKETING & CÔNG NGHỆ TẠI</p>
          <div className="trusted-grid">
            {BRANDS.map((b) => (
              <span key={b} className="trusted-brand">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">TESTIMONIALS</span>
                <h2>Độc giả & đối tác nói gì</h2>
              </div>
            </div>
            <div className="testimonial-grid">
              {TESTIMONIALS.map((t) => (
                <div className="testimonial-card" key={t.name}>
                  <Quote size={26} className="testimonial-quote-icon" />
                  <p>{t.quote}</p>
                  <div className="testimonial-person">
                    <img src={t.avatar} alt={t.name} />
                    <div>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <span className="kicker light">MARTECH NEWSLETTER</span>
            <h2>Không bỏ lỡ xu hướng Công nghệ & Marketing nào</h2>
            <p>Mỗi tuần một bản tin ngắn gọn, chọn lọc những nội dung đáng đọc nhất từ MarTech.</p>
          </div>
          <form className="cta-banner-form">
            <input type="email" placeholder="Nhập email của bạn" />
            <button className="btn btn-primary" type="button">
              Đăng ký <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {STATS.map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
