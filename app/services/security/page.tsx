import React from "react";
import {
  Shield,
  CheckCircle2,
  Clock,
  Users,
  Award,
  ShieldCheck,
  CalendarCheck,
  Package,
  UserCheck,
  Camera,
  Zap,
} from "lucide-react";

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

// function Testimonial({
//   content,
//   author,
//   company,
// }: {
//   content: string;
//   author: string;
//   company: string;
// }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex gap-2 mb-4">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <p className="text-gray-700 mb-4 italic">"{content}"</p>
//       <div>
//         <p className="font-semibold">{author}</p>
//         <p className="text-sm text-gray-600">{company}</p>
//       </div>
//     </div>
//   );
// }

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
        {/* Hero Section */}
        <div
          className="relative h-[60vh] bg-cover bg-center"
          style={{
            backgroundImage: `url("/public/security_service.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Security Services
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Professional security solutions tailored to protect your assets,
              people, and peace of mind.
            </p>
          </div>
        </div>

        {/* About Service Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                At Art Edge Trading PLC, we provide comprehensive security
                solutions that combine cutting-edge technology with highly
                trained personnel. Our security services are designed to meet
                the unique challenges of modern businesses and organizations.
              </p>
              <p className="text-gray-700 mb-6">
                With years of experience in the industry, we understand that
                security isn&apos;t just about physical presence – it&apos;s
                about creating a robust system that prevents incidents before
                they occur while maintaining a professional and welcoming
                environment.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 Surveillance and Monitoring",
                  "Highly Trained Security Personnel",
                  "Emergency Response Protocols",
                  "Access Control Systems",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">
                Why Choose Our Security Services?
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Industry-leading security protocols" },
                  { icon: Clock, text: "24/7 availability and support" },
                  { icon: Users, text: "Professionally trained staff" },
                  { icon: Award, text: "Certified and licensed personnel" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="w-6 h-6" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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

        {/* Testimonials */}
        {/* <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Testimonial
            content="Art Edge's security services have transformed how we approach safety at our facilities. Their team is professional, vigilant, and always goes above and beyond."
            author="Sarah Johnson"
            company="Metro Commercial Properties"
          />
          <Testimonial
            content="We've been impressed by the level of training and professionalism shown by Art Edge's security personnel. They're an integral part of our security strategy."
            author="Michael Chen"
            company="Global Tech Industries"
          />
        </div>
      </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Enhance Your Security?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request a Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </button> */}
              <button className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Contact Us Today
                {/* <PhoneCall className="ml-2 w-5 h-5" /> */}
              </button>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        {/* <section className="py-8 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-lg mb-4 md:mb-0">
                Discover how we can protect what matters most to you
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default App;
