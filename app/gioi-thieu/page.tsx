import { Cpu, Target, Users, Sparkles } from 'lucide-react';
import { AUTHORS } from '@/lib/posts';

export const metadata = {
  title: 'Giới thiệu',
  description: 'MarTech là chuyên trang tin Công nghệ & Marketing, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số.',
  alternates: { canonical: '/gioi-thieu' },
  openGraph: {
    title: 'Giới thiệu | MarTech',
    description: 'MarTech là chuyên trang tin Công nghệ & Marketing, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số.',
    url: '/gioi-thieu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giới thiệu | MarTech',
    description: 'MarTech là chuyên trang tin Công nghệ & Marketing, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số.',
  },
};

const MILESTONES: [string, string][] = [
  ['2022', 'MarTech thành lập với mục tiêu là nơi cập nhật cả công nghệ lẫn marketing cho người làm nghề.'],
  ['2023', 'Ra mắt chuyên mục AI & Automation, mở rộng đội ngũ cộng tác viên chuyên môn.'],
  ['2024', 'Vượt mốc 100.000 độc giả/tháng, hợp tác cùng hơn 30 doanh nghiệp tư vấn dịch vụ.'],
  ['2026', 'Mở rộng nhóm dịch vụ Công nghệ & Marketing trọn gói cho doanh nghiệp vừa và nhỏ.'],
];

const VALUES = [
  [Sparkles, 'Thực tiễn', 'Ưu tiên nội dung có thể áp dụng ngay, hạn chế lý thuyết suông.'],
  [Target, 'Chính xác', 'Tách bạch dữ liệu và quan điểm, tránh phóng đại số liệu.'],
  [Cpu, 'Song hành công nghệ', 'Không chỉ marketing — luôn cập nhật công nghệ nền tảng phía sau.'],
  [Users, 'Đồng hành dài hạn', 'Xem mỗi độc giả, khách hàng là một hành trình cần đồng hành lâu dài.'],
] as const;

export default function About() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <span className="kicker">ABOUT</span>
          <h1>MarTech là gì?</h1>
          <p>
            MarTech là chuyên trang tin độc lập về Công nghệ & Marketing, thành lập năm 2022 — nơi cập nhật xu hướng
            công nghệ, ứng dụng AI và kiến thức marketing thực tiễn cho doanh nghiệp và người làm nghề.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose-card">
          <h2>Định hướng nội dung</h2>
          <p>
            MarTech tập trung vào hai trụ cột nội dung: <b>Công nghệ</b> (AI, phần mềm, Internet, xu hướng số) và{' '}
            <b>Marketing</b> (chiến lược, content, SEO, automation). Mục tiêu là trình bày nội dung dễ đọc, có ví dụ và
            có thể áp dụng vào quy trình thực tế của doanh nghiệp.
          </p>
          <h2>Nguyên tắc biên tập</h2>
          <p>
            Ưu tiên nội dung có cấu trúc rõ ràng, giải thích ngắn gọn, tránh phóng đại và tách biệt quan điểm với dữ
            liệu. Mỗi bài viết đều được biên tập bởi đội ngũ có chuyên môn trong lĩnh vực tương ứng.
          </p>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">GIÁ TRỊ CỐT LÕI</span>
              <h2>MarTech vận hành như thế nào</h2>
            </div>
          </div>
          <div className="benefits-grid static-grid">
            {VALUES.map(([I, t, d]) => (
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">HÀNH TRÌNH</span>
              <h2>Các cột mốc của MarTech</h2>
            </div>
          </div>
          <div className="timeline">
            {MILESTONES.map(([y, t]) => (
              <div className="timeline-item" key={y}>
                <span className="timeline-year">{y}</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">ĐỘI NGŨ</span>
              <h2>Người đứng sau nội dung MarTech</h2>
            </div>
          </div>
          <div className="team-grid">
            {AUTHORS.map((a) => (
              <div className="team-card" key={a.name}>
                <img src={a.avatar} alt={a.name} />
                <b>{a.name}</b>
                <span>{a.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
