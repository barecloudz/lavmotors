import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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
              Have a question or need to schedule a service? Call us, stop by,
              or fill out the form and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
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
                Best for quotes, quick questions, and same-day service
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
                  <span className="font-medium text-foreground">8AM – 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Saturday</span>
                  <span className="font-medium text-foreground">8AM – 5PM</span>
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

      {/* Contact form + map side by side */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                src="https://maps.google.com/maps?q=1105+Spartanburg+Hwy,+Hendersonville,+NC+28792&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LAV Motors Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
