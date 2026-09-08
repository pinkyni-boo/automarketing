'use client';
import Link from 'next/link';
import { Menu, X, Search, Sparkles, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CATEGORY_GROUPS } from '@/lib/posts';
import BrandMark from '@/components/BrandMark';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);

  const toggleGroup = (group: string) => setOpenGroup((prev) => (prev === group ? null : group));
  const closeAll = () => {
    setOpenGroup(null);
    setOpen(false);
  };

  // Đóng dropdown khi bấm ra ngoài — không đóng theo mouseleave nữa vì khoảng
  // cách nhỏ giữa nút và menu khiến chuột "rời hover" trước khi kịp bấm vào bên trong.
  useEffect(() => {
    if (!openGroup) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [openGroup]);

  // Ô tìm kiếm trên header: đóng khi bấm ra ngoài hoặc nhấn Esc — panel nổi
  // (position:absolute) nên không đẩy lệch các nút khác trong header nữa.
  useEffect(() => {
    if (!searchOpen) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [searchOpen]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <BrandMark />
          <span>
            <b>MarTech</b>
            <small>Công nghệ &amp; Marketing Insights</small>
          </span>
        </Link>

        <nav className={open ? 'nav-links open' : 'nav-links'} ref={navRef}>
          <form action="/blog" method="get" className="mobile-search">
            <input type="text" name="q" placeholder="Tìm bài viết..." />
            <button type="submit" aria-label="Tìm kiếm">
              <Search size={16} />
            </button>
          </form>
          <Link href="/" onClick={closeAll}>
            Trang chủ
          </Link>
          {CATEGORY_GROUPS.map((g) => (
            <div className={openGroup === g.group ? 'nav-dropdown open' : 'nav-dropdown'} key={g.group}>
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={openGroup === g.group}
                onClick={() => toggleGroup(g.group)}
              >
                {g.group} <ChevronDown size={13} />
              </button>
              <div className="nav-dropdown-menu">
                <Link href={`/${g.slug}`} onClick={closeAll} className="nav-dropdown-all">
                  Xem tất cả {g.group}
                </Link>
                {g.categories.map((c) => (
                  <Link key={c} href={`/blog?category=${encodeURIComponent(c)}`} onClick={closeAll}>
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/dich-vu" onClick={closeAll}>
            Dịch vụ
          </Link>
          <Link href="/blog" onClick={closeAll}>
            Blog
          </Link>
          <Link href="/gioi-thieu" onClick={closeAll}>
            Giới thiệu
          </Link>
          <Link href="/lien-he" onClick={closeAll}>
            Liên hệ
          </Link>
        </nav>

        <div className="nav-actions" ref={actionsRef}>
          <div className={searchOpen ? 'header-search open' : 'header-search'}>
            <form action="/blog" method="get">
              <input type="text" name="q" placeholder="Tìm bài viết..." autoFocus={searchOpen} />
              <button type="submit" aria-label="Tìm kiếm">
                <Search size={15} />
              </button>
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
