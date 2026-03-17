"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Discover Professional Automotive Services for Your Car",
    date: "Nov 24, 2025",
    readTime: "4 min read",
    excerpt:
      "Owning a car requires more than occasional washing and refueling. Learn what it takes to keep your vehicle running smoothly and safely with professional auto services.",
    slug: "/blog/professional-automotive-services",
  },
  {
    title: "Enhance Your Ride with Professional Automotive Services",
    date: "Nov 10, 2025",
    readTime: "3 min read",
    excerpt:
      "Whether you need routine maintenance or a major repair, expert care can make all the difference. Discover how professional services keep your vehicle in peak condition.",
    slug: "/blog/enhance-your-ride",
  },
  {
    title: "Expert Wheel and Tire Services for Your Vehicle",
    date: "Nov 10, 2025",
    readTime: "4 min read",
    excerpt:
      "Your tires are the only parts of your vehicle that touch the road. Learn how expert wheel and tire care ensures safety, performance, and peace of mind on every drive.",
    slug: "/blog/wheel-and-tire-services",
  },
];

export function BlogSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? posts.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === posts.length - 1 ? 0 : c + 1));

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              From the Blog
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Latest Updates
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous post"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-muted shadow-sm transition-all hover:border-primary/40 hover:text-foreground"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next post"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-muted shadow-sm transition-all hover:border-primary/40 hover:text-foreground"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => {
            const isActive = i === current;
            return (
              <div
                key={post.title}
                className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-primary/30 bg-white shadow-xl shadow-black/5"
                    : "border-border bg-white opacity-60 shadow-sm hover:opacity-80"
                }`}
              >
                {isActive && (
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />
                )}

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>

                  <Link
                    href={post.slug}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Read more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to post ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
