'use client';
import Image from 'next/image';
import { useState } from 'react';

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
