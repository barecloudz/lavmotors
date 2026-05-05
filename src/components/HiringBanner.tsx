import { Wrench, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const requirements = [
  "3+ years of hands-on mechanic experience",
  "Own tools required",
  "Local & European car knowledge a plus",
  "English helpful — training & translation provided",
];

export function HiringBanner() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left: copy */}
          <Reveal delay={0}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Now Hiring
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              We&apos;re Looking for
              <br />
              Qualified Mechanics
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              LAV Motors is shorthanded and actively recruiting skilled
              subcontractor mechanics. We specialize in local market and
              European cars, handle a full range of services, and are open{" "}
              <strong>7 days a week</strong>. We do a lot of insurance work —
              steady volume, commission-based pay.
            </p>

            <ul className="mt-6 space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle
                    size={17}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {req}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted">
              Pay is commission-based. Full details shared at interview.
            </p>

            <a
              href="tel:+18289898985"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/35"
            >
              <Wrench size={17} />
              Call to Apply: (828) 989-8985
            </a>
          </Reveal>

          {/* Right: accent card */}
          <Reveal delay={1}>
            <div className="relative overflow-hidden rounded-2xl bg-[#0d0b09] p-8 text-white">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
              <div className="relative space-y-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Why Join Us
                </p>
                {[
                  { title: "Steady Work", body: "High volume of insurance jobs keeps the bays busy all week long." },
                  { title: "7-Day Shop", body: "We're open every day, so you control your own schedule and earnings." },
                  { title: "Supportive Team", body: "We help with training and offer translation assistance for non-English speakers." },
                  { title: "Commission Pay", body: "Earn based on your output — the more you do, the more you make." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <CheckCircle size={15} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-0.5 text-xs text-white/55 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
