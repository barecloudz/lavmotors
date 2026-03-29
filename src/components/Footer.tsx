import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0d0b09]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="LAV Motors"
                width={140}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Your one-stop auto repair center with 30+ years of experience.
              Everything your car needs, all in one building.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "NC State Inspection", slug: "nc-state-inspection" },
                { label: "Tires", slug: "tires" },
                { label: "Oil Change", slug: "oil-change" },
                { label: "Wheel Alignment", slug: "wheel-alignment" },
                { label: "Brake Service", slug: "brake-service" },
                { label: "Diagnostic Check", slug: "diagnostic-check" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-white/50">
                  1105 Spartanburg Hwy
                  <br />
                  Hendersonville, NC 28792
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a
                  href="tel:+18289898985"
                  className="text-sm text-white/50 transition-colors hover:text-primary"
                >
                  (828) 989-8985
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-white/50">
                  Mon–Sat: 9AM – 7PM
                  <br />
                  Sun: 12PM – 7PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/30">
          &copy; {new Date().getFullYear()} LAV Motors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
