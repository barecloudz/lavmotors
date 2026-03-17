import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
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
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Your one-stop auto repair center with 30+ years of experience.
              Everything your car needs, all in one building.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
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
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Auto Repair",
                "Tire Sales & Service",
                "Auto Detailing",
                "NC State Inspections",
                "Oil Changes",
                "Wheel Alignments",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted">
                  1105 Spartanburg Hwy
                  <br />
                  Hendersonville, NC 28792
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a
                  href="tel:+18289898985"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  (828) 989-8985
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted">
                  Mon–Fri: 8AM – 7PM
                  <br />
                  Sat: 8AM – 5PM
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} LAV Motors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
