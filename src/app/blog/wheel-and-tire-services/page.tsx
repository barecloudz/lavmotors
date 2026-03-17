import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Expert Wheel and Tire Services for Your Vehicle",
  description:
    "Learn how expert wheel and tire care ensures safety, performance, and peace of mind. LAV Motors offers comprehensive tire services in Hendersonville, NC.",
};

export default function BlogPost() {
  return (
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
            4 min read
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>LAV Motors</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Expert Wheel and Tire Services for Your Vehicle
        </h1>

        <div className="prose-lav mt-12 space-y-6 text-base leading-relaxed text-muted">
          <p>
            When it comes to keeping your car safe and running smoothly, few
            things are as important as your wheels and tires. They are the only
            parts of your vehicle that touch the road, so their condition
            directly affects your driving experience.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Why Professional Wheel and Tire Services Matter
          </h2>
          <ul className="space-y-3 pl-4">
            {[
              "Safety First: Worn or damaged tires can cause blowouts or loss of control. Professionals inspect for tread depth, sidewall damage, and uneven wear.",
              "Improved Fuel Efficiency: Properly inflated and balanced tires reduce rolling resistance, saving you money at the pump.",
              "Better Handling and Comfort: Balanced wheels and aligned tires ensure smooth rides and precise steering.",
              "Longer Tire Life: Regular rotation and maintenance prevent premature wear.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            Comprehensive Wheel and Tire Services
          </h2>

          {[
            {
              title: "Tire Installation and Replacement",
              body: "Choosing the right tires for your vehicle and driving style is crucial. We help you select tires that match your car's specifications and your budget, then install them with precision.",
            },
            {
              title: "Tire Rotation and Balancing",
              body: "Rotating your tires regularly promotes even wear. Balancing prevents vibrations and extends tire life. We recommend rotation every 5,000 to 7,000 miles.",
            },
            {
              title: "Wheel Alignment",
              body: "Misaligned wheels cause uneven tire wear and poor handling. Our alignment service uses advanced equipment to adjust your wheels to factory specifications, improving safety and tire longevity.",
            },
            {
              title: "Tire Repair",
              body: "Not all tire damage requires replacement. We inspect punctures and cuts to determine if a safe repair is possible — saving you money while keeping you on the road.",
            },
          ].map((s) => (
            <div key={s.title}>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1">{s.body}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-foreground">
            How to Know When Your Tires Need Attention
          </h2>
          <ul className="space-y-3 pl-4">
            {[
              "Visible Tread Wear: Use the penny test — insert a penny into the tread with Lincoln's head upside down. If you see the top of his head, it's time for new tires.",
              "Vibrations While Driving: This could indicate unbalanced tires or alignment issues.",
              "Pulling to One Side: Your car drifting left or right suggests misalignment.",
              "Cracks or Bulges: Sidewall damage is dangerous and requires immediate attention.",
              "Frequent Air Pressure Loss: Could mean a slow leak or valve problem.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            Tips for Maintaining Your Tires Between Services
          </h2>
          <ul className="space-y-3 pl-4">
            {[
              "Check Tire Pressure Monthly: Use a reliable gauge and inflate to the manufacturer's recommended level.",
              "Inspect Tires Visually: Look for cuts, punctures, or uneven wear.",
              "Avoid Overloading Your Vehicle: Excess weight stresses tires and suspension.",
              "Drive Smoothly: Hard braking and fast cornering wear tires faster.",
              "Keep Your Wheels Clean: Dirt and brake dust can damage rims over time.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h2 className="text-xl font-bold text-foreground">
              Expert Tire Care in Hendersonville
            </h2>
            <p className="mt-3">
              At LAV Motors, we understand how important your vehicle is to you.
              We carry a full inventory of tires and offer installation,
              rotation, balancing, alignment, and repair — all under one roof.
              Stop by or call to schedule your tire service today.
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
  );
}
