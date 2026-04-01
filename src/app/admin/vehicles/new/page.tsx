import { VehicleForm } from "../_components/VehicleForm";
import { createVehicle } from "../../actions";

async function handleCreate(_id: string | null, formData: FormData) {
  "use server";
  return createVehicle(formData);
}

export default function NewVehiclePage() {
  return <VehicleForm action={handleCreate} />;
}
