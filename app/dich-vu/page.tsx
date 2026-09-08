import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, PROCESS, PRICING, FAQ } from '@/lib/services';

export const metadata = {
  title: 'Dịch vụ',
  description:
    'Giải pháp Công nghệ & Marketing trọn gói: AI Automation, Performance Marketing, Content & SEO, phát triển web và Marketing Operations.',
  alternates: { canonical: '/dich-vu' },
  openGraph: {
    title: 'Dịch vụ | MarTech',
    description:
      'Giải pháp Công nghệ & Marketing trọn gói: AI Automation, Performance Marketing, Content & SEO, phát triển web và Marketing Operations.',
    url: '/dich-vu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dịch vụ | MarTech',
    description:
      'Giải pháp Công nghệ & Marketing trọn gói: AI Automation, Performance Marketing, Content & SEO, phát triển web và Marketing Operations.',
  },
};

export default function Services() {
  return (
    <main className="page">
      <section className="page-hero gradient">
        <div className="container">
          <span className="kicker">SERVICES</span>
          <h1>Giải pháp Công nghệ & Marketing trọn gói</h1>
          <p>
            6 nhóm dịch vụ được thiết kế để giải quyết đúng bài toán tăng trưởng của doanh nghiệp — từ nền tảng công
            nghệ, tự động hoá AI đến marketing hiệu suất và nội dung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-summary-grid">
            {SERVICES.map((s) => (
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
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">QUY TRÌNH</span>
              <h2>Cách MarTech triển khai một dự án</h2>
            </div>
          </div>
          <div className="process-grid">
            {PROCESS.map(([n, t, d]) => (
              <div className="process-step" key={n}>
                <span className="process-num">{n}</span>
                <b>{t}</b>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">BẢNG GIÁ</span>
              <h2>Gói dịch vụ tham khảo</h2>
            </div>
          </div>
          <div className="pricing-grid">
            {PRICING.map((p) => (
              <div className={p.highlight ? 'pricing-card highlight' : 'pricing-card'} key={p.name}>
                {p.highlight && <span className="pricing-badge">Phổ biến nhất</span>}
                <h3>{p.name}</h3>
                <p className="pricing-desc">{p.desc}</p>
                <div className="pricing-price">
                  <strong>{p.price}</strong>
                  <span>{p.period}</span>
                </div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={15} /> {f}
                    </li>
                  ))}
                </ul>
                <Link className={p.highlight ? 'btn btn-primary' : 'btn btn-glass-dark'} href="/lien-he">
                  Chọn gói này
                </Link>
              </div>
            ))}
          </div>
          <p className="pricing-note">* Bảng giá mang tính tham khảo, sẽ được tư vấn cụ thể theo phạm vi thực tế của từng doanh nghiệp.</p>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">FAQ</span>
              <h2>Câu hỏi thường gặp</h2>
            </div>
          </div>
          <div className="faq-list">
            {FAQ.map(([q, a]) => (
              <details className="faq-item" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-cta">
          <div>
            <h3>Chưa chắc dịch vụ nào phù hợp?</h3>
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
