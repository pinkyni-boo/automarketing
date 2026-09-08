'use client';
import { useEffect, useRef } from 'react';

// Hiệu ứng fade-in khi cuộn tới. Chỉ nên là hiệu ứng "cộng thêm" — nội dung phải luôn
// hiện ra dù IntersectionObserver trễ/không bắn kịp (hydrate chậm, cuộn nhanh qua khỏi
// vùng quan sát trước khi observer kịp gắn) hoặc trình duyệt không hỗ trợ. Vì vậy: kiểm
// tra vị trí ngay khi mount, và luôn có timeout dự phòng để không bao giờ bị kẹt opacity:0.
export default function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = r.current;
    if (!el) return;

    const reveal = () => el.classList.add('in');

    if (typeof IntersectionObserver === 'undefined') {
      reveal();
      return;
    }

    // Đã nằm trong (hoặc đã lướt qua) khung nhìn ngay khi mount — hiện luôn, không chờ observer.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.14 }
    );
    io.observe(el);

    // Lưới an toàn: nếu vì lý do gì đó observer không bắn kịp, vẫn đảm bảo nội dung hiện ra.
    const fallback = window.setTimeout(reveal, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={r} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
