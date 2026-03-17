import { Phone, ArrowRight, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const highlights = [
  "NC State Inspections — $13.60",
  "Oil Changes from $85",
  "Wheel Alignment — $140",
  "Full Detailing from $249",
  "Tires In Stock — All Sizes",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="bg-dot-grid absolute inset-0" />
      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-primary/6 blur-[140px]" />
      <div className="absolute -bottom-20 left-0 h-[500px] w-[500px] rounded-full bg-accent/4 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Official NC Inspection Station
            </div>

            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Expert Auto Care
              <br />
              <span className="text-gradient">You Can Trust</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              From routine oil changes to complex repairs — LAV Motors has been
              keeping Hendersonville on the road for over 30 years. All services
              under one roof.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+18289898985"
                className="flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
              >
                <Phone size={20} />
                (828) 989-8985
              </a>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2.5 rounded-full border border-border bg-surface-light px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-surface"
              >
                Our Services
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.5★</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Google Rating
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Happy Reviews
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info Card — desktop only */}
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-2xl shadow-black/40">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Hours of Operation
                  </div>
                  <div className="text-xs text-muted">Walk-ins welcome</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Open Now
                </div>
              </div>

              {/* Hours */}
              <div className="mb-6 space-y-2 rounded-2xl border border-border bg-surface-light p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Mon – Fri</span>
                  <span className="font-medium text-foreground">8AM – 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Saturday</span>
                  <span className="font-medium text-foreground">8AM – 5PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Sunday</span>
                  <span className="font-medium text-foreground/40">Closed</span>
                </div>
              </div>

              {/* Service highlights */}
              <div className="mb-6 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-primary" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>

              {/* Address + CTA */}
              <div className="rounded-2xl border border-border bg-surface-light p-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      1105 Spartanburg Hwy
                    </div>
                    <div className="text-xs text-muted">
                      Hendersonville, NC 28792
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=1105+Spartanburg+Hwy+Hendersonville+NC+28792"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-muted transition-all hover:border-primary/40 hover:text-foreground"
              >
                <MapPin size={15} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
