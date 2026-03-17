import { Star } from "lucide-react";

const reviews = [
  {
    name: "Андрей Хухрин",
    text: "Highly recommend this place if you're looking for quality work and fast service!",
    rating: 5,
  },
  {
    name: "Marshall Shields",
    text: "Fantastic service, and a comfortable waiting room with great coffee.",
    rating: 5,
  },
  {
    name: "Julie Gallagher",
    text: "Very comfortable waiting area with large TV and well stocked children's area.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            What Our Customers Say
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/50 text-yellow-400/50"}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.5</span>
            <span className="text-muted">from 100+ Google reviews</span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/30"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.name[0]}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
