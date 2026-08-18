'use client';
import { useEffect,useRef } from 'react';
export default function Reveal({children,className=''}:{children:React.ReactNode,className?:string}){const r=useRef<HTMLDivElement>(null);useEffect(()=>{const el=r.current;if(!el)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('in');io.disconnect()}},{threshold:.14});io.observe(el);return()=>io.disconnect()},[]);return <div ref={r} className={`reveal ${className}`}>{children}</div>}
