import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { UIPost } from '@/lib/content';

export default function PostNav({ prev, next }: { prev: UIPost | null; next: UIPost | null }) {
  if (!prev && !next) return null;
  return (
    <nav className="post-nav" aria-label="Điều hướng bài viết">
      {prev ? (
        <Link href={`/blog/${prev.slug}`} className="post-nav-item prev">
          <span className="post-nav-label">
            <ArrowLeft size={14} /> Bài viết trước
          </span>
          <b>{prev.title}</b>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/blog/${next.slug}`} className="post-nav-item next">
          <span className="post-nav-label">
            Bài viết kế tiếp <ArrowRight size={14} />
          </span>
          <b>{next.title}</b>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
