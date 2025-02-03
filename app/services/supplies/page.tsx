import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Product({ title, image }: { title: string; image: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-between gap-4">
      <div className="w-auto h-auto bg-white p-2">
        <Image
          src={image}
          alt={`image.split("/").pop().split(".")[0]`}
          width={600}
          height={400}
        />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default function Supplies() {
  const t = useTranslations("Supplies");
  const securitySupplies = [
    {
      title: t("securitysupplies.safety_boots"),
      image: "/services/supplies/safetyboots.png",
    },
    {
      title: t("securitysupplies.protective_helmets"),
      image: "/services/supplies/protectivehelmet.png",
    },
    {
      title: t("securitysupplies.security_uniforms"),
      image: "/services/supplies/securityuniform.png",
    },
    {
      title: t("securitysupplies.body_armor"),
      image: "/services/supplies/bodyarmor.png",
    },
  ];

  const cleaningChemicals = [
    {
      title: t("cleaningsupplies.disinfectants"),
      image: "/services/supplies/disinfectant.png",
    },
    {
      title: t("cleaningsupplies.sanitizers"),
      image: "/services/supplies/sanitizers.png",
    },
    {
      title: t("cleaningsupplies.wipes"),
      image: "/services/supplies/cleaningwipes.png",
    },
    {
      title: t("cleaningsupplies.agent"),
      image: "/services/supplies/specializedcleaningagent.png",
    },
  ];

  const cleaningEquipment = [
    {
      title: t("cleaningsupplies.microfiber_cloths"),
      image: "/services/supplies/microfibercloths.png",
    },
    {
      title: t("cleaningsupplies.scrubbers"),
      image: "/services/supplies/scrubbers.png",
    },
    {
      title: t("cleaningsupplies.squeegees"),
      image: "/services/supplies/squeegees.png",
    },
    {
      title: t("cleaningsupplies.sprays"),
      image: "/services/supplies/cleaningsprays.png",
    },
    {
      title: t("cleaningsupplies.sponges"),
      image: "/services/supplies/sponges.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] md:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-b-lg">
          <div className="block md:hidden">
            <Image
              src="/services/supplies_hero.png"
              alt="Hero Background"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/services/supplies_hero.png"
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

      {/* Security Supplies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("securitysupplies.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securitySupplies.map((item, index) => (
              <Product key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Supplies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("cleaningsupplies.title1")}
          </h2>

          {/* Cleaning Chemicals */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              {t("cleaningsupplies.title2")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cleaningChemicals.map((item, index) => (
                <Product key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Cleaning Equipment and Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              {t("cleaningsupplies.title3")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cleaningEquipment.map((item, index) => (
                <Product key={index} {...item} />
              ))}
            </div>
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
