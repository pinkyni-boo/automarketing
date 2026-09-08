'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  src: string;
  fallback: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

// Bọc next/image: nếu ảnh thật (Unsplash...) tải lỗi thì tự rơi về ảnh local, không để vỡ layout.
export default function SafeImage({ src, fallback, alt, fill, sizes, className, priority }: Props) {
  const [current, setCurrent] = useState(src);

  // useState(src) chỉ nhận giá trị ban đầu — khi điều hướng phía client (Link) tái dùng
  // cùng một instance component ở cùng vị trí trong danh sách, prop `src` đổi nhưng state
  // cũ vẫn còn, khiến ảnh "kẹt" lại của bài trước dù nội dung bài đã đổi. Đồng bộ lại đây.
  useEffect(() => {
    setCurrent(src);
  }, [src]);

  const external = /^https?:\/\//.test(current);
  return (
    <Image
      src={current}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      priority={priority}
      unoptimized={external}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
