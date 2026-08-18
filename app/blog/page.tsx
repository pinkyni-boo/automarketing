import PostCard from '@/components/PostCard';import { getAllPosts } from '@/lib/content';
export const metadata={title:'Blog'};
export const revalidate = 60;
export default async function Blog(){const posts = await getAllPosts();return <main className="page"><section className="page-hero"><div className="container"><span className="kicker">BLOG</span><h1>Marketing, AI & tăng trưởng số</h1><p>Nội dung thực tiễn, dễ áp dụng cho đội ngũ marketing và doanh nghiệp.</p></div></section><section className="section"><div className="container"><div className="post-grid blog-grid">{posts.map(p=><PostCard key={p.slug} post={p}/>)}</div></div></section></main>}
