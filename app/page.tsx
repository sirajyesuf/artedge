import Hero from "@/components/hero";
import WhyChooseUS from "@/components/whychooseus";
import CTA from "@/components/cta";
import Clients from "@/components/clients";
import Services from "@/components/services";
import Achievements from "@/components/achievements";
import Testimonials from "@/components/testimonials";
export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <WhyChooseUS />
        <Achievements />
        <Clients />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
