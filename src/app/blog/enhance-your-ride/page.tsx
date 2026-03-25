import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Enhance Your Ride with Professional Automotive Services",
  description:
    "Whether you need routine maintenance or a major repair, expert care can make all the difference. Discover how LAV Motors keeps your vehicle in peak condition.",
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Enhance Your Ride with Professional Automotive Services",
            description: "Whether you need routine maintenance or a major repair, expert care can make all the difference. Discover how LAV Motors keeps your vehicle in peak condition.",
            datePublished: "2025-11-10",
            dateModified: "2025-11-10",
            author: { "@type": "Organization", name: "LAV Motors", url: "https://www.lavmotors.com" },
            publisher: {
              "@type": "Organization",
              name: "LAV Motors",
              url: "https://www.lavmotors.com",
              logo: { "@type": "ImageObject", url: "https://www.lavmotors.com/logo.jpeg" },
            },
            url: "https://www.lavmotors.com/blog/enhance-your-ride",
            mainEntityOfPage: "https://www.lavmotors.com/blog/enhance-your-ride",
          }),
        }}
      />
      <main className="pt-20">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="mt-8 flex items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            Nov 10, 2025
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            3 min read
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>LAV Motors</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Enhance Your Ride with Professional Automotive Services
        </h1>

        <div className="prose-lav mt-12 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Owning a car is more than just having a way to get from point A to
            point B. It&apos;s about enjoying the ride, feeling safe, and knowing your
            vehicle is in top shape. Whether you need routine maintenance or a
            major repair, expert care can make all the difference.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Why Choose Professional Auto Services?
          </h2>
          <p>
            DIY fixes or quick visits to untrained mechanics might save money
            upfront but can lead to bigger problems later. Professional auto
            services offer:
          </p>
          <ul className="space-y-3 pl-4">
            {[
              "Expertise: Certified technicians know your vehicle inside and out.",
              "Quality parts: They use reliable, manufacturer-approved parts.",
              "Comprehensive care: From oil changes to engine diagnostics, everything is covered.",
              "Safety assurance: Proper maintenance reduces the risk of breakdowns and accidents.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            Key Services to Look For
          </h2>

          {[
            {
              title: "Routine Maintenance",
              body: "Regular oil changes, tire rotations, and brake inspections are essential. These simple steps prevent wear and tear and extend your car's life.",
            },
            {
              title: "Diagnostics and Repairs",
              body: "Modern cars have complex electronics. Professional diagnostic tools can quickly identify issues before they become costly repairs.",
            },
            {
              title: "Tire and Wheel Services",
              body: "Proper tire care improves fuel efficiency and safety. Services include balancing, alignment, and replacement.",
            },
            {
              title: "Air Conditioning and Heating",
              body: "Stay comfortable year-round with expert HVAC system checks and repairs.",
            },
            {
              title: "Detailing and Cosmetic Care",
              body: "Keep your car looking new with professional washing, waxing, and interior cleaning.",
            },
          ].map((s) => (
            <div key={s.title}>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1">{s.body}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-foreground">
            The Benefits of Regular Professional Auto Care
          </h2>
          <ul className="space-y-3 pl-4">
            {[
              "Improved Safety: Well-maintained brakes, tires, and lights keep you safe on the road.",
              "Better Performance: Your car runs smoother and more efficiently.",
              "Cost Savings: Catching problems early prevents expensive repairs.",
              "Higher Resale Value: A well-documented service history boosts your car's worth.",
              "Environmental Impact: Proper maintenance reduces emissions and fuel consumption.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            How to Get Started
          </h2>
          <ul className="space-y-3 pl-4">
            {[
              "Book an appointment: Call us to find a convenient time.",
              "Prepare your vehicle: Note any issues or concerns you've noticed.",
              "Ask questions: Don't hesitate to inquire about recommended services.",
              "Follow maintenance schedules: Stick to the plan your technician suggests.",
              "Keep records: Maintain a service log for future reference.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h2 className="text-xl font-bold text-foreground">
              Enhance Your Ride Today
            </h2>
            <p className="mt-3">
              With the right professional auto services, your car will perform
              better, look great, and keep you safe on every journey. LAV Motors
              in Hendersonville is your trusted partner for all things automotive.
            </p>
            <a
              href="tel:+18289898985"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Call (828) 989-8985
            </a>
          </div>
        </div>
      </article>
    </main>
    </>
  );
}
