export const metadata={
  title:'Liên hệ',
  description:'Gửi thông tin để trao đổi về nội dung, hợp tác hoặc yêu cầu tư vấn cùng AutoMarketing.',
  alternates:{canonical:'/lien-he'},
  openGraph:{title:'Liên hệ | AutoMarketing',description:'Gửi thông tin để trao đổi về nội dung, hợp tác hoặc yêu cầu tư vấn cùng AutoMarketing.',url:'/lien-he',type:'website'},
  twitter:{card:'summary_large_image',title:'Liên hệ | AutoMarketing',description:'Gửi thông tin để trao đổi về nội dung, hợp tác hoặc yêu cầu tư vấn cùng AutoMarketing.'},
};
export default function Contact(){return <main className="page"><section className="page-hero gradient"><div className="container"><span className="kicker">CONTACT</span><h1>Liên hệ AutoMarketing</h1><p>Gửi thông tin để trao đổi về nội dung, hợp tác hoặc yêu cầu tư vấn.</p></div></section><section className="section"><div className="container contact-grid"><div className="prose-card"><h2>Thông tin</h2><p><b>Email:</b> hello@automarketing.app</p><p><b>Khu vực:</b> TP. Hồ Chí Minh, Việt Nam</p><p><b>Thời gian phản hồi:</b> 1–2 ngày làm việc</p></div><form className="contact-form"><label>Họ tên<input placeholder="Nguyễn Văn A"/></label><label>Email<input type="email" placeholder="you@example.com"/></label><label>Nội dung<textarea rows={6} placeholder="Bạn muốn trao đổi điều gì?"/></label><button className="btn btn-primary" type="button">Gửi liên hệ</button></form></div></section></main>}
