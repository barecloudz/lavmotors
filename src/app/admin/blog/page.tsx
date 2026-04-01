import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/server";
import { PenSquare } from "lucide-react";
import { PostActions } from "./_components/PostActions";

export default async function AdminBlogPage() {
  const supabase = createAdminClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, slug, title, published, date_published, read_time")
    .order("date_published", { ascending: false });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="mt-1 text-sm text-[#666]">
            {posts?.length ?? 0} post{posts?.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e]"
        >
          <PenSquare size={15} />
          New Post
        </Link>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#2a2a2a] p-12 text-center">
          <p className="text-[#555]">No posts yet.</p>
          <Link
            href="/admin/blog/new"
            className="mt-4 inline-block text-sm text-[#c9932c] hover:underline"
          >
            Create your first post
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-[#1e1e1e] bg-[#111] md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="px-5 py-3.5 text-left text-xs font-medium text-[#555] uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-[#555] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-medium text-[#555] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3.5 text-right text-xs font-medium text-[#555] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, i) => (
                  <tr
                    key={post.id}
                    className={`${i < posts.length - 1 ? "border-b border-[#1a1a1a]" : ""} hover:bg-white/2`}
                  >
                    <td className="px-5 py-4">
                      <p className="font-medium text-white line-clamp-1">
                        {post.title}
                      </p>
                      <p className="text-xs text-[#555] mt-0.5">/blog/{post.slug}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          post.published
                            ? "bg-green-500/10 text-green-400"
                            : "bg-[#2a2a2a] text-[#666]"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-[#666]">
                      {new Date(post.date_published).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <PostActions
                        id={post.id}
                        slug={post.slug}
                        published={post.published}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {posts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl border border-[#1e1e1e] bg-[#111] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white line-clamp-2">
                      {post.title}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          post.published
                            ? "bg-green-500/10 text-green-400"
                            : "bg-[#2a2a2a] text-[#666]"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                      <span className="text-xs text-[#555]">
                        {new Date(post.date_published).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </span>
                    </div>
                  </div>
                  <PostActions
                    id={post.id}
                    slug={post.slug}
                    published={post.published}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
