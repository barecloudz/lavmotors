import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Official NC Inspection Station
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Expert Auto Care
            <br />
            <span className="text-primary">You Can Trust</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            From routine maintenance to complex repairs — LAV Motors has been
            keeping Hendersonville on the road for over 30 years. All services
            under one roof.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+18289898985"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone size={20} />
              Call Now
            </a>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-surface-light px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
            >
              View Services
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="mt-1 text-sm text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.5</div>
              <div className="mt-1 text-sm text-muted">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="mt-1 text-sm text-muted">Happy Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
