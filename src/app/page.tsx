import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Reviews />
      <CTA />
    </>
  );
}
