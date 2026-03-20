import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowLeft, ChevronDown } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.pas.hook.slice(0, 160),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "AutoRepair",
      name: "LAV Motors",
      telephone: "+18289898985",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1105 Spartanburg Hwy",
        addressLocality: "Hendersonville",
        addressRegion: "NC",
        postalCode: "28792",
        addressCountry: "US",
      },
      url: "https://www.lavmotors.com",
    },
    areaServed: {
      "@type": "City",
      name: "Hendersonville",
    },
    url: `https://www.lavmotors.com/services/${service.slug}`,
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="relative">
        {service.image ? (
          <div className="relative h-72 w-full overflow-hidden sm:h-96">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#f8f7f4]" />
            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 sm:px-10">
              <Link
                href="/services"
                className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ArrowLeft size={13} />
                All Services
              </Link>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                {service.title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="bg-surface px-6 py-16 sm:px-10">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/services"
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                <ArrowLeft size={14} />
                All Services
              </Link>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <service.icon size={32} />
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {service.title}
              </h1>
            </div>
          </div>
        )}
      </section>

      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        {/* Back link (when there's a hero image, show it below) */}
        {service.image && (
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} />
            All Services
          </Link>
        )}

        {/* Price + CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-5 py-2 text-base font-bold text-primary">
            {service.price}
          </span>
          <a
            href="tel:+18289898985"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
          >
            <Phone size={15} />
            Call to Book
          </a>
        </div>

        {/* PAS Section */}
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
          <p>{service.pas.hook}</p>
          <p>{service.pas.agitate}</p>
          <p className="font-medium text-foreground">{service.pas.solution}</p>
        </div>

        {/* How It Happens */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-foreground">
            Why This Happens
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {service.howItHappens}
          </p>
        </div>

        {/* How We Fix It */}
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            How We Fix It
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {service.howWeFix}
          </p>
        </div>

        {/* What's Included */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-foreground">
            What&apos;s Included
          </h2>
          <ul className="mt-5 space-y-3">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why LAV Motors */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-foreground">
            Why Drivers in Hendersonville Choose LAV Motors
          </h2>
          <ul className="mt-5 space-y-3">
            {service.whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-foreground">
            Common Questions
          </h2>
          <div className="mt-5 divide-y divide-border rounded-2xl border border-border">
            {service.faq.map((item) => (
              <details key={item.question} className="group px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
                  {item.question}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-muted transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Ready to Get It Fixed?
          </h3>
          <p className="mt-2 text-sm text-muted">
            Call us or stop by. No appointment needed for most services.
            We&apos;re on Spartanburg Hwy in Hendersonville.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+18289898985"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark sm:w-auto"
            >
              <Phone size={16} />
              (828) 989-8985
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 sm:w-auto"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
