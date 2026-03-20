"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wrench, Car, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/vehicles", label: "Vehicles", icon: Car, comingSoon: true },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0d0b09]/95 backdrop-blur-xl md:hidden">
      <div className="flex items-stretch">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          if (item.comingSoon) {
            return (
              <div
                key={item.href}
                className="relative flex flex-1 flex-col items-center justify-center gap-1 py-3 opacity-40"
              >
                <item.icon size={20} className="text-white/60" />
                <span className="text-[10px] text-white/60">{item.label}</span>
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-1 flex-col items-center justify-center gap-1 py-3 transition-colors"
            >
              <item.icon
                size={20}
                className={isActive ? "text-primary" : "text-white/50"}
              />
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-primary" : "text-white/50"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute top-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
