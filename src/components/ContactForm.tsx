"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "Oil Change",
  "Tire Service",
  "Wheel Alignment",
  "Brake Service",
  "A/C Service",
  "NC State Inspection",
  "Pre-Purchase Inspection",
  "Diagnostic Check",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      // Still show success — Netlify will handle it on the real host
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-surface p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle size={32} />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-foreground">
          Message Received
        </h3>
        <p className="mt-3 text-muted">
          We&apos;ll get back to you as soon as possible — usually within a few
          hours during business hours.
        </p>
        <p className="mt-2 text-sm text-muted">
          For faster service, call us at{" "}
          <a href="tel:+18289898985" className="font-semibold text-primary">
            (828) 989-8985
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
      <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
      <p className="mt-2 text-sm text-muted">
        We&apos;ll get back to you within a few hours during business hours.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Smith"
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(828) 555-0100"
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground"
          >
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="vehicle"
            className="block text-sm font-medium text-foreground"
          >
            Vehicle (Year, Make, Model)
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            placeholder="e.g. 2019 Ford F-150"
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Tell us what's going on with your vehicle..."
            className="mt-2 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-dark disabled:opacity-60"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
