import CategoryHub from '@/components/CategoryHub';
import { CATEGORY_GROUPS } from '@/lib/posts';

export const revalidate = 60;

export const metadata = {
  title: 'Marketing',
  description: 'Kiến thức Marketing: chiến lược, SEO, content và automation cho tăng trưởng bền vững.',
  alternates: { canonical: '/marketing' },
  openGraph: {
    title: 'Marketing | MarTech',
    description: 'Kiến thức Marketing: chiến lược, SEO, content và automation cho tăng trưởng bền vững.',
    url: '/marketing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing | MarTech',
    description: 'Kiến thức Marketing: chiến lược, SEO, content và automation cho tăng trưởng bền vững.',
  },
};

export default function MarketingPage() {
  const group = CATEGORY_GROUPS.find((g) => g.slug === 'marketing')!;
  return (
    <CategoryHub
      accent="mkt"
      kicker="MARKETING"
      title="Marketing"
      subtitle="Chiến lược marketing, SEO, content và automation cho tăng trưởng bền vững — thực tiễn, có số liệu, dễ áp dụng."
      categories={group.categories}
      cta={{
        title: 'Cần tăng trưởng marketing đo lường được?',
        desc: 'MarTech tư vấn Performance Marketing, Content & SEO phù hợp mục tiêu và ngân sách của doanh nghiệp bạn.',
        href: '/dich-vu',
        label: 'Xem dịch vụ Marketing',
      }}
    />
  );
}
