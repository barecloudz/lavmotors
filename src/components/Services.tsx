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
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: ClipboardCheck,
    title: "NC State Inspection",
    description: "Official NC inspection station. Quick, reliable inspections.",
    price: "$13.60",
    highlight: true,
    image: null,
  },
  {
    icon: CircleDot,
    title: "Tires",
    description:
      "Full tire inventory in stock. Mounting, balancing, rotation, and flat repair.",
    price: "Varies by size",
    highlight: false,
    image: "/tires.avif",
  },
  {
    icon: Droplets,
    title: "Oil Change",
    description:
      "Conventional and synthetic oil changes with filter replacement and fluid top-off.",
    price: "From $85",
    highlight: false,
    image: "/oil-change.avif",
  },
  {
    icon: AlignCenter,
    title: "Wheel Alignment",
    description:
      "Precision alignment to extend tire life and improve handling.",
    price: "$140",
    highlight: false,
    image: "/car-alignment.avif",
  },
  {
    icon: Wrench,
    title: "Brake Service",
    description:
      "Brake pad, rotor, and fluid inspection and replacement by certified technicians.",
    price: "Variable",
    highlight: false,
    image: "/brake-service.avif",
  },
  {
    icon: Thermometer,
    title: "A/C Service",
    description:
      "Air conditioning inspection, recharge, and repair for year-round comfort.",
    price: "Variable",
    highlight: false,
    image: "/ac-services.avif",
  },
  {
    icon: CarFront,
    title: "Pre-Purchase Inspection",
    description:
      "Thorough inspection before you buy — know exactly what you're getting.",
    price: "$145",
    highlight: false,
    image: "/pre-purchase-inspection.avif",
  },
  {
    icon: Sparkles,
    title: "Diagnostic Check",
    description:
      "Advanced diagnostics to pinpoint issues before they become costly repairs.",
    price: "From $60",
    highlight: false,
    image: "/diagnostic-check.avif",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
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
                  {service.description}
                </p>

                <div className="mt-4 border-t border-border pt-4">
                  <span className="text-sm font-bold text-primary">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
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
