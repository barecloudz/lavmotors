import type { Metadata } from "next";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LAV Motors at (828) 989-8985 or visit us at 1105 Spartanburg Hwy, Hendersonville, NC 28792. Mon-Fri 8AM-7PM, Sat 8AM-5PM.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact Us
            </h1>
            <p className="mt-3 text-5xl font-bold tracking-tight text-foreground">
              Get In Touch
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Have a question or need to schedule a service? Reach out to us by
              phone or stop by the shop. No appointment needed for most
              services.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-8 text-center transition-all hover:border-primary/30">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone size={28} />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-foreground">
                Call Us
              </h2>
              <a
                href="tel:+18289898985"
                className="mt-3 block text-lg font-medium text-primary transition-colors hover:text-accent"
              >
                (828) 989-8985
              </a>
              <p className="mt-2 text-sm text-muted">
                Call for quotes, questions, or to check on your vehicle
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 text-center transition-all hover:border-primary/30">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin size={28} />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-foreground">
                Visit Us
              </h2>
              <p className="mt-3 text-lg font-medium text-foreground">
                1105 Spartanburg Hwy
              </p>
              <p className="text-muted">Hendersonville, NC 28792</p>
              <a
                href="https://maps.google.com/?q=1105+Spartanburg+Hwy+Hendersonville+NC+28792"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                Get Directions &rarr;
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 text-center transition-all hover:border-primary/30">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Clock size={28} />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-foreground">
                Hours
              </h2>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Monday – Friday</span>
                  <span className="font-medium text-foreground">
                    8AM – 7PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Saturday</span>
                  <span className="font-medium text-foreground">
                    8AM – 5PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d-82.4468!3d35.3185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE5JzA2LjYiTiA4MsKwMjYnNDguNSJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LAV Motors Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
