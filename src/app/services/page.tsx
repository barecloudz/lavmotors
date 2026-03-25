import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "LAV Motors offers auto repair, tire sales, detailing, NC inspections, oil changes, wheel alignments, and more in Hendersonville, NC.",
};

export default function ServicesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lavmotors.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.lavmotors.com/services" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </h1>
            <p className="mt-3 text-5xl font-bold tracking-tight text-foreground">
              Everything Under One Roof
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Whether it&apos;s a routine oil change or a repair that&apos;s
              been keeping you up at night, our team has been handling it all
              right here in Hendersonville for over 30 years. Pick a service
              below to learn more.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon size={24} />
                  </div>
                  {service.price && (
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                      {service.price}
                    </span>
                  )}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-muted">
            Give us a call and describe what&apos;s going on. We&apos;ll point
            you in the right direction. No appointment needed for most services.
          </p>
          <a
            href="tel:+18289898985"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-dark"
          >
            <Phone size={20} />
            (828) 989-8985
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
