// Logo đầy đủ (icon + chữ "MarTech") từ public/logo.png — hiện nguyên khối, không crop.
// Chỉnh kích thước ở ngay đây, dùng chung cho cả header (SiteHeader) và footer (SiteFooter).
const LOGO_WIDTH = 56;
const LOGO_HEIGHT = 48;

export default function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        flex: '0 0 auto',
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
        backgroundImage: "url('/logo.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
