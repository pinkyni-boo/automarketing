import { Bot, ChartNoAxesCombined, Cpu, FileText, Search, Workflow, type LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  includes: string[];
  fit: string;
  // Danh mục blog liên quan — dùng để gợi ý bài viết đọc thêm trên trang chi tiết dịch vụ.
  relatedCategories: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'ai-automation',
    icon: Bot,
    tag: 'CÔNG NGHỆ & AI',
    title: 'AI Automation',
    desc: 'Thiết kế workflow tự động hoá marketing và chăm sóc khách hàng bằng AI, giảm việc thủ công và tăng tốc vận hành.',
    includes: [
      'Xây dựng chatbot AI chăm sóc khách hàng 24/7 trên website & mạng xã hội',
      'Tự động hoá lead scoring và phân loại khách hàng tiềm năng',
      'Cá nhân hoá nội dung email marketing bằng AI',
      'Dashboard báo cáo tự động, cập nhật theo thời gian thực',
      'Tích hợp AI vào quy trình CSKH hiện có, không cần đổi hệ thống gốc',
      'Đào tạo đội ngũ vận hành và giám sát chatbot sau triển khai',
    ],
    fit: 'Phù hợp doanh nghiệp muốn giảm tải công việc lặp lại cho đội ngũ marketing & CSKH.',
    relatedCategories: ['Trí tuệ nhân tạo', 'Automation'],
  },
  {
    slug: 'performance-marketing',
    icon: ChartNoAxesCombined,
    tag: 'MARKETING',
    title: 'Performance Marketing',
    desc: 'Lập kế hoạch, quản lý ngân sách và tối ưu quảng cáo đa kênh theo dữ liệu, tập trung vào ROI thực tế.',
    includes: [
      'Lập kế hoạch & quản lý ngân sách quảng cáo Google, Meta, TikTok',
      'Thiết lập tracking, đo lường chuyển đổi chính xác',
      'Tối ưu A/B testing liên tục cho creative & targeting',
      'Báo cáo ROI minh bạch theo tuần, theo tháng',
      'Nghiên cứu và phân tích đối thủ cạnh tranh trước khi lên chiến dịch',
      'Tối ưu landing page để tăng tỉ lệ chuyển đổi từ quảng cáo',
    ],
    fit: 'Phù hợp doanh nghiệp cần tăng trưởng doanh số nhanh và đo lường được hiệu quả quảng cáo.',
    relatedCategories: ['Marketing'],
  },
  {
    slug: 'content-seo',
    icon: FileText,
    tag: 'MARKETING',
    title: 'Content & SEO',
    desc: 'Xây dựng hệ thống nội dung chuẩn SEO có chủ đích, giúp tăng organic traffic và độ tin cậy thương hiệu bền vững.',
    includes: [
      'Xây dựng content pillar & topic cluster theo ngành',
      'Biên tập bài viết chuẩn SEO, đúng giọng điệu thương hiệu',
      'Lên kế hoạch xuất bản (editorial calendar) hàng tháng',
      'Đo lường hiệu quả nội dung theo traffic & tỉ lệ chuyển đổi',
      'Audit nội dung hiện có, đề xuất cải thiện hoặc gộp bài trùng chủ đề',
      'Tối ưu định dạng nội dung cho từng kênh phân phối (blog, email, social)',
    ],
    fit: 'Phù hợp doanh nghiệp muốn xây kênh organic bền vững thay vì phụ thuộc hoàn toàn vào quảng cáo trả phí.',
    relatedCategories: ['Content Marketing', 'SEO'],
  },
  {
    slug: 'seo-website',
    icon: Search,
    tag: 'MARKETING',
    title: 'SEO Website',
    desc: 'Technical SEO, content SEO và tối ưu cấu trúc website để công cụ tìm kiếm hiểu và xếp hạng đúng giá trị nội dung.',
    includes: [
      'Audit kỹ thuật toàn diện (technical SEO audit)',
      'Nghiên cứu từ khoá và phân tích đối thủ cạnh tranh',
      'Tối ưu onpage, cấu trúc heading và liên kết nội bộ',
      'Theo dõi thứ hạng và báo cáo định kỳ hàng tháng',
      'Tối ưu tốc độ tải trang và trải nghiệm trên thiết bị di động',
      'Xây dựng chiến lược backlink chất lượng, an toàn với thuật toán',
    ],
    fit: 'Phù hợp website đã có nội dung nhưng chưa được tối ưu đúng cách để lên top tìm kiếm.',
    relatedCategories: ['SEO'],
  },
  {
    slug: 'phat-trien-web',
    icon: Cpu,
    tag: 'CÔNG NGHỆ',
    title: 'Phát triển Web & Nền tảng',
    desc: 'Thiết kế và phát triển website tốc độ cao, chuẩn SEO ngay từ kiến trúc, dễ quản trị và mở rộng về sau.',
    includes: [
      'Thiết kế & phát triển website tốc độ cao, chuẩn SEO kỹ thuật',
      'Tích hợp hệ thống quản trị nội dung (CMS) dễ sử dụng',
      'Giám sát hiệu năng, bảo trì và vá bảo mật định kỳ',
      'Tư vấn lựa chọn hạ tầng/cloud phù hợp quy mô doanh nghiệp',
      'Tích hợp thanh toán, CRM và các công cụ marketing đang dùng',
      'Xây dựng quy trình sao lưu và khôi phục dữ liệu tự động',
    ],
    fit: 'Phù hợp doanh nghiệp cần một nền tảng web ổn định làm gốc cho toàn bộ hoạt động marketing.',
    relatedCategories: ['Công nghệ', 'Phần mềm', 'Internet'],
  },
  {
    slug: 'marketing-operations',
    icon: Workflow,
    tag: 'VẬN HÀNH',
    title: 'Marketing Operations',
    desc: 'Chuẩn hoá quy trình, dashboard và phối hợp công cụ marketing để đội ngũ vận hành nhất quán, ít sai sót.',
    includes: [
      'Chuẩn hoá quy trình phối hợp giữa các phòng ban liên quan',
      'Xây dựng dashboard tổng hợp dữ liệu marketing tập trung',
      'Đào tạo đội ngũ sử dụng công cụ hiệu quả',
      'Tư vấn lựa chọn martech stack phù hợp ngân sách',
      'Thiết lập quy trình phê duyệt nội dung và ngân sách rõ ràng',
      'Đánh giá định kỳ hiệu quả công cụ đang dùng, đề xuất cắt giảm nếu dư thừa',
    ],
    fit: 'Phù hợp doanh nghiệp đang dùng nhiều công cụ rời rạc, cần một quy trình vận hành thống nhất.',
    relatedCategories: ['Automation', 'Marketing'],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const PROCESS = [
  ['01', 'Khảo sát & phân tích', 'Tìm hiểu mục tiêu, dữ liệu hiện có và điểm nghẽn trong vận hành marketing/công nghệ.'],
  ['02', 'Xây chiến lược', 'Đề xuất giải pháp phù hợp ngân sách, ưu tiên hạng mục tạo tác động rõ nhất trước.'],
  ['03', 'Triển khai', 'Thực thi theo mốc thời gian cụ thể, cập nhật tiến độ minh bạch theo tuần.'],
  ['04', 'Đo lường & tối ưu', 'Theo dõi chỉ số thực tế, điều chỉnh liên tục thay vì chỉ bàn giao rồi dừng lại.'],
] as const;

export const PRICING = [
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

export const FAQ = [
  ['Thời gian triển khai một dự án mất bao lâu?', 'Tuỳ phạm vi, thường 2–4 tuần cho giai đoạn khảo sát và chiến lược, sau đó triển khai theo mốc thời gian đã thống nhất, thường thấy kết quả rõ sau 2–3 tháng.'],
  ['Có cần ký hợp đồng dài hạn không?', 'Không bắt buộc. Gói Starter và Growth có thể theo tháng, huỷ hoặc điều chỉnh với thông báo trước theo thoả thuận.'],
  ['MarTech có báo cáo hiệu quả định kỳ không?', 'Có. Mỗi gói đều đi kèm báo cáo minh bạch theo tuần hoặc theo tháng, gồm số liệu thực tế và đề xuất tối ưu tiếp theo.'],
  ['Ai sẽ là người phụ trách dự án của tôi?', 'Mỗi dự án từ gói Growth trở lên đều có một quản lý dự án (PM) riêng làm đầu mối liên hệ xuyên suốt quá trình hợp tác.'],
] as const;
