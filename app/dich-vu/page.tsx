import { Bot, ChartNoAxesCombined, FileText, Search, Workflow, ArrowRight } from 'lucide-react';import Link from 'next/link';
export const metadata={
  title:'Dịch vụ',
  description:'Các nhóm giải pháp Marketing & AI Automation: AI Automation, Performance Marketing, Content, SEO và Marketing Operations.',
  alternates:{canonical:'/dich-vu'},
  openGraph:{title:'Dịch vụ | AutoMarketing',description:'Các nhóm giải pháp Marketing & AI Automation: AI Automation, Performance Marketing, Content, SEO và Marketing Operations.',url:'/dich-vu',type:'website'},
  twitter:{card:'summary_large_image',title:'Dịch vụ | AutoMarketing',description:'Các nhóm giải pháp Marketing & AI Automation: AI Automation, Performance Marketing, Content, SEO và Marketing Operations.'},
};
const services=[[Bot,'AI Automation','Thiết kế workflow tự động hóa marketing, lead routing và chăm sóc khách hàng.'],[ChartNoAxesCombined,'Performance Marketing','Lập kế hoạch, tracking và tối ưu quảng cáo theo conversion.'],[FileText,'Content Marketing','Chiến lược nội dung đa kênh, editorial plan và hệ thống topic cluster.'],[Search,'SEO Website','Technical SEO, content SEO và tối ưu cấu trúc website.'],[Workflow,'Marketing Operations','Chuẩn hóa quy trình, dashboard và phối hợp công cụ marketing.']];
export default function Services(){return <main className="page"><section className="page-hero gradient"><div className="container"><span className="kicker">SERVICES</span><h1>Giải pháp Marketing & Automation</h1><p>Các nhóm dịch vụ mô phỏng cho website PBN theo đúng cấu trúc yêu cầu.</p></div></section><section className="section"><div className="container service-grid large">{services.map(([I,t,d]:any)=><div className="service-card" key={t}><span><I/></span><h3>{t}</h3><p>{d}</p><Link href="/lien-he">Trao đổi nhu cầu <ArrowRight size={16}/></Link></div>)}</div></section></main>}
