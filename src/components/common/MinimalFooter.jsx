import { Link } from "react-router-dom";
import logoImg from "../../assets/images/ayswariya-mahal-logo.webp";
import FooterCredit from "./FooterCredit";

const minimalLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export default function MinimalFooter() {
  return (
    <footer className="relative overflow-x-hidden bg-[#3F0C15] text-[#fdfbf7] md:overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(212,168,67,0.14),transparent_30%),linear-gradient(145deg,rgba(90,17,28,0.94),rgba(26,10,2,0.96))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-8 sm:px-8 md:py-[calc(2.25rem+env(safe-area-inset-bottom))] lg:px-12">
        <div className="grid items-center gap-7 text-center xl:grid-cols-[1fr_auto_1fr] xl:text-left">
          <nav className="order-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 xl:order-1 xl:justify-start">
            {minimalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="min-h-11 font-sans text-[12px] font-medium uppercase tracking-[0.13em] text-[#fdfbf7]/66 transition-colors duration-300 hover:text-[#D4A843]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="order-1 flex flex-col items-center gap-3 xl:order-2">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent xl:hidden" />
          <Link to="/" className="inline-flex" aria-label="Ayswariya Mahal home">
            <img
              src={logoImg}
              alt="Ayswariya Mahal"
              loading="lazy"
              decoding="async"
              width="400"
              height="180"
              className="max-h-[42px] w-auto brightness-[1.26] contrast-[1.08] drop-shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
            />
          </Link>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent xl:hidden" />
        </div>

          <FooterCredit className="order-3 xl:text-right" />
        </div>
      </div>
    </footer>
  );
}
