import { ShieldCheck, Star, Wrench, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const signals = [
  {
    icon: ShieldCheck,
    value: "NC Licensed",
    label: "Official Inspection Station",
  },
  {
    icon: Clock,
    value: "30+ Years",
    label: "Serving Hendersonville",
  },
  {
    icon: Star,
    value: "4.5 Stars",
    label: "100+ Google Reviews",
  },
  {
    icon: Wrench,
    value: "All Services",
    label: "Under One Roof",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {signals.map((s, i) => (
            <Reveal key={s.value} delay={(i as 0 | 1 | 2 | 3 | 4)} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
