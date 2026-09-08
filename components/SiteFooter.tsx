import Link from 'next/link';
import { MapPin, Phone, Mail, PhoneCall } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import SocialIcons from '@/components/SocialIcons';
import BrandMark from '@/components/BrandMark';
import { fallbackFor } from '@/lib/fallback';
import { getAllPosts } from '@/lib/content';

export default async function SiteFooter() {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 3);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <div className="brand footer-brand">
            <BrandMark />
            <small>Công nghệ &amp; Marketing Insights</small>
          </div>
          <p>
            MarTech được thành lập năm 2022, là chuyên trang tin về công nghệ và marketing, đồng hành cùng hàng nghìn
            độc giả và doanh nghiệp trên hành trình chuyển đổi số.
          </p>
          <SocialIcons />
        </div>

        <div className="footer-col footer-links">
          <h4>Liên kết</h4>
          <div className="footer-links-grid">
            <div>
              <Link href="/">Trang chủ</Link>
              <Link href="/gioi-thieu">Giới thiệu</Link>
              <Link href="/dich-vu">Dịch vụ</Link>
              <Link href="/lien-he">Liên hệ</Link>
            </div>
            <div>
              <Link href="/cong-nghe">Tin công nghệ</Link>
              <Link href={`/blog?category=${encodeURIComponent('Trí tuệ nhân tạo')}`}>Trí tuệ nhân tạo</Link>
              <Link href="/marketing">Marketing</Link>
              <Link href="/blog?category=SEO">SEO</Link>
            </div>
          </div>
        </div>

        <div className="footer-col footer-recent">
          <h4>Bài viết mới</h4>
          {recent.map((p) => (
            <Link href={`/blog/${p.slug}`} key={p.slug} className="footer-recent-item">
              <span className="footer-recent-thumb">
                <SafeImage src={p.image} fallback={fallbackFor(p.slug)} alt={p.title} fill sizes="56px" />
              </span>
              <span>
                <b>{p.title}</b>
                <small>{p.date}</small>
              </span>
            </Link>
          ))}
        </div>

        <div className="footer-col footer-contact">
          <h4>Liên hệ</h4>
          <p>
            <MapPin size={15} /> 115 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP. Hồ Chí Minh, Việt Nam
          </p>
          <p>
            <Phone size={15} /> 0334 444 205
          </p>
          <p>
            <Mail size={15} /> hello@martech.aimarkee.com
          </p>
          <p className="footer-hotline">
            <PhoneCall size={15} /> Hotline đặt quảng cáo: 0334 444 205
          </p>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 MarTech · AI Marketee. All rights reserved.</div>
    </footer>
  );
}
