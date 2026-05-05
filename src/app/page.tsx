import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { BlogSlider } from "@/components/BlogSlider";
import { Reviews } from "@/components/Reviews";
import { HiringBanner } from "@/components/HiringBanner";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <BlogSlider />
      <Reviews />
      <HiringBanner />
      <CTA />
    </>
  );
}
