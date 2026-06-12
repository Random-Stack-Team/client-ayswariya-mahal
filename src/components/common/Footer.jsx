import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import siteConfig from "../../config/site";
import logoImg from "../../assets/images/ayswariya-mahal-logo.webp";
import { useEnquiry } from "../../context/useEnquiry";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const venueHighlights = [
  "Weddings & receptions",
  "Premium dining halls",
  "Centralized air conditioning",
  "Sowbhagya mini hall",
];

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M14.2 8.3V6.9c0-.7.5-.9.9-.9h2.2V2.2L14.2 2C10.8 2 10 4.5 10 6.1v2.2H7.6v4H10V22h4.4v-9.7h3l.5-4h-3.7Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.1a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.9ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
    </svg>
  ),
};

function FooterHeading({ children }) {
  return (
    <h3 className="font-nav text-[13px] font-normal uppercase tracking-[0.18em] text-[#D4A843]">
      {children}
    </h3>
  );
}

export default function Footer() {
  const { openForm } = useEnquiry();
  const encodedAddress = encodeURIComponent(siteConfig.contact.address);

  return (
    <footer className="relative overflow-hidden bg-[#3F0C15] text-[#fdfbf7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(212,168,67,0.18),transparent_30%),linear-gradient(145deg,rgba(90,17,28,0.92),rgba(26,10,2,0.96))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-12 sm:px-8 md:py-14 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.9fr_1fr] lg:gap-12">
          <div>
            <Link to="/" className="inline-flex" aria-label="Ayswariya Mahal home">
              <img
                src={logoImg}
                alt="Ayswariya Mahal"
                loading="lazy"
                decoding="async"
                width="654"
                height="293"
                className="h-16 w-auto brightness-[1.26] contrast-[1.08] drop-shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
              />
            </Link>
            <p className="mt-5 max-w-sm font-body text-base leading-8 text-[#fdfbf7]/76">
              A refined wedding and event destination in Arumbakkam, Chennai, crafted for weddings,
              receptions, engagements, and family celebrations with graceful hospitality.
            </p>
            <button
              type="button"
              onClick={openForm}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4dc86_0%,#D4A843_55%,#B8860B_100%)] px-7 font-nav text-[13px] uppercase tracking-[0.12em] text-[#3F0C15] shadow-[0_16px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
            >
              Check Availability
            </button>
          </div>

          <div>
            <FooterHeading>Explore</FooterHeading>
            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-sm lg:grid-cols-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="min-h-12 font-body text-base leading-7 text-[#fdfbf7]/72 transition-colors duration-300 hover:text-[#D4A843]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <FooterHeading>Venue Highlights</FooterHeading>
            <ul className="mt-5 space-y-3">
              {venueHighlights.map((item) => (
                <li key={item} className="flex gap-3 font-body text-base leading-7 text-[#fdfbf7]/72">
                  <span className="mt-3 h-px w-5 shrink-0 bg-[#D4A843]/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/sowbhagya-mahal"
              className="mt-5 inline-flex min-h-12 items-center font-nav text-[13px] uppercase tracking-[0.14em] text-[#D4A843] transition-colors duration-300 hover:text-[#fdfbf7]"
            >
              View Sowbhagya Mahal
            </Link>
          </div>

          <div>
            <FooterHeading>Visit & Connect</FooterHeading>
            <div className="mt-5 space-y-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 gap-3 text-[#fdfbf7]/72 transition-colors duration-300 hover:text-[#D4A843]"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D4A843]" aria-hidden="true" />
                <span className="font-body text-base leading-7">{siteConfig.contact.address}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phonePrimary.replace(/\s/g, "")}`}
                className="flex min-h-12 items-center gap-3 font-body text-base text-[#fdfbf7]/72 transition-colors duration-300 hover:text-[#D4A843]"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#D4A843]" aria-hidden="true" />
                {siteConfig.contact.phonePrimary}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex min-h-12 items-center gap-3 font-body text-base text-[#fdfbf7]/72 transition-colors duration-300 hover:text-[#D4A843]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#D4A843]" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
              <div className="flex gap-3 font-body text-base leading-7 text-[#fdfbf7]/72">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#D4A843]" aria-hidden="true" />
                <span>{siteConfig.contact.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-[#D4A843]/18 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-sm leading-6 text-[#fdfbf7]/56">
            Copyright 2026 Ayswariya Mahal. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ayswariya Mahal on Facebook"
              className="grid h-12 w-12 place-items-center rounded-full border border-[#D4A843]/24 text-[#fdfbf7]/78 transition duration-300 hover:border-[#D4A843] hover:bg-[#D4A843] hover:text-[#3F0C15]"
            >
              {socialIcons.facebook}
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ayswariya Mahal on Instagram"
              className="grid h-12 w-12 place-items-center rounded-full border border-[#D4A843]/24 text-[#fdfbf7]/78 transition duration-300 hover:border-[#D4A843] hover:bg-[#D4A843] hover:text-[#3F0C15]"
            >
              {socialIcons.instagram}
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ayswariya Mahal on YouTube"
              className="grid h-12 w-12 place-items-center rounded-full border border-[#D4A843]/24 text-[#fdfbf7]/78 transition duration-300 hover:border-[#D4A843] hover:bg-[#D4A843] hover:text-[#3F0C15]"
            >
              {socialIcons.youtube}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
