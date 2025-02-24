"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";
export function Navbar() {
  const t = useTranslations("NavBar");
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/#service_section" },
    { name: t("aboutus"), href: "/aboutus" },
    { name: t("contactus"), href: "/contactus" },
  ];

  return (
    <nav className="shadow-none fixed  w-full z-50 bg-[#214186]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 p-2 items-center">
          <div className="">
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

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=" text-white hover:text-[#49bbe1] px-3 py-2 rounded-md text-lg font-extrabold transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#ADD8E6] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Improved animation and spacing */}
      <div
        className={`md:hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-[#2d8cab] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
