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
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutUS");

  const ourcorevalues = [
    {
      icon: Briefcase,
      title: t("ourcorevalues.experience"),
      description: t("ourcorevalues.experience_description"),
    },
    {
      icon: Award,
      title: t("ourcorevalues.professionalism"),
      description: t("ourcorevalues.professionalism_description"),
    },
    {
      icon: Smile,
      title: t("ourcorevalues.customer_satisfaction"),
      description: t("ourcorevalues.customer_satisfaction_description"),
    },
    {
      icon: Users,
      title: t("ourcorevalues.community_commitment"),
      description: t("ourcorevalues.community_commitment_description"),
    },
  ];

  const whatmakesusunique = [
    {
      icon: ShieldCheck,
      title: t("whatmakesusunique.reliable_workforce"),
      description: t("whatmakesusunique.reliable_workforce_description"),
    },
    {
      icon: Layers,
      title: t("whatmakesusunique.comprehensive_solution"),
      description: t("whatmakesusunique.comprehensive_solution_description"),
    },
    {
      icon: Lightbulb,
      title: t("whatmakesusunique.innovation"),
      description: t("whatmakesusunique.innovation_description"),
    },
    {
      icon: TrendingUp,
      title: t("whatmakesusunique.track_record"),
      description: t("whatmakesusunique.track_record_description"),
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="h-[40vh] bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center bg-cover">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <h1 className=" text-3xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight pt-8 capitalize">
              {t("title")}
            </h1>
            <p className="text-md md:text-xl text-blue-800 mb-6 leading-relaxed">
              {t("description")}
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
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                  {t("our_mission")}
                </h2>
              </div>
              <p className="text-gray-600 mb-4 capitalize">{t("mission")}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-none">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                  {t("our_vission")}
                </h2>
              </div>
              <p className="text-gray-600">{t("vission")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("ourcorevalues.title")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {ourcorevalues.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-none"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3 capitalize">
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
              {t("whatmakesusunique.title")}
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t("whatmakesusunique.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatmakesusunique.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-[#2563eb] rounded-sm shadow-none"
              >
                <feature.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2 capitalize">
                  {feature.title}
                </h3>
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
