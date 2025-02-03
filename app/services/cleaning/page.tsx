import React from "react";
import {
  Brush,
  Home,
  Factory,
  Building2,
  Sparkles,
  Shield,
  Clock,
  Leaf,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Cleaning() {
  const t = useTranslations("CleaningService");

  const services = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: t("services.office_cleaning"),
      description: t("services.office_cleaning_description"),
    },
    {
      icon: <Home className="w-6 h-6 text-blue-600" />,
      title: t("services.residential_cleaning"),
      description: t("services.residential_cleaning_description"),
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      title: t("services.industrial_cleaning"),
      description: t("services.industrial_cleaning_description"),
    },
    {
      icon: <Brush className="w-6 h-6 text-blue-600" />,
      title: t("services.post_construction_cleaning"),
      description: t("services.post_construction_cleanig_description"),
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-600" />,
      title: t("services.sanitization_services"),
      description: t("services.sanitization_services_description"),
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t("features.professional_excellence"),
      description: t("features.professional_excellence_description"),
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: t("features.reliable_service"),
      description: t("features.reliable_service_description"),
    },
    {
      icon: <Leaf className="w-8 h-8 text-blue-600" />,
      title: t("features.eco_friendly"),
      description: t("features.eco_friendly_description"),
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t("features.customer_satisfaction"),
      description: t("features.customer_satisfaction_description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] md:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-b-lg">
          <div className="block md:hidden">
            <Image
              src="/services/cleaning_hero.png"
              alt="Hero Background"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/services/cleaning_hero.png"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 via-blue-500/80 to-blue-500/90 md:bg-gradient-to-r md:from-blue-600/80 md:via-blue-500/80"></div>

        {/* Content */}
        <div className="relative max-w-full mx-auto h-full">
          <div className="flex items-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                {t("title")}
              </h1>
              <p className="mt-4 text-xl text-blue-100 mb-8">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("services.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("features.title")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {t("cta.title")}
          </h2>
          <div>
            <Link href={"/contactus"}>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                {t("cta.button")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
