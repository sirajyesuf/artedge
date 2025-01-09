import React from "react";
import {
  Briefcase,
  Users,
  Target,
  Smile,
  Award,
  Sparkles,
  ChevronRight,
  Phone,
  ShieldCheck,
  Layers,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import Footer from "@/components/footer";

export default function AboutUs() {
  const ourcorevalues = [
    {
      icon: Briefcase,
      title: "Experience",
      description:
        "We operate with integrity,ensuring transparency and accountability in all our operations.",
    },
    {
      icon: Award,
      title: "Professionalism",
      description:
        "our team adheres to high standards of service excellence and ethics.",
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description:
        "Ensuring customer satisfaction is our priority with a focus on customized solutions.",
    },
    {
      icon: Users,
      title: "Community Commitment",
      description:
        "we are committed to contributing to the safety and cleanliness of the communities we serve.",
    },
  ];

  const whatsetsusapart = [
    {
      icon: ShieldCheck,
      title: "Reliable Workforce",
      description: "Highly trained and dedicated team members",
    },
    {
      icon: Layers,
      title: "Comprehensive Solutions",
      description: "End-to-end security and cleaning services",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Latest technology and modern approaches",
    },
    {
      icon: TrendingUp,
      title: "Track Record",
      description: "Consistently satisfied clients and partners",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div
          className="relative h-[60vh] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/75">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-white mb-4">
                About Art Edge Trading PLC
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Delivering excellence in security, cleaning, and professional
                development services.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Ensuring the safety of our customers by providing reliable
                  security guards, professional janitors, and high-quality
                  cleaning supplies while contributing to health and hygiene.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    Target: Building a team of 10,000 skilled employees by 2023
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600">
                  Delivering efficient and professional janitorial, cleaning,
                  and security services while prioritizing customer
                  satisfaction. We focus on innovation, customized solutions,
                  and disciplined management to exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {ourcorevalues.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Sets Us Apart?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatsetsusapart.map((feature, index) => (
                <div key={index} className="p-6 bg-blue-800 rounded-lg">
                  <feature.icon className="w-10 h-10 text-blue-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Ready to Experience Excellence?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Explore Our Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Contact Us Today
                <Phone className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
