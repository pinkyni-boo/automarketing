// Icon logo — crop từ public/logo.png, chỉ lấy phần icon (bỏ chữ "MarTech"/tagline
// trong ảnh vì trang đã có chữ "MarTech" riêng, kiểu chữ rõ ràng hơn, đặt cạnh icon).
// Chỉnh kích thước/crop ở ngay đây, dùng chung cho cả header (SiteHeader) và footer (SiteFooter).
const LOGO_WIDTH = 45;
const LOGO_HEIGHT = 35;
const LOGO_ZOOM_X = 115; // %
const LOGO_ZOOM_Y = 140; // %
const LOGO_POS_X = 44; // %
const LOGO_POS_Y = 10; // %

export default function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
        backgroundImage: "url('/logo.png')",
        backgroundSize: `${LOGO_ZOOM_X}% ${LOGO_ZOOM_Y}%`,
        backgroundPosition: `${LOGO_POS_X}% ${LOGO_POS_Y}%`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
