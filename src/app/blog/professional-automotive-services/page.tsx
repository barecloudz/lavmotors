import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Discover Professional Automotive Services for Your Car",
  description:
    "Learn what it takes to keep your vehicle running smoothly and safely with professional auto services from LAV Motors in Hendersonville, NC.",
};

export default function BlogPost() {
  return (
    <main className="pt-20">
      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* Meta */}
        <div className="mt-8 flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            Nov 24, 2025
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            4 min read
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>LAV Motors</span>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Discover Professional Automotive Services for Your Car
        </h1>

        {/* Content */}
        <div className="prose-lav mt-12 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Owning a car is a great convenience, but keeping it in top shape
            requires more than just occasional washing and refueling. Have you
            ever wondered what it takes to keep your vehicle running smoothly
            and safely? The answer lies in trusting professional auto services
            that cover everything from routine maintenance to complex repairs.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Why Choose Professional Auto Services?
          </h2>
          <p>
            When it comes to your car, cutting corners is never a good idea.
            Professional auto services offer expertise, quality parts, and the
            latest diagnostic tools to ensure your vehicle performs at its best.
          </p>
          <ul className="space-y-3 pl-4">
            {[
              "Expert Technicians: Certified mechanics understand the intricacies of different car models. They can spot issues before they become costly problems.",
              "Comprehensive Care: From oil changes to brake repairs, professional shops provide a full range of services under one roof.",
              "Warranty Protection: Many repairs and parts come with warranties, giving you peace of mind.",
              "Safety Assurance: Proper maintenance means your car is safer to drive, protecting you and your passengers.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            What Services Should You Expect from a Full-Service Auto Care Center?
          </h2>
          <p>
            A full-service auto care center is your one-stop shop for all things
            automotive. Here&apos;s a breakdown of the essential services you
            should look for:
          </p>

          {[
            {
              title: "Routine Maintenance",
              body: "Regular oil changes, tire rotations, and fluid checks keep your car running efficiently. Skipping these can lead to engine wear and poor fuel economy.",
            },
            {
              title: "Brake Services",
              body: "Your brakes are critical for safety. Professional shops inspect brake pads, rotors, and fluid to ensure everything functions perfectly.",
            },
            {
              title: "Engine Diagnostics and Repairs",
              body: "Modern cars have complex computer systems. Professional diagnostic tools can quickly identify engine problems, saving you from guesswork.",
            },
            {
              title: "Tire Services",
              body: "Proper tire alignment, balancing, and replacement improve handling and fuel efficiency.",
            },
            {
              title: "Air Conditioning and Heating Repairs",
              body: "Stay comfortable year-round with professional HVAC system maintenance.",
            },
          ].map((s) => (
            <div key={s.title}>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1">{s.body}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-foreground">
            How to Identify a Reliable Auto Service Provider
          </h2>
          <ul className="space-y-3 pl-4">
            {[
              "Check Certifications: Look for ASE (Automotive Service Excellence) certifications or manufacturer training.",
              "Read Reviews: Customer feedback reveals the quality of service and customer care.",
              "Ask About Warranties: A reputable shop stands behind its work with guarantees.",
              "Get a Written Estimate: Transparency in pricing helps avoid surprises.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            The Benefits of Regular Maintenance and Timely Repairs
          </h2>
          <ul className="space-y-3 pl-4">
            {[
              "Improved Fuel Efficiency: Clean filters and properly inflated tires reduce fuel consumption.",
              "Extended Vehicle Life: Routine care prevents premature wear and costly breakdowns.",
              "Higher Resale Value: Well-maintained cars fetch better prices.",
              "Enhanced Safety: Functional brakes, tires, and lights protect you on the road.",
              "Reduced Emissions: Properly tuned engines produce fewer pollutants.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h2 className="text-xl font-bold text-foreground">
              Ready to Give Your Car the Care It Deserves?
            </h2>
            <p className="mt-3">
              Don&apos;t wait for a warning light or strange noise to take
              action. LAV Motors offers comprehensive automotive services tailored
              to keep your car in peak condition — with experienced technicians,
              transparent pricing, and flexible scheduling.
            </p>
            <a
              href="tel:+18289898985"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Call (828) 989-8985
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
