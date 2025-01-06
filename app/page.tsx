import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
