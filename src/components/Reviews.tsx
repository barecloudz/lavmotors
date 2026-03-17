import { Star, ExternalLink } from "lucide-react";

export function Reviews() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Google Reviews
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by Hendersonville
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Don&apos;t just take our word for it — see what our customers say on Google.
          </p>
        </div>

        {/* Rating badge */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface px-8 py-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">4.5</div>
              <div className="mt-1 flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < 4
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-yellow-400/40 text-yellow-400/40"
                    }
                  />
                ))}
              </div>
            </div>
            <div className="h-16 w-px bg-border" />
            <div>
              <div className="text-lg font-semibold text-foreground">100+ Reviews</div>
              <div className="text-sm text-muted">on Google Maps</div>
            </div>
          </div>
        </div>

        {/* CTA to Google */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.google.com/?q=LAV+Motors+1105+Spartanburg+Hwy+Hendersonville+NC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-light px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            Read Our Reviews on Google
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
