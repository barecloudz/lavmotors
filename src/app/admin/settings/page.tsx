"use client";

import { useState, useTransition, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { updateSetting } from "../actions";
import { Loader2, Save } from "lucide-react";

export default function SettingsPage() {
  const [vehiclesEnabled, setVehiclesEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    supabase
      .from("site_settings")
      .select("value")
      .eq("key", "vehicles_enabled")
      .single()
      .then(({ data }) => {
        if (data) setVehiclesEnabled(data.value === "true");
        setLoading(false);
      });
  }, []);

  function handleSave() {
    startTransition(async () => {
      await updateSetting("vehicles_enabled", String(vehiclesEnabled));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    });
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={20} className="animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Control what's visible on the public site.</p>
      </div>

      <div className="max-w-lg space-y-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-gray-900">Vehicles Section</h2>
          <p className="mt-1 text-sm text-gray-500">
            Show or hide the Vehicles page and bottom nav link on the public site.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setVehiclesEnabled(!vehiclesEnabled)}
              className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors ${
                vehiclesEnabled ? "bg-[#c9932c]" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  vehiclesEnabled ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-sm font-medium text-gray-700">
              {vehiclesEnabled ? "Enabled — visible on site" : "Disabled — hidden from site"}
            </span>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={isPending}
          className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e] disabled:opacity-50"
        >
          {isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {saved ? "Saved!" : "Save Settings"}
        </button>
      </div>
    </div>
  );
}
