import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicles For Sale",
  description:
    "Browse our consignment vehicles for sale at LAV Motors in Hendersonville, NC. Quality pre-owned cars at fair prices.",
};

const statusLabel: Record<string, { text: string; cls: string }> = {
  available: { text: "Available", cls: "bg-green-100 text-green-700" },
  pending:   { text: "Pending",   cls: "bg-yellow-100 text-yellow-700" },
  sold:      { text: "Sold",      cls: "bg-gray-100 text-gray-500" },
};

export default async function VehiclesPage() {
  const supabase = await createClient();

  const [{ data: settings }, { data: vehicles }] = await Promise.all([
    supabase.from("site_settings").select("value").eq("key", "vehicles_enabled").single(),
    supabase.from("vehicles").select("*").order("featured", { ascending: false }).order("created_at", { ascending: false }),
  ]);

  if (!settings || settings.value !== "true") notFound();

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Consignment
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground">
            Vehicles For Sale
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Quality pre-owned vehicles available at LAV Motors. Call us or stop by to take a look.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {!vehicles || vehicles.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface p-16 text-center">
              <p className="text-muted">No vehicles listed right now. Check back soon.</p>
              <a
                href="tel:+18289898985"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                <Phone size={15} />
                Call (828) 989-8985
              </a>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vehicles.map((v) => {
                const status = statusLabel[v.status] ?? statusLabel.available;
                return (
                  <div key={v.id} className="group rounded-3xl border border-border bg-surface overflow-hidden">
                    {/* Photo */}
                    <div className="aspect-[16/10] bg-surface-light overflow-hidden">
                      {v.photos?.[0] ? (
                        <img
                          src={v.photos[0]}
                          alt={`${v.year} ${v.make} ${v.model}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-muted text-sm">No photo</div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{v.year}</p>
                          <h2 className="mt-0.5 text-xl font-bold text-foreground">{v.make} {v.model}</h2>
                          {v.trim && <p className="text-sm text-muted">{v.trim}</p>}
                        </div>
                        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${status.cls}`}>
                          {status.text}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                        {v.mileage && <span>{v.mileage.toLocaleString()} mi</span>}
                        {v.featured && <span className="text-primary font-medium">★ Featured</span>}
                      </div>

                      {v.description && (
                        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">{v.description}</p>
                      )}

                      <div className="mt-5 flex items-center justify-between">
                        {v.price ? (
                          <p className="text-2xl font-bold text-foreground">${v.price.toLocaleString()}</p>
                        ) : (
                          <p className="text-sm text-muted">Call for price</p>
                        )}
                        <Link
                          href={`/contact?vehicle=${encodeURIComponent(`${v.year} ${v.make} ${v.model}`)}`}
                          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
