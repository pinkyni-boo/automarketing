# AutoMarketing PBN Pro - Next.js

## 1. Chạy local
```powershell
npm install
npm run dev
```
Mở: http://localhost:3000

## 2. Khi deploy VPS
- Push source lên GitHub private.
- Clone vào VPS.
- Tạo `.env.local` production, đổi `NEXT_PUBLIC_SITE_URL=https://subdomain.automarketing.app`
- `npm install && npm run build`
- Chạy bằng `npm start` hoặc PM2.
- Nginx reverse proxy về port 3000.
- Bật HTTPS/SSL.

## 3. Checklist Task 2
- Home / Dịch vụ / Blog / Liên hệ / Giới thiệu
- `robots.txt`
- `sitemap.xml`
- metadata SEO
- responsive
- ảnh/banner local trong `/public`
- 404

## Ghi chú
Dữ liệu blog hiện dùng bài mẫu trong `lib/posts.ts` để website chạy ngay. Nội dung blog được đăng qua công cụ ngoài dự án này.
