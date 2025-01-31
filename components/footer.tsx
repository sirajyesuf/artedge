import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center sm:justify-start">
              <Link href="/">
                <Image
                  src="/artedgelogowhite-removebg.png"
                  alt="logo"
                  width={160}
                  height={200}
                  className="max-h-full max-w-full object-contain"
                  priority
                />
              </Link>
            </div>
            <p className="mt-2 text-gray-400 text-center sm:text-left text-sm md:text-base">
              {t("logo_description")}
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              {t("quick_links.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#service_section"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  {t("quick_links.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  {t("quick_links.aboutus")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#client_section"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  {t("quick_links.clients")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-gray-400 hover:text-blue-500 text-sm md:text-base"
                >
                  {t("quick_links.contactus")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              {t("services.title")}
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/services/security"
                className="text-gray-400 text-sm md:text-base"
              >
                {t("services.security_service")}
              </Link>
              <Link
                href="/services/cleaning"
                className="text-gray-400 text-sm md:text-base"
              >
                {t("services.cleaning_service")}
              </Link>
              <Link
                href="/services/supplies"
                className="text-gray-400 text-sm md:text-base"
              >
                {t("services.supplies")}
              </Link>
              <Link
                href="/services/skill"
                className="text-gray-400 text-sm md:text-base"
              >
                {t("services.skill")}
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              {t("contactinfo.title")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                +251 911 389 703
              </li>
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                artedgetradingplc@gmail.com
              </li>
              <li className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                tagelmin@gmail.com
              </li>
              <Link
                href="https://maps.app.goo.gl/8aNq36c7rqN76RV86"
                className="flex items-center justify-center sm:justify-start text-gray-400 text-sm md:text-base"
                target="_blank"
              >
                <MapPin
                  className="h-4 w-4 md:h-5 md:w-5 mr-2"
                  color="#3569d7"
                />
                {t("contactinfo.address")}
              </Link>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Art Edge Trading PLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
