export default function PremiumImageFrame({
  children,
  className = "",
  soft = true,
  banner = true,
  overlay = true,
}) {
  const frameClasses = [
    "luxury-image-frame",
    soft ? "luxury-image-frame--soft" : "",
    banner ? "luxury-image-frame--banner" : "",
    overlay ? "luxury-image-overlay" : "",
    "group",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={frameClasses}>
      {children}

      <span className="pointer-events-none absolute left-4 top-4 z-[4] h-7 w-7 border-l border-t border-[#E5C76B]/55" />
      <span className="pointer-events-none absolute bottom-4 right-4 z-[4] h-7 w-7 border-b border-r border-[#E5C76B]/55" />
    </div>
  );
}
