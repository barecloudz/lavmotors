import { Phone, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0d0b09] p-10 text-center md:p-20">
          {/* Decorative blobs */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
          <div className="bg-dot-grid absolute inset-0 opacity-40" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Ready to Book?
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Get Your Car Back
              <br />
              <span className="text-gradient">On the Road</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
              Walk-ins welcome for most services. Give us a call or swing by.
              We&apos;re here Monday through Saturday.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+18289898985"
                className="flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/35"
              >
                <Phone size={20} />
                (828) 989-8985
              </a>
              <a
                href="https://maps.google.com/?q=1105+Spartanburg+Hwy+Hendersonville+NC+28792"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/30 hover:bg-white/10"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>

            <p className="mt-8 text-xs text-white/30">
              Mon–Sat 9AM–7PM &nbsp;·&nbsp; Sun 12PM–7PM &nbsp;·&nbsp;
              1105 Spartanburg Hwy, Hendersonville NC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
