import {
  Wrench,
  CircleDot,
  Sparkles,
  ClipboardCheck,
  Droplets,
  AlignCenter,
  CarFront,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: ClipboardCheck,
    title: "NC State Inspection",
    description: "Official NC inspection station. Quick, reliable inspections.",
    price: "$13.60",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Auto Repair",
    description:
      "Engine diagnostics, brakes, transmission, and all major repairs by certified technicians.",
    price: "Call for quote",
    highlight: false,
  },
  {
    icon: CircleDot,
    title: "Tires",
    description:
      "Full tire inventory in stock. Mounting, balancing, rotation, and flat repair.",
    price: "Varies by size",
    highlight: false,
  },
  {
    icon: Droplets,
    title: "Oil Change",
    description:
      "Conventional and synthetic oil changes with filter replacement and fluid top-off.",
    price: "From $85",
    highlight: false,
  },
  {
    icon: AlignCenter,
    title: "Wheel Alignment",
    description:
      "Precision alignment using advanced equipment to extend tire life and improve handling.",
    price: "$140",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Auto Detailing",
    description:
      "Interior and exterior detailing to keep your vehicle looking showroom-new.",
    price: "From $249",
    highlight: false,
  },
  {
    icon: Thermometer,
    title: "A/C Service",
    description:
      "Air conditioning inspection, recharge, and repair to keep you comfortable year-round.",
    price: "Variable",
    highlight: false,
  },
  {
    icon: CarFront,
    title: "Pre-Purchase Inspection",
    description:
      "Thorough inspection before you buy — know exactly what you're getting.",
    price: "$145",
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything your car needs — all under one roof
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:shadow-xl hover:shadow-primary/5 ${
                service.highlight
                  ? "border-primary/40 bg-primary/5 hover:border-primary/60"
                  : "border-border bg-surface hover:border-primary/30"
              }`}
            >
              {service.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  Popular
                </div>
              )}

              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-all group-hover:scale-110 ${
                  service.highlight
                    ? "bg-primary/20 text-primary"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                }`}
              >
                <service.icon size={22} />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <div className="mt-4 border-t border-border pt-4">
                <span
                  className={`text-sm font-bold ${service.highlight ? "text-primary" : "text-foreground"}`}
                >
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-light px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-surface"
          >
            Book a Service
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
