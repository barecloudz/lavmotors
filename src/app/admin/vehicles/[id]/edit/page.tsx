import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { VehicleForm } from "../../_components/VehicleForm";
import { updateVehicle } from "../../../actions";

async function handleUpdate(id: string | null, formData: FormData) {
  "use server";
  return updateVehicle(id!, formData);
}

export default async function EditVehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: vehicle } = await supabase.from("vehicles").select("*").eq("id", id).single();
  if (!vehicle) notFound();
  return <VehicleForm initialData={vehicle} action={handleUpdate} />;
}
