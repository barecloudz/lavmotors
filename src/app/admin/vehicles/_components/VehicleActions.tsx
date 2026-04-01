"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import { deleteVehicle } from "../../actions";

export function VehicleActions({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleDelete() {
    if (!confirm("Delete this vehicle? This cannot be undone.")) return;
    startTransition(async () => {
      await deleteVehicle(id);
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-1">
      <Link href={`/admin/vehicles/${id}/edit`} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700">
        <Pencil size={15} />
      </Link>
      <button onClick={handleDelete} disabled={isPending} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 disabled:opacity-40">
        {isPending ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
      </button>
    </div>
  );
}
