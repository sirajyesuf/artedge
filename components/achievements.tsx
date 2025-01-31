import React from "react";
import { Users, Briefcase, Award, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

type AchievementProps = {
  icon: React.ComponentType<{ size: number; strokeWidth: number }>;
  number: string;
  description: string;
  color: string;
};
function Achievement({
  icon: Icon,
  number,
  description,
  color,
}: AchievementProps) {
  return (
    <div className="group flex flex-col items-center p-8 transition-all duration-300 hover:-translate-y-1">
      <div
        className={`${color} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 text-5xl font-extrabold text-blue-900">{number}</h3>
      <p className="mt-3 text-gray-600 text-center max-w-xs">{description}</p>
    </div>
  );
}

function Achievements() {
  const t = useTranslations("OurAchievementsInNumbers");
  const achievements = [
    {
      icon: Users,
      number: "50+",
      description: t("number_clients"),
      color: "text-blue-500",
    },
    {
      icon: Briefcase,
      number: "4+",
      description: t("years_excellence"),
      color: "text-blue-600",
    },
    {
      icon: Award,
      number: "1000+",
      description: t("skilled_employees"),
      color: "text-blue-700",
    },
    {
      icon: CheckCircle,
      number: "100+",
      description: t("successfull_projects"),
      color: "text-blue-800",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
