"use client";

import { useState } from "react";
import { X, Calculator } from "lucide-react";

export function EstimatorWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6">
      {open && (
        <div className="mb-3 flex w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <span className="text-sm font-semibold text-white">
              Repair Cost Estimator
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close estimator"
              className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
          <iframe
            src="https://repairpal.com/estimator_widgets/v3/embedded?service_location_id=432054"
            title="Repair Cost Estimator"
            className="w-full"
            style={{ minHeight: "500px", border: "none" }}
          />
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-dark"
      >
        <Calculator size={18} />
        {open ? "Close" : "Get Estimate"}
      </button>
    </div>
  );
}
