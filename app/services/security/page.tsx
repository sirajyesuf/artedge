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
import { useTranslations } from "next-intl";

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

function App() {
  const t = useTranslations("SecurityService");

  const securitySolutions = [
    {
      icon: ShieldCheck,
      title: t("services.vip_protection_service"),
      description: t("services.vip_protection_service_description"),
    },
    {
      icon: CalendarCheck,
      title: t("services.event_escort_service"),
      description: t("services.event_escort_service_description"),
    },
    {
      icon: Package,
      title: t("services.asset_escort_service"),
      description: t("services.asset_escort_service_description"),
    },
    {
      icon: UserCheck,
      title: t("services.escort_service"),
      description: t("services.escort_service_description"),
    },
    {
      icon: Camera,
      title: t("services.survilance_and_monitoring_service"),
      description: t("services.survilance_and_monitoring_service_description"),
    },
    {
      icon: Zap,
      title: t("services.crisis_management_and_emergency_response_service"),
      description: t(
        "services.crisis_management_and_emergency_response_service_description"
      ),
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="relative h-[50vh] md:h-[60vh]">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-b-lg">
            <div className="block md:hidden">
              <Image
                src="/services/security_guard_banner.png"
                alt="Hero Background"
                layout="fill"
                objectFit="contain"
                objectPosition="top"
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/services/security_guard_banner.png"
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
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Enhance Your Security?
            </h2>
            <div>
              <Link href={"/contactus"}>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
