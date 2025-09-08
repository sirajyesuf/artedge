import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('hero5.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-500/80 to-blue-900/90"></div>

      <div className="relative max-w-full mx-auto h-full">
        <div className="flex  items-center h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              {t("slogan")}
            </h1>
            <p className="mt-4 text-xl text-blue-100 mb-8">
              {t("description")}
              <br />
            </p>
            <Link
              href="/#service_section"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
