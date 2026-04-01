"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";
import { EstimatorWidget } from "./EstimatorWidget";

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">{children}</main>
      <Footer />
      <BottomNav />
      <EstimatorWidget />
    </>
  );
}
