import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import WhyChooseUS from "@/components/whychooseus";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">
        <Hero />
        <WhyChooseUS/>
      </main>
    </div>
  );
}
