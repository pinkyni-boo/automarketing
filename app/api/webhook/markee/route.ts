import crypto from 'crypto';
import { addStoredPost, uniqueSlug } from '@/lib/postStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_SKEW_SECONDS = 300;

function parseSignatureHeader(header: string): { t?: string; v1?: string } {
  const parts: Record<string, string> = {};
  for (const chunk of header.split(',')) {
    const [key, value] = chunk.split('=');
    if (key && value) parts[key.trim()] = value.trim();
  }
  return parts;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} phút đọc`;
}

export async function POST(req: Request) {
  const secret = process.env.MARKEE_WEBHOOK_SECRET;
  if (!secret) {
    return Response.json({ error: 'Webhook chua duoc cau hinh' }, { status: 500 });
  }

  const rawBody = await req.text();
  const sigHeader = req.headers.get('x-markee-signature') || '';
  const { t, v1 } = parseSignatureHeader(sigHeader);

  if (!t || !v1) {
    return Response.json({ error: 'Thieu chu ky' }, { status: 401 });
  }

  const now = Math.floor(Date.now() / 1000);
  const timestamp = parseInt(t, 10);
  if (!Number.isFinite(timestamp) || Math.abs(now - timestamp) > MAX_SKEW_SECONDS) {
    return Response.json({ error: 'Request qua cu' }, { status: 401 });
  }

  const expected = crypto.createHmac('sha256', secret).update(`${t}.${rawBody}`).digest('hex');
  const expectedBuf = Buffer.from(expected, 'utf8');
  const givenBuf = Buffer.from(v1, 'utf8');
  const valid = expectedBuf.length === givenBuf.length && crypto.timingSafeEqual(expectedBuf, givenBuf);

  if (!valid) {
    return Response.json({ error: 'Chu ky khong hop le' }, { status: 401 });
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: 'Body khong phai JSON hop le' }, { status: 400 });
  }

  if (payload.event === 'test') {
    return Response.json({ ok: true }, { status: 200 });
  }

  if (payload.event === 'publish') {
    if (!payload.title || !payload.content) {
      return Response.json({ error: 'Thieu title hoac content' }, { status: 400 });
    }

    try {
      const slug = uniqueSlug(payload.slug || payload.title);
      const plainText = stripHtml(payload.content);
      const publishedAtISO = payload.published_at || new Date().toISOString();

      const stored = addStoredPost({
        slug,
        title: payload.title,
        contentHtml: payload.content,
        excerpt: payload.excerpt || plainText.slice(0, 160),
        category: Array.isArray(payload.tags) && payload.tags[0] ? payload.tags[0] : 'Blog',
        author: payload.author || undefined,
        featuredImageUrl: payload.featured_image_url || null,
        images: Array.isArray(payload.images) ? payload.images : [],
        videoUrl: payload.video_url || null,
        tags: Array.isArray(payload.tags) ? payload.tags : [],
        publishedAtISO,
        readTime: estimateReadTime(plainText),
      });

      const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      const url = `${base}/blog/${stored.slug}`;
      return Response.json({ url }, { status: 200 });
    } catch (err) {
      return Response.json({ error: 'Loi server tam thoi' }, { status: 500 });
    }
  }

  return Response.json({ error: 'event khong hop le' }, { status: 400 });
}
