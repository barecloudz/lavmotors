"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Mail,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/blog", label: "Blog Posts", icon: FileText, exact: false },
  { href: "/admin/contacts", label: "Contacts", icon: Mail, exact: false },
];

function Sidebar({
  pathname,
  onClose,
  onLogout,
}: {
  pathname: string;
  onClose?: () => void;
  onLogout: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center justify-between border-b border-[#1e1e1e] px-5 py-5">
        <div>
          <p className="text-[10px] font-bold tracking-widest text-[#c9932c] uppercase">
            LAV Motors
          </p>
          <p className="mt-0.5 text-sm font-semibold text-white">Admin Panel</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[#666] transition-colors hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5 px-3 py-4">
        {navItems.map((item) => {
          const active = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href) && pathname !== "/admin";
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#c9932c]/15 text-[#c9932c]"
                  : "text-[#777] hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div className="border-t border-[#1e1e1e] px-3 py-3">
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#666] transition-colors hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  // Login page: no sidebar
  if (pathname === "/admin/login") {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-4">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 border-r border-[#1e1e1e] bg-[#111] md:block">
        <Sidebar pathname={pathname} onLogout={handleLogout} />
      </aside>

      {/* Mobile: backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile: drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-[#1e1e1e] bg-[#111] transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          pathname={pathname}
          onClose={() => setOpen(false)}
          onLogout={handleLogout}
        />
      </aside>

      {/* Main */}
      <div className="flex min-h-screen flex-col md:pl-56">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#1e1e1e] bg-[#111] px-4 py-3 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-[#777] transition-colors hover:text-white"
          >
            <Menu size={20} />
          </button>
          <p className="text-xs font-bold tracking-widest text-[#c9932c] uppercase">
            LAV Motors
          </p>
          <div className="w-5" />
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
