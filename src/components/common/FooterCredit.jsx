export default function FooterCredit({ brand = "Ayswariya Mahal", className = "" }) {
  return (
    <div className={`space-y-1 font-body text-sm leading-6 text-[#fdfbf7]/58 ${className}`}>
      <p>Copyright 2026 {brand}. All Rights Reserved.</p>
      <p className="text-[12px] uppercase tracking-[0.14em] text-[#fdfbf7]/46">
        Crafted by <span className="text-[#D4A843]/82">Random Stack Technologies</span>
      </p>
    </div>
  );
}
