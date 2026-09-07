import Link from 'next/link';
import { ArrowRight, Clock, Eye } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import { fallbackFor } from '@/lib/fallback';
import { formatViews } from '@/lib/format';
import type { UIPost } from '@/lib/content';

export default function PostCard({ post }: { post: UIPost }) {
  return (
    <article className="post-card">
      <Link href={`/blog/${post.slug}`} className="post-image">
        <SafeImage src={post.image} fallback={fallbackFor(post.slug)} alt={post.title} fill sizes="(max-width:768px) 100vw, 33vw" />
        <span className="category-pill">{post.category}</span>
      </Link>
      <div className="post-body">
        <div className="post-meta">
          <span>{post.date}</span>
          <span>
            <Clock size={14} />
            {post.readTime}
          </span>
          <span>
            <Eye size={14} />
            {formatViews(post.views)}
          </span>
        </div>
        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <div className="post-card-foot">
          {post.author && <span className="post-author">{post.author}</span>}
          <Link className="read-more" href={`/blog/${post.slug}`}>
            Đọc thêm <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
