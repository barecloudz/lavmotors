"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

interface VehicleData {
  id?: string;
  year?: number;
  make?: string;
  model?: string;
  trim?: string | null;
  mileage?: number | null;
  price?: number | null;
  description?: string | null;
  photos?: string[];
  status?: string;
  featured?: boolean;
}

interface Props {
  initialData?: VehicleData;
  action: (id: string | null, formData: FormData) => Promise<{ error?: string }>;
}

const inputClass = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#c9932c] focus:ring-2 focus:ring-[#c9932c]/10";
const labelClass = "block text-xs font-medium text-gray-600 mb-1.5";

export function VehicleForm({ initialData, action }: Props) {
  const isEditing = !!initialData?.id;
  const [status, setStatus] = useState(initialData?.status ?? "available");
  const [featured, setFeatured] = useState(initialData?.featured ?? false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    formData.set("status", status);
    formData.set("featured", String(featured));

    startTransition(async () => {
      const result = await action(initialData?.id ?? null, formData);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/admin/vehicles");
        router.refresh();
      }
    });
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Link href="/admin/vehicles" className="text-gray-400 transition-colors hover:text-gray-700">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">{isEditing ? "Edit Vehicle" : "Add Vehicle"}</h1>
      </div>

      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
        {/* Year / Make / Model / Trim */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Year *</label>
            <input type="number" name="year" required defaultValue={initialData?.year} min={1900} max={new Date().getFullYear() + 1} placeholder="2022" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Make *</label>
            <input type="text" name="make" required defaultValue={initialData?.make} placeholder="Toyota" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Model *</label>
            <input type="text" name="model" required defaultValue={initialData?.model} placeholder="Camry" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Trim / Package</label>
            <input type="text" name="trim" defaultValue={initialData?.trim ?? ""} placeholder="XLE, Sport, etc." className={inputClass} />
          </div>
        </div>

        {/* Mileage / Price */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Mileage</label>
            <input type="number" name="mileage" defaultValue={initialData?.mileage ?? ""} placeholder="45000" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Price ($)</label>
            <input type="number" name="price" defaultValue={initialData?.price ?? ""} placeholder="18500" className={inputClass} />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>Description</label>
          <textarea name="description" rows={4} defaultValue={initialData?.description ?? ""} placeholder="Clean title, one owner, great condition…" className={`${inputClass} resize-none`} />
        </div>

        {/* Photos */}
        <div>
          <label className={labelClass}>Photo URLs (one per line)</label>
          <textarea
            name="photos"
            rows={4}
            defaultValue={(initialData?.photos ?? []).join("\n")}
            placeholder={"https://example.com/photo1.jpg\nhttps://example.com/photo2.jpg"}
            className={`${inputClass} resize-none font-mono text-xs`}
          />
          <p className="mt-1 text-xs text-gray-400">Paste image URLs, one per line.</p>
        </div>

        {/* Status */}
        <div>
          <label className={labelClass}>Status</label>
          <div className="flex gap-2">
            {(["available", "pending", "sold"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`flex-1 rounded-lg border py-2.5 text-sm font-medium capitalize transition-colors ${
                  status === s
                    ? "border-[#c9932c] bg-[#c9932c]/10 text-[#c9932c]"
                    : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFeatured(!featured)}
            className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors ${featured ? "bg-[#c9932c]" : "bg-gray-200"}`}
          >
            <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${featured ? "translate-x-5" : "translate-x-0"}`} />
          </button>
          <span className="text-sm text-gray-600">Featured vehicle</span>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e] disabled:opacity-50"
          >
            {isPending && <Loader2 size={14} className="animate-spin" />}
            {isEditing ? "Save Changes" : "Add Vehicle"}
          </button>
          <Link href="/admin/vehicles" className="inline-flex items-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
