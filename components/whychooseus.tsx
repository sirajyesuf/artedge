import { Users, Clock, Heart, Lightbulb, HandHeart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUS");
  const reasons = [
    {
      icon: Users,
      title: t("experience"),
      description: t("experience_description"),
    },
    {
      icon: Clock,
      title: t("reliability"),
      description: t("reliability_description"),
    },
    {
      icon: Heart,
      title: t("customerfocus"),
      description: t("customerfocus_description"),
    },
    {
      icon: Lightbulb,
      title: t("innovation"),
      description: t("innovation_description"),
    },
    {
      icon: HandHeart,
      title: t("community_involvement"),
      description: t("community_involvement_description"),
    },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-blue-100 inline-block group-hover:bg-blue-600 transition-colors duration-300">
                <reason.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
