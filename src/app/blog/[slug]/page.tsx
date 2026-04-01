import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, description")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) notFound();

  const formattedDate = new Date(post.date_published).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  return (
    <main className="pt-20">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          All posts
        </Link>

        <div className="mt-8 flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formattedDate}
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.read_time}
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>LAV Motors</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>

        <div
          className="prose-lav mt-12 space-y-4 text-base leading-relaxed text-muted
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2
            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2
            [&_strong]:font-semibold [&_strong]:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h2 className="text-xl font-bold text-foreground">
            Ready to bring your car in?
          </h2>
          <p className="mt-3 text-muted">
            LAV Motors in Hendersonville is your trusted partner for all things
            automotive. Call us or stop by today.
          </p>
          <a
            href="tel:+18289898985"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Call (828) 989-8985
          </a>
        </div>
      </article>
    </main>
  );
}
