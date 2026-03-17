import { Phone, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-surface-light p-12 text-center md:p-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Ready to Get Your Car
              <br />
              <span className="text-primary">Back on the Road?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              Stop by or give us a call. No appointment needed for most
              services. We&apos;re here to help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+18289898985"
                className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone size={20} />
                (828) 989-8985
              </a>
              <a
                href="https://maps.google.com/?q=1105+Spartanburg+Hwy+Hendersonville+NC+28792"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border bg-surface-light px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
