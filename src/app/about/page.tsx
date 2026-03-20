import type { Metadata } from "next";
import { Shield, Users, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about LAV Motors (Luxury Auto Vehicles), Hendersonville's trusted auto repair center with 30+ years of experience.",
};

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We explain every repair upfront. No hidden fees, no unnecessary work. Just honest automotive service.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our technicians bring 30+ years of combined experience. Extremely high level professionals in every area of auto care.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "We respect your time. Most services are completed same-day so you can get back on the road quickly.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "We stand behind our work. Every repair comes with our commitment to quality and customer satisfaction.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h1 className="text-sm font-semibold uppercase tracking-widest text-primary">
                About Us
              </h1>
              <p className="mt-3 text-5xl font-bold tracking-tight text-foreground">
                Luxury Auto Vehicles
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Welcome to LAV Motors, your complete auto repair center, tire
                dealer, and auto detailing center in Hendersonville, North
                Carolina.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From routine maintenance to complex repairs, our team of
                professionals with 30+ years of experience in the field are
                ready to help. Everything your car needs, in one building.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                As an official NC Inspection Station, we&apos;re proud to serve
                as a trusted resource for the Hendersonville community. Our
                commitment is simple: quality work, fair prices, and honest
                service.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-surface to-surface-light">
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                  <div className="text-8xl font-bold text-primary">30+</div>
                  <div className="mt-4 text-2xl font-semibold text-foreground">
                    Years of Experience
                  </div>
                  <div className="mt-2 text-muted">
                    Serving Hendersonville, NC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Values
            </h2>
            <p className="mt-3 text-4xl font-bold tracking-tight text-foreground">
              Why Choose LAV Motors
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon size={28} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-border bg-surface p-12 md:p-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Visit Our Shop
                </h2>
                <p className="mt-4 text-muted">
                  Located on Spartanburg Highway in Hendersonville, we&apos;re
                  easy to find and ready to serve you.
                </p>
                <div className="mt-8 space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Address
                    </div>
                    <div className="mt-1 text-muted">
                      1105 Spartanburg Hwy, Hendersonville, NC 28792
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Phone
                    </div>
                    <a
                      href="tel:+18289898985"
                      className="mt-1 text-primary hover:text-accent"
                    >
                      (828) 989-8985
                    </a>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Hours
                    </div>
                    <div className="mt-1 text-muted">
                      Mon–Fri: 8:00 AM – 7:00 PM
                      <br />
                      Sat: 8:00 AM – 5:00 PM
                      <br />
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=1105+Spartanburg+Hwy,+Hendersonville,+NC+28792&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LAV Motors Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
