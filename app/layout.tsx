import './globals.css';import type { Metadata } from 'next';import SiteHeader from '@/components/SiteHeader';import SiteFooter from '@/components/SiteFooter';
export const metadata:Metadata={title:{default:'AutoMarketing | Marketing & AI Automation',template:'%s | AutoMarketing'},description:'Kiến thức Marketing, AI Automation, Content, SEO và tăng trưởng số.',metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
