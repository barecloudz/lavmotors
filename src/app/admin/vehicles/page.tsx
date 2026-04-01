import Link from "next/link";
import { createAdminClient } from "@/lib/supabase/server";
import { Plus } from "lucide-react";
import { VehicleActions } from "./_components/VehicleActions";

const statusColors: Record<string, string> = {
  available: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  sold: "bg-gray-100 text-gray-500",
};

export default async function AdminVehiclesPage() {
  const supabase = createAdminClient();
  const { data: vehicles } = await supabase
    .from("vehicles")
    .select("id, year, make, model, trim, price, mileage, status, featured, photos")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vehicles</h1>
          <p className="mt-1 text-sm text-gray-500">{vehicles?.length ?? 0} vehicle{vehicles?.length !== 1 ? "s" : ""}</p>
        </div>
        <Link
          href="/admin/vehicles/new"
          className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e]"
        >
          <Plus size={15} />
          Add Vehicle
        </Link>
      </div>

      {!vehicles || vehicles.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-400">No vehicles listed yet.</p>
          <Link href="/admin/vehicles/new" className="mt-3 inline-block text-sm text-[#c9932c] hover:underline">
            Add your first vehicle
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white md:block">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-100 bg-gray-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Vehicle</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Mileage</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {vehicles.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {v.photos?.[0] ? (
                          <img src={v.photos[0]} alt="" className="h-10 w-14 rounded-lg object-cover border border-gray-200" />
                        ) : (
                          <div className="h-10 w-14 rounded-lg bg-gray-100 border border-gray-200" />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{v.year} {v.make} {v.model}</p>
                          <p className="text-xs text-gray-400">{v.trim || "—"}{v.featured && <span className="ml-2 text-[#c9932c]">★ Featured</span>}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {v.price ? `$${v.price.toLocaleString()}` : "—"}
                    </td>
                    <td className="px-4 py-4 text-gray-500">
                      {v.mileage ? `${v.mileage.toLocaleString()} mi` : "—"}
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[v.status] ?? "bg-gray-100 text-gray-500"}`}>
                        {v.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <VehicleActions id={v.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {vehicles.map((v) => (
              <div key={v.id} className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  {v.photos?.[0] ? (
                    <img src={v.photos[0]} alt="" className="h-14 w-20 rounded-lg object-cover border border-gray-200 shrink-0" />
                  ) : (
                    <div className="h-14 w-20 rounded-lg bg-gray-100 border border-gray-200 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-gray-900">{v.year} {v.make} {v.model}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{v.trim || ""}</p>
                      </div>
                      <VehicleActions id={v.id} />
                    </div>
                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${statusColors[v.status] ?? "bg-gray-100 text-gray-500"}`}>
                        {v.status}
                      </span>
                      {v.price && <span className="text-xs text-gray-600">${v.price.toLocaleString()}</span>}
                      {v.mileage && <span className="text-xs text-gray-400">{v.mileage.toLocaleString()} mi</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
