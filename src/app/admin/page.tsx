import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/server";
import { FileText, Mail, PenSquare, Eye, Car } from "lucide-react";

export default async function AdminDashboard() {
  const supabase = createAdminClient();

  const [
    { count: totalPosts },
    { count: publishedPosts },
    { count: unreadContacts },
    { count: totalVehicles },
    { data: recentContacts },
  ] = await Promise.all([
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }).eq("published", true),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }).eq("read", false),
    supabase.from("vehicles").select("*", { count: "exact", head: true }).eq("status", "available"),
    supabase.from("contact_submissions").select("id, name, email, service, created_at, read").order("created_at", { ascending: false }).limit(5),
  ]);

  const stats = [
    { label: "Published Posts", value: publishedPosts ?? 0, total: totalPosts ?? 0, icon: FileText, href: "/admin/blog" },
    { label: "Unread Messages", value: unreadContacts ?? 0, icon: Mail, href: "/admin/contacts", highlight: (unreadContacts ?? 0) > 0 },
    { label: "Vehicles Listed", value: totalVehicles ?? 0, icon: Car, href: "/admin/vehicles" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back to the LAV Motors admin panel.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-[#c9932c]/40 hover:shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500">{stat.label}</p>
                <p className={`mt-1 text-3xl font-bold ${stat.highlight ? "text-[#c9932c]" : "text-gray-900"}`}>
                  {stat.value}
                </p>
                {"total" in stat && (
                  <p className="mt-0.5 text-xs text-gray-400">of {stat.total} total</p>
                )}
              </div>
              <div className={`rounded-lg p-2 ${stat.highlight ? "bg-[#c9932c]/10 text-[#c9932c]" : "bg-gray-100 text-gray-400"}`}>
                <stat.icon size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-8">
        <h2 className="mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e]"
          >
            <PenSquare size={15} />
            New Blog Post
          </Link>
          <Link
            href="/admin/vehicles/new"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <Car size={15} />
            Add Vehicle
          </Link>
          <Link
            href="/admin/contacts"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
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
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recent Messages</h2>
            <Link href="/admin/contacts" className="text-xs text-[#c9932c] hover:underline">View all</Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            {recentContacts.map((c, i) => (
              <Link
                key={c.id}
                href="/admin/contacts"
                className={`flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-gray-50 ${i < recentContacts.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {!c.read && <span className="h-2 w-2 shrink-0 rounded-full bg-[#c9932c]" />}
                  {c.read && <span className="h-2 w-2 shrink-0" />}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">{c.name}</p>
                    <p className="truncate text-xs text-gray-400">{c.service || c.email}</p>
                  </div>
                </div>
                <p className="shrink-0 text-xs text-gray-400 ml-4">
                  {new Date(c.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
