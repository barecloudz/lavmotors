import {
  Wrench,
  CircleDot,
  Sparkles,
  ClipboardCheck,
  Droplets,
  Gauge,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Wrench,
    title: "Auto Repair",
    description:
      "Complete engine diagnostics, brake repair, transmission service, and more from certified professionals.",
    highlight: false,
  },
  {
    icon: CircleDot,
    title: "Tires",
    description:
      "Full tire inventory in stock. Sales, mounting, balancing, rotation, and flat repair.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Auto Detailing",
    description:
      "Interior and exterior detailing to keep your vehicle looking showroom-new.",
    highlight: false,
  },
  {
    icon: ClipboardCheck,
    title: "NC State Inspection",
    description:
      "Official NC inspection station. Quick, affordable inspections starting at $13.60.",
    highlight: true,
  },
  {
    icon: Droplets,
    title: "Fluid Services",
    description:
      "Oil changes, coolant system flush, brake fluid flush, and all essential fluid maintenance.",
    highlight: false,
  },
  {
    icon: Gauge,
    title: "Wheel Alignment",
    description:
      "Precision wheel alignment to extend tire life and improve handling. Starting at $140.",
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            Our Services
          </p>
          <p className="mt-4 text-lg text-muted">
            Everything your car needs — all under one roof
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                service.highlight
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-surface"
              }`}
            >
              {service.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  Popular
                </div>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
