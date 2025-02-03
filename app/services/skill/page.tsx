import React from "react";
import { GraduationCap, ClipboardCheck, Users } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
function App() {
  const t = useTranslations("skill");

  const whatweoffer = [
    {
      image: "/services/skill/securitytraning.png",
      title: t("whatweoffer.security_training"),
      description: t("whatweoffer.security_training_description"),
    },
    {
      image: "/services/skill/cleaningtraning.png",
      title: t("whatweoffer.cleaning_staff_training"),
      description: t("whatweoffer.cleaning_staff_training_description"),
    },
    {
      image: "/services/skill/customerservice.png",
      title: t("whatweoffer.customer_services_training"),
      description: t("whatweoffer.customer_services_training_description"),
    },
  ];

  const whychooseus = [
    {
      icon: GraduationCap,
      title: t("whychooseus.expert_trainers"),
      description: t("whychooseus.expert_trainers_description"),
    },
    {
      icon: ClipboardCheck,
      title: t("whychooseus.structured_programs"),
      description: t("whychooseus.structured_programs_description"),
    },
    {
      icon: Users,
      title: t("whychooseus.hands_on_learning"),
      description: t("whychooseus.hands_on_learning_description"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-100 mb-8">{t("description")}</p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            {t("whatweoffer.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatweoffer.map((service, index) => (
              <TrainingCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            {t("whychooseus.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whychooseus.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
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

function TrainingCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-8 justify-between">
      <div className="h-[60%] p-6 flex items-center justify-center bg-gray-100 rounded-lg">
        <Image
          src={image}
          alt={`image.split("/").pop().split(".")[0]`}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
