import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-48 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 ] bg-[#f2f3f2] md:min-h-[80vh] bg-gradient-to-br from-blue-50 via-blue-100 to-white rounded-3xl">
      <div className="max-w-7xl mx-auto text-[#214186]">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            Your Trusted Partner for Security, Cleaning, and Excellence
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#214186] mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Reliable services tailored to ensure safety, hygiene, and
            operational success
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
            >
              <Link href="/#service_section">Explore Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto  text-blue-500 font-bold"
            >
              <Link href="/contactus">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
