import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Blog | LAV Motors",
  description:
    "Auto care tips, maintenance guides, and automotive advice from the expert team at LAV Motors in Hendersonville, NC.",
};

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, title, description, date_published, read_time")
    .eq("published", true)
    .order("date_published", { ascending: false });

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            From the Shop
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground">
            Auto Care Tips &amp; Advice
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Maintenance guides, service insights, and automotive tips from the
            LAV Motors team in Hendersonville, NC.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {!posts || posts.length === 0 ? (
            <p className="text-muted">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-3xl border border-border bg-surface p-8 transition-colors hover:border-primary/40 hover:bg-surface-light"
                >
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(post.date_published).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.read_time}
                    </span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold leading-snug tracking-tight text-foreground">
                    {post.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                    Read article
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
