import Link from "next/link";
import {
  Shield,
  SprayCanIcon as Spray,
  Package,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "Security Services",
    description:
      "Professional armed and unarmed security personnel, mobile patrols, event security, and advanced surveillance solutions.",
    icon: Shield,
    href: "/services/security",
  },
  {
    title: "Cleaning Services",
    description:
      "Comprehensive cleaning solutions for offices, residences, industries, and post-construction projects.",
    icon: Spray,
    href: "/services/cleaning",
  },
  {
    title: "Provision of Cleaning Supplies",
    description:
      "High-quality cleaning supplies, including chemicals, tools, and personal protective equipment.",
    icon: Package,
    href: "/services/supplies",
  },
  {
    title: "Skill Development",
    description:
      "Skill-enhancing programs for security staff, cleaning personnel, and customer service teams.",
    icon: GraduationCap,
    href: "/services/training",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50" id="service_section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Our Services
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Reliable solutions tailored to meet your needs in security,
          cleanliness, and professional development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-4 self-center">
                <Link
                  href={service.href}
                  className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
