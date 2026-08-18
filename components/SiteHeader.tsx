'use client';
import Link from 'next/link';
import { Menu, X, Search, Sparkles } from 'lucide-react';
import { useState } from 'react';
export default function SiteHeader(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="container nav"><Link className="brand" href="/"><span className="brand-mark">M</span><span><b>AutoMarketing</b><small>Marketing & AI Automation</small></span></Link><nav className={open?'nav-links open':'nav-links'}><Link href="/">Trang chủ</Link><Link href="/dich-vu">Dịch vụ</Link><Link href="/blog">Blog</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/lien-he">Liên hệ</Link></nav><div className="nav-actions"><button className="icon-btn" aria-label="Tìm kiếm"><Search size={18}/></button><Link href="/lien-he" className="btn btn-primary"><Sparkles size={16}/> Tư vấn</Link><button className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div></header>}
