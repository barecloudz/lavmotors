import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Marshall Shields",
    initials: "MS",
    text: "Fantastic service, and a comfortable waiting room with great coffee. The team was professional and got my car done faster than expected.",
    rating: 5,
  },
  {
    name: "Julie Gallagher",
    initials: "JG",
    text: "Very comfortable waiting area with large TV and well stocked children's area. I bring all my vehicles here — wouldn't go anywhere else.",
    rating: 5,
  },
  {
    name: "Andrey K.",
    initials: "AK",
    text: "Highly recommend this place if you're looking for quality work and fast service! Honest pricing and they explained everything clearly.",
    rating: 5,
  },
];

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted/20 text-muted/20"
          }
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What Our Customers Say
          </h2>

          {/* Google Rating */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-6 py-3">
            <StarRating rating={5} size={18} />
            <span className="text-base font-bold text-foreground">4.5</span>
            <span className="h-4 w-px bg-border" />
            <span className="text-sm text-muted">100+ Reviews on Google</span>
            <a
              href="https://maps.google.com/?q=LAV+Motors+1105+Spartanburg+Hwy+Hendersonville+NC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Review Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Decorative quote mark */}
              <div className="absolute right-6 top-4 text-7xl font-serif leading-none text-primary/8 select-none">
                &ldquo;
              </div>

              <StarRating rating={review.rating} />

              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted">Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
