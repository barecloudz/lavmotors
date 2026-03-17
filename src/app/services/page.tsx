import type { Metadata } from "next";
import {
  Wrench,
  CircleDot,
  Sparkles,
  ClipboardCheck,
  Droplets,
  Gauge,
  Car,
  Cog,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "LAV Motors offers auto repair, tire sales, detailing, NC inspections, oil changes, wheel alignments, and more in Hendersonville, NC.",
};

const services = [
  {
    icon: Wrench,
    title: "Auto Repair",
    description:
      "From engine diagnostics to transmission service, our certified professionals handle all mechanical repairs. We use the latest diagnostic equipment to accurately identify and fix issues.",
    items: [
      "Engine Diagnostics & Repair",
      "Transmission Service",
      "Brake Repair & Replacement",
      "Suspension & Steering",
      "Electrical Systems",
      "AC & Heating Repair",
    ],
  },
  {
    icon: CircleDot,
    title: "Tire Sales & Service",
    description:
      "We keep a wide selection of tires in stock for all makes and models. Our tire services ensure your vehicle rides safely and smoothly.",
    items: [
      "New Tire Sales",
      "Tire Mounting & Balancing",
      "Tire Rotation",
      "Flat Tire Repair",
      "TPMS Service",
    ],
  },
  {
    icon: Sparkles,
    title: "Auto Detailing",
    description:
      "Professional interior and exterior detailing to restore your vehicle's appearance. From basic wash to full detail packages.",
    items: [
      "Exterior Wash & Wax",
      "Interior Deep Clean",
      "Paint Correction",
      "Ceramic Coating",
      "Headlight Restoration",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "NC State Inspections",
    price: "$13.60",
    description:
      "As an official NC inspection station, we provide quick and thorough state safety inspections. No appointment needed.",
    items: [
      "Safety Inspection",
      "Emissions Testing",
      "Quick Turnaround",
      "No Appointment Needed",
    ],
  },
  {
    icon: Droplets,
    title: "Fluid Services",
    description:
      "Regular fluid maintenance is critical for your vehicle's longevity. We offer complete fluid services at competitive prices.",
    items: [
      "Oil Change (from $85)",
      "Coolant System Flush",
      "Brake Fluid Flush",
      "Power Steering Flush",
      "Transmission Fluid Service",
    ],
  },
  {
    icon: Gauge,
    title: "Wheel Alignment",
    price: "$140",
    description:
      "Precision computerized wheel alignment to extend tire life, improve fuel economy, and ensure safe handling.",
    items: [
      "2-Wheel Alignment",
      "4-Wheel Alignment",
      "Alignment Check",
      "Steering Adjustment",
    ],
  },
  {
    icon: Car,
    title: "Consignment",
    description:
      "Looking to sell your vehicle? We offer consignment services to help you find a buyer with zero hassle.",
    items: [
      "Vehicle Listing",
      "Professional Photos",
      "Buyer Screening",
      "Paperwork Handling",
    ],
  },
  {
    icon: Cog,
    title: "General Maintenance",
    description:
      "Keep your vehicle running at peak performance with regular maintenance from our experienced technicians.",
    items: [
      "Scheduled Maintenance",
      "Belt & Hose Replacement",
      "Battery Testing & Replacement",
      "Wiper Blade Replacement",
      "Light Bulb Replacement",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </h1>
            <p className="mt-3 text-5xl font-bold tracking-tight text-foreground">
              Complete Auto Care
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              No matter what automotive service you require — from routine
              maintenance to complex repair — our team of professionals with 30+
              years of experience has you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon size={24} />
                  </div>
                  {service.price && (
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                      From {service.price}
                    </span>
                  )}
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Need a Service?
          </h2>
          <p className="mt-4 text-muted">
            Give us a call or stop by — no appointment needed for most services.
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
  );
}
