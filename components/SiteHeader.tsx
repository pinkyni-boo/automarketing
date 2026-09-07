'use client';
import Link from 'next/link';
import { Menu, X, Search, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { CATEGORY_GROUPS } from '@/lib/posts';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <span className="brand-mark">M</span>
          <span>
            <b>MarTech</b>
            <small>Công nghệ &amp; Marketing Insights</small>
          </span>
        </Link>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <Link href="/" onClick={() => setOpen(false)}>
            Trang chủ
          </Link>
          {CATEGORY_GROUPS.map((g) => (
            <div className="nav-dropdown" key={g.group}>
              <Link href={`/blog?category=${encodeURIComponent(g.categories[0])}`} onClick={() => setOpen(false)}>
                {g.group} <ChevronDown size={13} />
              </Link>
              <div className="nav-dropdown-menu">
                {g.categories.map((c) => (
                  <Link key={c} href={`/blog?category=${encodeURIComponent(c)}`} onClick={() => setOpen(false)}>
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/dich-vu" onClick={() => setOpen(false)}>
            Dịch vụ
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/gioi-thieu" onClick={() => setOpen(false)}>
            Giới thiệu
          </Link>
          <Link href="/lien-he" onClick={() => setOpen(false)}>
            Liên hệ
          </Link>
        </nav>

        <div className="nav-actions">
          <div className={searchOpen ? 'header-search open' : 'header-search'}>
            <form action="/blog" method="get">
              <input type="text" name="q" placeholder="Tìm bài viết..." autoFocus={searchOpen} />
            </form>
          </div>
          <button className="icon-btn" aria-label="Tìm kiếm" onClick={() => setSearchOpen((v) => !v)}>
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          <Link href="/lien-he" className="btn btn-primary">
            <Sparkles size={16} /> Tư vấn
          </Link>
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
