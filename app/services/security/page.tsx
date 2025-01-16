import React from "react";
import {
  ShieldCheck,
  CalendarCheck,
  Package,
  UserCheck,
  Camera,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ServiceFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2 capitalize">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const securitySolutions = [
  {
    icon: ShieldCheck,
    title: "VIP protection service",
    description:
      "Professional security personnel trained to handle various security scenarios with expertise and discretion.",
  },
  {
    icon: CalendarCheck,
    title: "Event Escort Service",
    description:
      "Comprehensive security management for events of all sizes, ensuring smooth operations and guest safety.",
  },
  {
    icon: Package,
    title: "Asset escort service",
    description:
      "Round-the-clock surveillance and monitoring services to keep your premises secure at all times.",
  },
  {
    icon: UserCheck,
    title: "escort service",
    description:
      "Customized access control solutions to manage visitor traffic and secure your premises.",
  },
  {
    icon: Camera,
    title: "Survilance and monitoring service",
    description:
      "Expert security consulting services to help you design and implement a robust security strategy.",
  },
  {
    icon: Zap,
    title: "crisis management and  emergency response service",
    description:
      "Rapid response teams ready to handle emergencies and security incidents with speed and efficiency.",
  },
];

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* <div
          className="relative h-[600px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/services/security.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in Security Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Serving businesses, events, and communities with unmatched
              expertise.
            </p>
          </div>
        </div> */}

        <div className="relative w-full h-[400px] md:h-[650px] rounded-lg">
          <Image
            src="/services/security_hero3.jpg"
            alt="security services"
            className="rounded-lg flex self-end"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 flex place-items-end md:items-center bg-gradient-to-r from-blue-700 to-transparent">
            <div className="md:items-center p-4 text-white px-4">
              <h1 className="text-2xl md:text-5xl font-bold mb-4">
                Your Trusted Partner in Security Solutions
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Serving businesses, events, and communities with unmatched
                expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Service Features */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Security Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {securitySolutions.map((feature, index) => (
                <ServiceFeature key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Enhance Your Security?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                <Link href="/contactus">Contact Us</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
