import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Reviews />
      <CTA />
    </>
  );
}
