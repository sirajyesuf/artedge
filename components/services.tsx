import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  SprayCanIcon as Spray,
  Package,
  GraduationCap,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("OurService");

  const services = [
    {
      title: t("security_service"),
      description: t("security_service_description"),
      icon: Shield,
      image: "/services/security.jpg",
      detailHref: "/services/security",
    },
    {
      title: t("cleaning_service"),
      description: t("cleaning_service_description"),
      icon: Spray,
      image: "/services/cleaning.jpg",
      detailHref: "/services/cleaning",
    },
    {
      title: t("supplies_service"),
      description: t("supplies_service_description"),
      icon: Package,
      image: "/services/supplies.jpg",
      detailHref: "/services/supplies",
    },
    {
      title: t("skill_supplies"),
      description: t("skill_supplies_description"),
      icon: GraduationCap,
      image: "/services/skill.jpg",
      detailHref: "/services/skill",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="service_section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          {t("title")}
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
            >
              <div className="mb-4 relative w-full h-auto">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg"
                    width={600}
                    height={400}
                    layout="responsive"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                    <service.icon className="w-16 h-16 text-blue-500" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-4 self-center">
                <Link
                  href={service.detailHref}
                  className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {t("learnmore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
