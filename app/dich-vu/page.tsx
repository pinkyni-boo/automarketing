import Link from 'next/link';
import { ArrowRight, Bot, ChartNoAxesCombined, CheckCircle2, Cpu, FileText, Search, Workflow } from 'lucide-react';

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

const SERVICES = [
  {
    icon: Bot,
    tag: 'CÔNG NGHỆ & AI',
    title: 'AI Automation',
    desc: 'Thiết kế workflow tự động hoá marketing và chăm sóc khách hàng bằng AI, giảm việc thủ công và tăng tốc vận hành.',
    includes: [
      'Xây dựng chatbot AI chăm sóc khách hàng 24/7 trên website & mạng xã hội',
      'Tự động hoá lead scoring và phân loại khách hàng tiềm năng',
      'Cá nhân hoá nội dung email marketing bằng AI',
      'Dashboard báo cáo tự động, cập nhật theo thời gian thực',
    ],
    fit: 'Phù hợp doanh nghiệp muốn giảm tải công việc lặp lại cho đội ngũ marketing & CSKH.',
  },
  {
    icon: ChartNoAxesCombined,
    tag: 'MARKETING',
    title: 'Performance Marketing',
    desc: 'Lập kế hoạch, quản lý ngân sách và tối ưu quảng cáo đa kênh theo dữ liệu, tập trung vào ROI thực tế.',
    includes: [
      'Lập kế hoạch & quản lý ngân sách quảng cáo Google, Meta, TikTok',
      'Thiết lập tracking, đo lường chuyển đổi chính xác',
      'Tối ưu A/B testing liên tục cho creative & targeting',
      'Báo cáo ROI minh bạch theo tuần, theo tháng',
    ],
    fit: 'Phù hợp doanh nghiệp cần tăng trưởng doanh số nhanh và đo lường được hiệu quả quảng cáo.',
  },
  {
    icon: FileText,
    tag: 'MARKETING',
    title: 'Content & SEO',
    desc: 'Xây dựng hệ thống nội dung chuẩn SEO có chủ đích, giúp tăng organic traffic và độ tin cậy thương hiệu bền vững.',
    includes: [
      'Xây dựng content pillar & topic cluster theo ngành',
      'Biên tập bài viết chuẩn SEO, đúng giọng điệu thương hiệu',
      'Lên kế hoạch xuất bản (editorial calendar) hàng tháng',
      'Đo lường hiệu quả nội dung theo traffic & tỉ lệ chuyển đổi',
    ],
    fit: 'Phù hợp doanh nghiệp muốn xây kênh organic bền vững thay vì phụ thuộc hoàn toàn vào quảng cáo trả phí.',
  },
  {
    icon: Search,
    tag: 'MARKETING',
    title: 'SEO Website',
    desc: 'Technical SEO, content SEO và tối ưu cấu trúc website để công cụ tìm kiếm hiểu và xếp hạng đúng giá trị nội dung.',
    includes: [
      'Audit kỹ thuật toàn diện (technical SEO audit)',
      'Nghiên cứu từ khoá và phân tích đối thủ cạnh tranh',
      'Tối ưu onpage, cấu trúc heading và liên kết nội bộ',
      'Theo dõi thứ hạng và báo cáo định kỳ hàng tháng',
    ],
    fit: 'Phù hợp website đã có nội dung nhưng chưa được tối ưu đúng cách để lên top tìm kiếm.',
  },
  {
    icon: Cpu,
    tag: 'CÔNG NGHỆ',
    title: 'Phát triển Web & Nền tảng',
    desc: 'Thiết kế và phát triển website tốc độ cao, chuẩn SEO ngay từ kiến trúc, dễ quản trị và mở rộng về sau.',
    includes: [
      'Thiết kế & phát triển website tốc độ cao, chuẩn SEO kỹ thuật',
      'Tích hợp hệ thống quản trị nội dung (CMS) dễ sử dụng',
      'Giám sát hiệu năng, bảo trì và vá bảo mật định kỳ',
      'Tư vấn lựa chọn hạ tầng/cloud phù hợp quy mô doanh nghiệp',
    ],
    fit: 'Phù hợp doanh nghiệp cần một nền tảng web ổn định làm gốc cho toàn bộ hoạt động marketing.',
  },
  {
    icon: Workflow,
    tag: 'VẬN HÀNH',
    title: 'Marketing Operations',
    desc: 'Chuẩn hoá quy trình, dashboard và phối hợp công cụ marketing để đội ngũ vận hành nhất quán, ít sai sót.',
    includes: [
      'Chuẩn hoá quy trình phối hợp giữa các phòng ban liên quan',
      'Xây dựng dashboard tổng hợp dữ liệu marketing tập trung',
      'Đào tạo đội ngũ sử dụng công cụ hiệu quả',
      'Tư vấn lựa chọn martech stack phù hợp ngân sách',
    ],
    fit: 'Phù hợp doanh nghiệp đang dùng nhiều công cụ rời rạc, cần một quy trình vận hành thống nhất.',
  },
];

const PROCESS = [
  ['01', 'Khảo sát & phân tích', 'Tìm hiểu mục tiêu, dữ liệu hiện có và điểm nghẽn trong vận hành marketing/công nghệ.'],
  ['02', 'Xây chiến lược', 'Đề xuất giải pháp phù hợp ngân sách, ưu tiên hạng mục tạo tác động rõ nhất trước.'],
  ['03', 'Triển khai', 'Thực thi theo mốc thời gian cụ thể, cập nhật tiến độ minh bạch theo tuần.'],
  ['04', 'Đo lường & tối ưu', 'Theo dõi chỉ số thực tế, điều chỉnh liên tục thay vì chỉ bàn giao rồi dừng lại.'],
] as const;

const PRICING = [
  {
    name: 'Starter',
    price: 'Từ 8.000.000đ',
    period: '/ tháng',
    desc: 'Cho doanh nghiệp nhỏ mới bắt đầu làm marketing bài bản.',
    features: ['1 nhóm dịch vụ (chọn 1 trong 6)', 'Báo cáo hiệu quả hàng tháng', 'Hỗ trợ qua email trong giờ hành chính'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'Từ 18.000.000đ',
    period: '/ tháng',
    desc: 'Kết hợp nhiều dịch vụ để tăng trưởng toàn diện hơn.',
    features: [
      'Tối đa 3 nhóm dịch vụ kết hợp',
      'Báo cáo hiệu quả hàng tuần',
      'Quản lý dự án riêng (dedicated PM)',
      'Ưu tiên hỗ trợ trong 4 giờ làm việc',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Liên hệ',
    period: 'báo giá',
    desc: 'Giải pháp trọn gói theo yêu cầu riêng của doanh nghiệp lớn.',
    features: [
      'Không giới hạn nhóm dịch vụ',
      'Đội ngũ chuyên trách theo dự án',
      'SLA hỗ trợ và bảo mật theo hợp đồng riêng',
      'Tư vấn chiến lược trực tiếp định kỳ',
    ],
    highlight: false,
  },
];

const FAQ = [
  ['Thời gian triển khai một dự án mất bao lâu?', 'Tuỳ phạm vi, thường 2–4 tuần cho giai đoạn khảo sát và chiến lược, sau đó triển khai theo mốc thời gian đã thống nhất, thường thấy kết quả rõ sau 2–3 tháng.'],
  ['Có cần ký hợp đồng dài hạn không?', 'Không bắt buộc. Gói Starter và Growth có thể theo tháng, huỷ hoặc điều chỉnh với thông báo trước theo thoả thuận.'],
  ['MarTech có báo cáo hiệu quả định kỳ không?', 'Có. Mỗi gói đều đi kèm báo cáo minh bạch theo tuần hoặc theo tháng, gồm số liệu thực tế và đề xuất tối ưu tiếp theo.'],
  ['Ai sẽ là người phụ trách dự án của tôi?', 'Mỗi dự án từ gói Growth trở lên đều có một quản lý dự án (PM) riêng làm đầu mối liên hệ xuyên suốt quá trình hợp tác.'],
];

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
          <div className="service-detail-list">
            {SERVICES.map((s, i) => (
              <div className="service-detail" key={s.title} data-reverse={i % 2 === 1 ? 'true' : undefined}>
                <div className="service-detail-icon">
                  <s.icon size={26} />
                </div>
                <div className="service-detail-body">
                  <span className="service-detail-tag">{s.tag}</span>
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                  <ul className="service-includes">
                    {s.includes.map((f) => (
                      <li key={f}>
                        <CheckCircle2 size={16} /> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="service-fit">{s.fit}</p>
                  <Link className="btn btn-primary" href="/lien-he">
                    Trao đổi nhu cầu <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
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
