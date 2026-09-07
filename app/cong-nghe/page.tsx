import CategoryHub from '@/components/CategoryHub';
import { CATEGORY_GROUPS } from '@/lib/posts';

export const revalidate = 60;

export const metadata = {
  title: 'Công nghệ',
  description: 'Tin tức Công nghệ: AI, phần mềm, Internet và xu hướng công nghệ ứng dụng cho doanh nghiệp.',
  alternates: { canonical: '/cong-nghe' },
  openGraph: {
    title: 'Công nghệ | MarTech',
    description: 'Tin tức Công nghệ: AI, phần mềm, Internet và xu hướng công nghệ ứng dụng cho doanh nghiệp.',
    url: '/cong-nghe',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Công nghệ | MarTech',
    description: 'Tin tức Công nghệ: AI, phần mềm, Internet và xu hướng công nghệ ứng dụng cho doanh nghiệp.',
  },
};

export default function CongNghePage() {
  const group = CATEGORY_GROUPS.find((g) => g.slug === 'cong-nghe')!;
  return (
    <CategoryHub
      accent="tech"
      kicker="CÔNG NGHỆ"
      title="Công nghệ"
      subtitle="AI, phần mềm, Internet và xu hướng công nghệ ứng dụng cho doanh nghiệp — cập nhật dễ hiểu, có ví dụ thực tế."
      categories={group.categories}
      cta={{
        title: 'Cần một nền tảng công nghệ vững chắc?',
        desc: 'MarTech tư vấn phát triển web, tự động hoá AI và hạ tầng phù hợp quy mô doanh nghiệp của bạn.',
        href: '/dich-vu',
        label: 'Xem dịch vụ Công nghệ',
      }}
    />
  );
}
