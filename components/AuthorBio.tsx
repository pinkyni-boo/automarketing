import { AUTHORS } from '@/lib/posts';

// Khối "Về tác giả" cuối bài viết — tăng độ tin cậy/chiều sâu cho từng bài, giống các trang tin thật.
export default function AuthorBio({ author }: { author?: string }) {
  const info = AUTHORS.find((a) => a.name === author);
  if (!info) return null;

  return (
    <div className="author-bio">
      <img src={info.avatar} alt={info.name} />
      <div>
        <span className="author-bio-label">Về tác giả</span>
        <b>{info.name}</b>
        <span className="author-bio-role">{info.role}</span>
        <p>{info.bio}</p>
      </div>
    </div>
  );
}
