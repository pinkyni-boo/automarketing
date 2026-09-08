import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PostCard from '@/components/PostCard';
import { SERVICES, getService } from '@/lib/services';
import { getAllPosts } from '@/lib/content';

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) return { title: 'Dịch vụ' };
  const title = `${service.title} | Dịch vụ`;
  return {
    title,
    description: service.desc,
    alternates: { canonical: `/dich-vu/${service.slug}` },
    openGraph: { title, description: service.desc, url: `/dich-vu/${service.slug}`, type: 'website' },
    twitter: { card: 'summary_large_image', title, description: service.desc },
  };
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const posts = await getAllPosts();
  const related = posts.filter((p) => service.relatedCategories.includes(p.category)).slice(0, 3);
  // Chỉ lấy ngẫu nhiên 3/5 dịch vụ còn lại — luôn vừa đúng 1 hàng trong lưới 3 cột,
  // tránh hàng cuối chỉ có 2 thẻ để hở khoảng trống bên cạnh.
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <main className="page">
      <section className="page-hero gradient">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Trang chủ</Link> <span>/</span> <Link href="/dich-vu">Dịch vụ</Link> <span>/</span>{' '}
            <span>{service.title}</span>
          </nav>
          <span className="kicker">{service.tag}</span>
          <h1>{service.title}</h1>
          <p>{service.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <span className="service-detail-tag">{service.tag}</span>
              <h2>Dịch vụ bao gồm những gì</h2>
              <ul className="service-includes">
                {service.includes.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={16} /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-detail-highlight">
              <div className="service-detail-icon">
                <service.icon size={26} />
              </div>
              <span className="service-detail-highlight-label">Phù hợp với</span>
              <p className="service-fit">{service.fit}</p>
              <Link className="btn btn-primary" href="/lien-he">
                Trao đổi nhu cầu <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="kicker">ĐỌC THÊM</span>
                <h2>Bài viết liên quan đến {service.title}</h2>
              </div>
              <Link href={`/blog?category=${encodeURIComponent(service.relatedCategories[0])}`} className="text-link">
                Xem tất cả <ArrowRight size={16} />
              </Link>
            </div>
            <div className="post-grid blog-grid">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">DỊCH VỤ KHÁC</span>
              <h2>Các nhóm dịch vụ khác của MarTech</h2>
            </div>
          </div>
          {/* Dùng đúng thẻ dịch vụ đầy đủ (icon, tag, mô tả, link) giống trang /dich-vu
              thay vì bản rút gọn — tránh cảm giác trống khi thiếu nội dung. */}
          <div className="service-summary-grid">
            {otherServices.map((s) => (
              <Link href={`/dich-vu/${s.slug}`} className="service-summary-card" key={s.slug}>
                <div className="service-summary-icon">
                  <s.icon size={24} />
                </div>
                <span className="service-detail-tag">{s.tag}</span>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <span className="service-summary-link">
                  Xem chi tiết dịch vụ <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container article-cta">
          <div>
            <h3>Sẵn sàng triển khai {service.title}?</h3>
            <p>Để lại thông tin, đội ngũ MarTech sẽ tư vấn giải pháp phù hợp nhất với mục tiêu và ngân sách của bạn.</p>
          </div>
          <Link className="btn btn-primary btn-lg" href="/lien-he">
            Liên hệ tư vấn <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
