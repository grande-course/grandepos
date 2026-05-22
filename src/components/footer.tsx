import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Fitur", href: "#fitur" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo/grande-white.png"
              alt="Grande POS"
              width={160}
              height={48}
              className="mb-4 h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/60">
              Solusi aplikasi kasir serba bisa untuk berbagai usaha. Mudah
              digunakan, bisa diakses online dan offline.
            </p>
            <p className="mt-4 text-sm font-semibold text-gold">
              #GrandePosBisa!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <a
                  href="mailto:cs@grandepos.io"
                  className="text-sm text-white/60 transition-colors hover:text-gold-light"
                >
                  cs@grandepos.io
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <a
                  href="https://wa.me/6281230155775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-gold-light"
                >
                  +62 812 3015 5775
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm text-white/60">
                  PT Panca Logam Tirta Jaya
                  <br />
                  Darmo Bavarian C11, Surabaya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Grande POS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
