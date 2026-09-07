import { Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import SocialIcons from '@/components/SocialIcons';

export const metadata = {
  title: 'Liên hệ',
  description: 'Gửi thông tin để trao đổi về nội dung, hợp tác quảng cáo hoặc yêu cầu tư vấn dịch vụ cùng MarTech.',
  alternates: { canonical: '/lien-he' },
  openGraph: {
    title: 'Liên hệ | MarTech',
    description: 'Gửi thông tin để trao đổi về nội dung, hợp tác quảng cáo hoặc yêu cầu tư vấn dịch vụ cùng MarTech.',
    url: '/lien-he',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liên hệ | MarTech',
    description: 'Gửi thông tin để trao đổi về nội dung, hợp tác quảng cáo hoặc yêu cầu tư vấn dịch vụ cùng MarTech.',
  },
};

export default function Contact() {
  return (
    <main className="page">
      <section className="page-hero gradient">
        <div className="container">
          <span className="kicker">CONTACT</span>
          <h1>Liên hệ MarTech</h1>
          <p>Gửi thông tin để trao đổi về nội dung, hợp tác quảng cáo hoặc yêu cầu tư vấn dịch vụ.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="prose-card">
            <h2>Thông tin liên hệ</h2>
            <p>
              <MapPin size={16} /> 115 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP. Hồ Chí Minh, Việt Nam
            </p>
            <p>
              <Phone size={16} /> 0334 444 205
            </p>
            <p>
              <Mail size={16} /> hello@martech.aimarkee.com
            </p>
            <p>
              <PhoneCall size={16} /> Hotline đặt quảng cáo: 0334 444 205
            </p>
            <p><b>Thời gian phản hồi:</b> 1–2 ngày làm việc</p>
            <SocialIcons className="contact-socials" />
          </div>
          <form className="contact-form">
            <label>
              Họ tên
              <input placeholder="Nguyễn Văn A" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Nội dung
              <textarea rows={6} placeholder="Bạn muốn trao đổi điều gì?" />
            </label>
            <button className="btn btn-primary" type="button">
              Gửi liên hệ
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
