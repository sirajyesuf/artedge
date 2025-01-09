import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import WhyChooseUS from "@/components/whychooseus";
import CTA from "@/components/cta";
import Clients from "@/components/clients";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUS />
        <Clients />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
