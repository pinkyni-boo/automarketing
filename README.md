# AutoMarketing PBN Pro - Next.js + Sanity

## 1. Chạy local
```powershell
npm install
npm run dev
```
Mở: http://localhost:3000

## 2. Bật Sanity CMS
1. Tạo project tại https://www.sanity.io/manage
2. Copy `.env.example` -> `.env.local`
3. Điền:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2024-08-01
```
4. Restart `npm run dev`
5. Mở http://localhost:3000/studio
6. Trong Sanity Manage -> API -> CORS origins, thêm `http://localhost:3000` và cho phép credentials.

## 3. Khi deploy VPS
- Push source lên GitHub private.
- Clone vào VPS.
- Tạo `.env.local` production, đổi `NEXT_PUBLIC_SITE_URL=https://subdomain.automarketing.app`
- `npm install && npm run build`
- Chạy bằng `npm start` hoặc PM2.
- Nginx reverse proxy về port 3000.
- Bật HTTPS/SSL.
- Thêm domain production vào Sanity CORS.

## 4. Checklist Task 2
- Home / Dịch vụ / Blog / Liên hệ / Giới thiệu
- CMS tại `/studio`
- `robots.txt`
- `sitemap.xml`
- metadata SEO
- responsive
- ảnh/banner local trong `/public`
- 404

## Ghi chú
Dữ liệu blog hiện dùng bài mẫu để website chạy ngay. Schema Sanity đã có sẵn để quản trị bài thật. Có thể nối query Sanity vào frontend khi team bắt đầu nhập content production.
