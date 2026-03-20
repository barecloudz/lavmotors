import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything your car needs, all under one roof.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all hover:shadow-xl hover:shadow-black/8 ${
                service.highlight
                  ? "border-primary/40 bg-white"
                  : "border-border bg-white hover:border-primary/30"
              }`}
            >
              {/* Image */}
              {service.image ? (
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ) : (
                <div className="flex h-44 w-full items-center justify-center bg-surface">
                  <service.icon size={40} className="text-primary/30" />
                </div>
              )}

              {service.highlight && (
                <div className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow">
                  Popular
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted">
                  {service.shortDescription}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-bold text-primary">
                    {service.price}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
          >
            Book a Service
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
