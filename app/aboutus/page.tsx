import React from "react";
import {
  Briefcase,
  Users,
  Target,
  Smile,
  Award,
  Sparkles,
  ShieldCheck,
  Layers,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import Staff from "@/components/staff";
import ImageGallery from "@/components/gallery";

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
    <div className="min-h-screen">

      <div className="h-[40vh] bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center bg-cover">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <h1 className=" text-3xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight pt-8 capitalize">
              about artedge trading plc
            </h1>
            <p className="text-md md:text-xl text-blue-800 mb-6 leading-relaxed">
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
            <div className="bg-white p-8 rounded-lg shadow-none">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 mb-4 capitalize">
                Ensuring the safety of our customers by providing reliable
                security guards,janitors and cleaning supplies,as well as
                cleaning services that contribute to health and hygiene ,we will
                have 10000 employees by 2030.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-none">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                Delivering efficient and professional janitorial, cleaning, and
                security services while prioritizing customer satisfaction. We
                focus on innovation, customized solutions, and disciplined
                management to exceed expectations.
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
                className="text-center p-6 bg-white rounded-lg shadow-none"
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
      <section className="py-16  text-white bg-gray-50">
        <div className="container mx-auto px-4 flex gap-4 flex-col">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              What Makes Us Unique
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our unwavering commitment to excellence and innovation sets us
              apart from the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatsetsusapart.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-[#2563eb] rounded-sm shadow-none"
              >
                <feature.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Staff></Staff>
      <ImageGallery></ImageGallery>
    </div>
  );
}
