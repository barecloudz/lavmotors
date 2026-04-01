import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/server";
import { FileText, Mail, PenSquare, Eye } from "lucide-react";

export default async function AdminDashboard() {
  const supabase = createAdminClient();

  const [{ count: totalPosts }, { count: publishedPosts }, { count: unreadContacts }, { data: recentContacts }] =
    await Promise.all([
      supabase.from("blog_posts").select("*", { count: "exact", head: true }),
      supabase
        .from("blog_posts")
        .select("*", { count: "exact", head: true })
        .eq("published", true),
      supabase
        .from("contact_submissions")
        .select("*", { count: "exact", head: true })
        .eq("read", false),
      supabase
        .from("contact_submissions")
        .select("id, name, email, service, created_at, read")
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

  const stats = [
    {
      label: "Total Posts",
      value: totalPosts ?? 0,
      icon: FileText,
      href: "/admin/blog",
    },
    {
      label: "Published",
      value: publishedPosts ?? 0,
      icon: Eye,
      href: "/admin/blog",
    },
    {
      label: "Unread Messages",
      value: unreadContacts ?? 0,
      icon: Mail,
      href: "/admin/contacts",
      highlight: (unreadContacts ?? 0) > 0,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-[#666]">
          Welcome back to the LAV Motors admin panel.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group rounded-xl border border-[#1e1e1e] bg-[#111] p-5 transition-colors hover:border-[#c9932c]/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-[#666]">{stat.label}</p>
                <p
                  className={`mt-1 text-3xl font-bold ${stat.highlight ? "text-[#c9932c]" : "text-white"}`}
                >
                  {stat.value}
                </p>
              </div>
              <div
                className={`rounded-lg p-2 ${stat.highlight ? "bg-[#c9932c]/15 text-[#c9932c]" : "bg-white/5 text-[#555]"}`}
              >
                <stat.icon size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-8">
        <h2 className="mb-3 text-sm font-semibold text-[#888] uppercase tracking-wider">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e]"
          >
            <PenSquare size={15} />
            New Blog Post
          </Link>
          <Link
            href="/admin/contacts"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2.5 text-sm font-medium text-[#aaa] transition-colors hover:border-[#333] hover:text-white"
          >
            <Mail size={15} />
            View Messages
          </Link>
        </div>
      </div>

      {/* Recent contacts */}
      {recentContacts && recentContacts.length > 0 && (
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#888] uppercase tracking-wider">
              Recent Messages
            </h2>
            <Link
              href="/admin/contacts"
              className="text-xs text-[#c9932c] hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#1e1e1e] bg-[#111]">
            {recentContacts.map((c, i) => (
              <Link
                key={c.id}
                href="/admin/contacts"
                className={`flex items-center justify-between px-5 py-4 transition-colors hover:bg-white/3 ${
                  i < recentContacts.length - 1
                    ? "border-b border-[#1a1a1a]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {!c.read && (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#c9932c]" />
                  )}
                  {c.read && <span className="h-2 w-2 shrink-0" />}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white">
                      {c.name}
                    </p>
                    <p className="truncate text-xs text-[#666]">
                      {c.service || c.email}
                    </p>
                  </div>
                </div>
                <p className="shrink-0 text-xs text-[#555] ml-4">
                  {new Date(c.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
